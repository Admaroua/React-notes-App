import { useState } from "react"
import PropTypes from 'prop-types';

function AddNote(props) {
    const [noteText, setNoteText]=useState('')
    const charLimits=200;
    function handleChange(event){
        if(charLimits- noteText.length>0){
            setNoteText(event.target.value)
        }
        
        
        }
    function handleSaveClick(){
        if(noteText.trim().length>0){
            props.handleAddNote(noteText)
            setNoteText('')
        }
    }
    
    
  return (
    <div className=" h-[200px] bg-green rounded-lg p-4 flex flex-col justify-between text-sm">
        <textarea 
        cols="10"
        rows="7"
        placeholder="Type to add note ..." 
        className="border-none resize-none bg-green outline-none "
        onChange={handleChange}
        value={noteText}
        ></textarea>
        <div className="flex justify-between items-center">
            <p className="">{charLimits- noteText.length} remaining</p>
            <button className="bg-button rounded-lg px-2 hover:bg-slate-200" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}
AddNote.propTypes = {
    
    handleAddNote:PropTypes.func
    // Define other prop types as needed
  };

export default AddNote