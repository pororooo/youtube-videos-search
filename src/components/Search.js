import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {FaSearch} from 'react-icons/fa'
import Card from "./Card";

const Search=()=>{
    const [search, setSearch]=useState("")
    const [videosData, setData]=useState([])
    const [maxResults, setMaxResults]=useState(3)
    const key = 'AIzaSyB_-yKfl2GSdtMzIl70COgvbcYUga9sBLc'
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${key}&maxResults=${maxResults}`

   
    const more =()=>{
        setMaxResults(maxResults=>maxResults+3)
        axios.get(url)
        .then(res => {
          setData(res.data.items)
          console.log(maxResults)
          console.log(res.data.items)
        })
        .catch(err=>console.log(err))
    }


    const handleSubmit = event => {
        event.preventDefault();

        setMaxResults(maxResults=>maxResults=6)

        axios.get(url)
        .then(res => {
          setData(res.data.items)
          console.log(res.data.items)
        })
        .catch(err=>console.log(err))
      }

      useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        return function(){
            document.removeEventListener('scroll', scrollHandler)
        }
      }, [])
    
      const scrollHandler =(e)=>{
        console.log('scroll')
      }
    
    return(
        <div>
        <div className="header">
                <div className="search">
                    <input className="input" type="text" placeholder="Search"
                    value={search} 
                    onChange={e=>{
                        setMaxResults(3)
                        setSearch(e.target.value)}}
                     />
                    <button onClick={handleSubmit} className="faSearch"><FaSearch/></button>
                    <button onClick={more} className="faSearch">more</button>

                </div>
            </div>
            <div className="cards">
                {
                    <Card video={videosData}/>
                }
            </div>
        </div>
    )
}
export default Search;