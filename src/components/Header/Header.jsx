import { FcReddit } from "react-icons/fc";
import { IoSearchSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SelectTopic from "../SelectTopic/SelectTopic";
import { fetchPosts, searchPosts } from "../../store/craftsnarkSlice";

const Header = () => {
    const [localSearch, setLocalSearch ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/');
        dispatch(searchPosts(localSearch));
        setLocalSearch('');
    }

    const handleClick = () => {
        navigate('/');
        dispatch(fetchPosts());
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div>
           <FcReddit /> 
           <SelectTopic />
           <button onClick={() => handleClick()}><IoHomeOutline/></button>
           <input type="text" value={localSearch} onChange={e => setLocalSearch(e.target.value)} onKeyDown={(e) => handleEnter(e)}/>
           <button onClick={() => handleSearch()}><IoSearchSharp /></button> 
        </div>
    )
}

export default Header;