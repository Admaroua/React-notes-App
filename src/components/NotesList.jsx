import AddNote from "./AddNote";
import Note from "./Note"
import PropTypes from 'prop-types';

function NotesList(props) {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {props.notes.map((note)=><Note key={note.id} text={note.text} date={note.date} deleteNote={()=>props.deleteNote(note.id)}/>)}
        <AddNote handleAddNote={props.handleAddNote}/>


    </div>
  )
}
NotesList.propTypes = {
  notes: PropTypes.array,
  handleAddNote:PropTypes.func,
  deleteNote:PropTypes.func
  // Define other prop types as needed
};
export default NotesList