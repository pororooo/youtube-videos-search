import {FaUserFriends, FaCalendarAlt, FaUser, FaHeart, FaHeartBroken} from 'react-icons/fa'
import InfiniteScroll from "react-infinite-scroll-component";
import more from "./Search";

const Card=({video})=>{

    // const key = 'AIzaSyARSbd0YJiYP7fNniT-Jkn2iA-HREVI1Xk'
    // const url = `https://youtube.googleapis.com/youtube/v3/videos/rate?id=CxgOKJh4zWE&rating=like&key=AIzaSyARSbd0YJiYP7fNniT-Jkn2iA-HREVI1Xk`
    

  
        return(
            <div className='container'>
                    {
                        video.map((item)=>{
                            let thumbnail = item.snippet.thumbnails.high.url;
                            let description = item.snippet.description;
                            let title = item.snippet.title;
                            let channel = item.snippet.channelTitle;
                            let date = item.snippet.publishedAt;

                            return(
                                <div className="card">
                                    <div>
                                        <img className="thumbnail" src={thumbnail} alt=''/>
                                    </div>
                                    <div className="title">
                                        {title}
                                    </div>
                                    <div className="description">
                                        {description}
                                    </div>
                                    <div className="channel"><FaUser/>{channel}</div>
                                    <div className="info">
                                        <div className="date"><FaCalendarAlt/>{date}</div>
                                        <div><FaUserFriends/></div>
                                        <div><FaHeart/></div>
                                        <div><FaHeartBroken/></div>
                                    </div>
                                </div>
                                )
                        })
                    }

                {/* </InfiniteScroll> */}
            </div>
    )

}
export default Card;