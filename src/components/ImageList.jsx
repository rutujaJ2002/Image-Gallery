import React from "react";
import ImageShow from "./ImageShow";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";

const ImageList = ({images, checkTerm})=>{

    const [modal, setModal]=useState(true);

    const openModal=()=>{
        setModal(true);
    }

    const closeModal=()=>{
        setModal(false)
    }

    useEffect(()=>{
        openModal()
    },[checkTerm])

    const renderedImages = images.map((image, index)=>{
        return <ImageShow image={image} key={index}/>
    })

    let content = '';
    if(modal){
        content=  <div className="modal">
                    <h2>No images are found</h2>
                    <h4>Search with other valid input</h4>
                    <button onClick={closeModal}>Ok</button>
                </div>
    }

    return(
        <div className="image-list">
             {  renderedImages.length === 0 && checkTerm ? content : renderedImages} 
        </div>
    )
}

export default ImageList;