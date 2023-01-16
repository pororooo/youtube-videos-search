import React from "react";
import {FaUserFriends, FaCalendarAlt, FaUser, FaHeart, FaHeartBroken} from 'react-icons/fa'

const Card=()=>{
        return(
        <div className="card">
            <div className="thumbnail">
                <img></img>
            </div>
            <div className="description">
                description
            </div>
            <div className="channel"><FaUser/>channel</div>
            <div className="info">
                <div><FaCalendarAlt/></div>
                <div><FaUserFriends/></div>
                <div><FaHeart/></div>
                <div><FaHeartBroken/></div>
            </div>
        </div>
    )

}
export default Card;