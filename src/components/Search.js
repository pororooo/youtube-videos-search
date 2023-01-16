import React from "react";
import { useState } from "react";
import axios from "axios";
import {FaSearch} from 'react-icons/fa'

const Search=()=>{
    return(
        <div>
        <div className="header">
                <div className="search">
                    <input className="input" type="text" placeholder="Search"></input>
                    <button className="faSearch"><FaSearch/></button>
                </div>
            </div>
        </div>
    )
}
export default Search;