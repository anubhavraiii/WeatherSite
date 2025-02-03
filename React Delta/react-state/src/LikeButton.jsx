import { useState } from "react"

export default function LikeButton(){

    let [isLiked, setIsLiked]  = useState(false);
    let [clicks, setClicks] = useState(0);
    let toggleLike = () => {
        setIsLiked(!isLiked);
        {!isLiked ? setClicks(clicks+1) : setClicks(clicks-1)};
    }
    let likeStyle = {color: "#ff0000"}

    return (
        <div>
           {/* <p>Clicks = {clicks}</p> */}
            <p onClick={toggleLike}>
              {isLiked ? 
              (<span><p>{clicks}</p> <i class="fa-solid fa-heart" style={likeStyle} ></i></span>) :
              (<span><p>{clicks}</p><i className="fa-regular fa-heart"></i></span>)}
            </p>
        </div>
    )
}