
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'; 
import './App.css'
import NotesList from './components/NotesList'
import Search from './components/Search';

function App() {
  
  const [notes, setNotes] = useState(() => {
    try {
      //get notes from local storage
      const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      return Array.isArray(storedNotes) ? storedNotes : [];
    } catch (error) {
      console.error('Error parsing notes:', error);
      return [];
  }});
  useEffect(() => {
    // Save tasks to local storage whenever the notes state changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const [searchText, setSearchText]=useState('')
  function AddNote(text){
      const date= new Date()
      const newNote={id:nanoid(),text:text, date:date.toLocaleDateString()}
      setNotes(notes=> [...notes, newNote])
  }
  function deleteNote(id){
    setNotes(notes=>notes.filter((note)=> note.id!==id))
  }

  return (
    <div className='container'>
      <h1 className='text-2xl font-bold'>Notes</h1>
      <Search searchInput={input=>setSearchText(input)}/>
      <NotesList notes={notes.filter(note=>note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={AddNote} deleteNote={deleteNote}/>
    </div>
  )
}

export default App
