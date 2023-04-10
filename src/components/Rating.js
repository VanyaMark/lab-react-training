import React from 'react'

const Rating = (props) => {
        const roundedRating = Math.round(Number(props.children))

    const emptyStarPath = "./../../star.svg"
    const fullStarPath = "./../../full-star.svg"

  return (
    <div className="rating">
    {roundedRating >= 1 ? <img src={fullStarPath} alt="star"/> : <img src={emptyStarPath} alt="star"/>}
    {roundedRating >= 2 ? <img src={fullStarPath} alt="star"/> : <img src={emptyStarPath} alt="star"/>}
    {roundedRating >= 3 ? <img src={fullStarPath} alt="star"/> : <img src={emptyStarPath} alt="star"/>}
    {roundedRating >= 4 ? <img src={fullStarPath} alt="star"/> : <img src={emptyStarPath} alt="star"/>}
    {roundedRating >= 5 ? <img src={fullStarPath} alt="star"/> : <img src={emptyStarPath} alt="star"/>}   
    </div>
  )
}

export default Rating