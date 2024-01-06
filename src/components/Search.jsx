import { IoSearch } from "react-icons/io5";
import PropTypes from 'prop-types';
function Search(props) {
    function handleChange(event) {
        props.searchInput(event.target.value);
    }

  return (
    <div className="flex my-6 items-center gap-1  bg-slate-100 rounded-lg p-3 cursor-pointer">
        <IoSearch />
        <input type="text" placeholder="search here ..." className='outline-none bg-slate-100' onChange={handleChange} />
        
    </div>
    
  )
}
Search.propTypes={
    searchInput:PropTypes.func
}

export default Search