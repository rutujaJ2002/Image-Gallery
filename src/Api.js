
import axios from "axios";
import { useState } from "react";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const pause=(duration)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,duration)
    })
}

const FetchComp = ()=>{
    const [loading,setLoading]= useState(false);
    const [images, setImages] = useState([]);
    const [checkTerm, setCheckTerm]= useState('');

    const searchImages= async(searchTerm)=>{
        setLoading(true);
        try{
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                headers:{
                    Authorization: 'Client-ID n_-XxY30Hoiy_6e2J2MHLumycZiLnVafI-4f-AYDQpQ' 
                },
                params:{
                    query:searchTerm,
                },
            })
            await pause(200);
            return response.data.results;
        }catch(err){
            console.error(err.message);
        }
    }

    const handleSubmit = async (SearchTerm)=>{
        const result=  await searchImages(SearchTerm);
        setImages(result);
        setLoading(false);
        setCheckTerm(SearchTerm);
    }

    return(
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            {loading ? <Loader className="ml-20"/>:<ImageList images={images} checkTerm={checkTerm}/>}
        </div>
    )
}

//export default searchImages;
export default FetchComp;