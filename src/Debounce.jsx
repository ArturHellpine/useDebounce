import React, {useState} from 'react';
import axios from "axios";
import {useDebounce} from "./hooks/useDebounce";

const Debounce = () => {
    const [value, setValue] = useState('')
    const search = async(query) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?query' +query)
        console.log(response.data)
    }
    const debouncedSearch = useDebounce(search, 500)
    const onChange = (e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }
    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    );
};

export default Debounce;