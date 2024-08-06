import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPostsByFlair } from "../../store/craftsnarkSlice";
import styles from "./selectTopic.module.css";

const SelectTopic = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const topics = [
        'Sewing',
        'Knitting', 
        'Paper_Crafts', 
        'Resin', 
        'Beading', 
        'Cricut', 
        'Soap_Making', 
        'Punch_Needle', 
        'Crochet', 
        'Macreme', 
        'Latch_Hook', 
        'Embroidery', 
        'Ceramics', 
        'Show-off', 
        'Wood_Crafts', 
        'Stone_Crafts', 
        'Metal_Crafts', 
        'Glass', 
        'Quilting',
        'Yarn', 
        'General_Industry', 
        'Weaving'
    ];

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value !== ''){
            navigate('/');
            dispatch(fetchPostsByFlair(topics[value]));
            setValue('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="topic">
                Select posts by topic:
            </label>
            <select name="topic" id="topic" onChange={handleChange} value={value}>
                <option value='' hidden>Select a topic</option>
                {topics.map((topic, index) =>(
                    <option key={index} value={index}>{topic}</option>
                ))}
            </select>
            <input type="submit" value='Get Posts' disabled={value === ''}/>
        </form>
    )
}

export default SelectTopic;