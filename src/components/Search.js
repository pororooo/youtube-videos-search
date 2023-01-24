import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {FaSearch} from 'react-icons/fa'
import Card from "./Card";
import style from '../components/style.css';

const Search=()=>{
    const [search, setSearch]=useState("")
    const [videosData, setData]=useState([])
    const [maxResults, setMaxResults]=useState(3)
    const [nextPageToken, setPageToken]=useState("")
    const [fetching, setFetching]=useState(true)
    const key = 'AIzaSyBta9bCtddYGoFYbJGwVf2LeX-3RBF6djU'
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${key}&maxResults=${maxResults}&order=relevance&pageToken=${nextPageToken}`

    const getVideos=()=>{
        axios.get(url)
        .then(res => {
          setData(res.data.items)
          setPageToken(nextPageToken => nextPageToken=res.data.nextPageToken)
          console.log(res.data.nextPageToken)
       })
        .catch(err=>console.log(err))
    }
    //.then(res => setBooks(books.concat(<div className="main">{<Card book={res.data.items}/>}</div>)))
    const nextPage =()=>{
      axios.get(url)
      .then(res => {
        setData(res.data.items)
        setPageToken(nextPageToken => nextPageToken=res.data.nextPageToken)
      })
      .catch(err=>console.log(err))
  }
    

    const handleSubmit = e => {
        e.preventDefault();
        getVideos()
      }

    const searchVideos = e => {
        if(e.key === 'Enter'){
          getVideos()
      }
    }

    const initialState = {
      pagesCount: 12,
      pages: [],
      currentPage: 1,
      pagesLength: 3
    }
    for(let i = initialState.currentPage; i <= initialState.pagesLength; i++){
      initialState.pages.push(i)
  }

    const pageButtons = () =>{
      
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
                    onKeyDown={searchVideos}
                     />
                    <button onClick={handleSubmit} className="faSearch"><FaSearch/></button>
                </div>
            </div>
            <div className="cards">
                {
                    <Card video={videosData}/>
                }
            </div>
            <div className="scrollButtons">
            {
                  initialState.pages.map(page=>{
                    return <button onClick={nextPage} 
                    //className={initialState.currentPage === page && style.selectedPage}
                    >{page}</button>
                  })
                }
            </div>
        </div>
    )
}
export default Search;