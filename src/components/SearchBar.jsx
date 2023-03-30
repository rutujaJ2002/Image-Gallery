import React, {useState} from "react";
import '../App.css';

const SearchBar = ({onSubmit})=>{

    const [searchTerm, setSearchTerm]= useState('');

    const handleFormSubmit=(e)=>{
        onSubmit(searchTerm)
        e.preventDefault();
        setSearchTerm('');
    }

    const handleChange= (e)=>{
        const term= e.target.value;
        setSearchTerm(term);
    }

    return(
        <div>   
            <form action="" onSubmit={handleFormSubmit}>
                <h4>Image Search Gallery</h4>
                <input type="text" placeholder="Search for images..." onChange={handleChange} value={searchTerm}/>
            </form>
        </div>
    )
}

export default SearchBar;