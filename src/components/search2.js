import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {FaSearch} from 'react-icons/fa'
import Card from "./Card";

const Search=()=>{
    const [search, setSearch]=useState("")
    const [videosData, setData]=useState([])
    const [maxResults, setMaxResults]=useState(3)
    const [currentPage, setPage]=useState("")
    const [fetching, setFetching]=useState(true)
    const key = 'AIzaSyBII4H_Su3aPfl0XM_pV7Sn33fjwJOuVgk'
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${key}&maxResults=${maxResults}&order=relevance${currentPage}`

    useEffect(()=>{
      axios.get(url)
      .then(res => {
        setData(res.data.items)
      })
      .catch(err=>console.log(err))      
    })
   
    const more =()=>{
      setPage(currentPage=>currentPage='&pageToken=CAoQAA')
        setMaxResults(maxResults=>maxResults+3)
        axios.get(url)
        .then(res => {
          setData(res.data.items)
          //console.log(videosData)
          // console.log(maxResults)
          // console.log(res.data.items)
        })
        .catch(err=>console.log(err))
    }

    const getVideos=()=>{
      setMaxResults(maxResults=>maxResults=6)
        axios.get(url)
        .then(res => {
          setData(res.data.items)
       })
        .catch(err=>console.log(err))
    }
    

    const handleSubmit = event => {
        event.preventDefault();
        getVideos()
        
      }

      const searchVideos=(e)=>{
        if(e.key === 'Enter'){
          getVideos()

      }
      

      // const options={
      //   root: null,
      //   rootMargin:'0px',
      //   threshold: 1.0
      // }

      // useEffect(()=>{
      //   const observer = new IntersectionObserver(more, options)
      // })

    
    return(
        <div>
        <div className="header">
                <div className="search">
                    <input className="input" type="text" placeholder="Search"
                    value={search} 
                    onChange={e=>{
                        setMaxResults(3)
                        setSearch(e.target.value)}}
                        onKeyDown={searchVideos}
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
}
export default Search;