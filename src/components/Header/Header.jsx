import { FcReddit } from "react-icons/fc";
import { IoSearchSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import SelectTopic from "../SelectTopic/SelectTopic";
import { fetchPosts, searchPosts } from "../../store/craftsnarkSlice";
import styles from "./header.module.css";

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
            <ScrollRestoration />
           <div className={styles.logo}>
                <FcReddit size='2em' />
           </div>
           <div className={styles.header}>
                <button onClick={() => handleClick()}>
                    <IoHomeOutline/>
                </button>
                <div>
                    <SelectTopic />
                </div>
                <div>
                    <input type="text" 
                        value={localSearch} 
                        onChange={e => setLocalSearch(e.target.value)} 
                        onKeyDown={(e) => handleEnter(e)}/>
                    <button onClick={() => handleSearch()}
                        className={styles.searchButton}>
                        <IoSearchSharp />
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Header;