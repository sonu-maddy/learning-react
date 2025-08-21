import React from 'react'
import { useState } from 'react'
 

export default function LikeButton () {
  let [isliked, setLiked] = useState(false);
  let toggleLIke = () => {
    setLiked(!isliked);
   
  };
  let likeStyle = {color : "red"} 
  

  return (
    <div onClick={toggleLIke}>
      {
        isliked ? <i className="fa-solid fa-heart" style={likeStyle}></i> 
         : <i className="fa-regular fa-heart"></i>
      }
       
       
    </div>
  )
}
