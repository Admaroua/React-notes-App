
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';
function Note(props) {
  function handleDelete(){
    props.deleteNote()
  }
  return (
    <div className=" h-[200px] bg-yellow rounded-lg p-4 flex flex-col justify-between whitespace-pre-wrap text-sm">
        <p className="break-words text-justify">
        {props.text}
      </p>
        <div className="flex justify-between items-center">
            <p>{props.date}</p>
            <MdDeleteForever className="cursor-pointer" size="1.3em" onClick={handleDelete}/>
        </div>
    </div>
  )
}
Note.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string,
  deleteNote:PropTypes.func
};
export default Note