import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
  const [readMore,setreadMore]=useState(false);
  return <article className="single-tour">

<img src={image} alt="name"/>
<footer>
  <div className="tour-info">
    <h4>{name}</h4>
    <div className="tour-price">${price}</div>
  </div>
  <p> {readMore?info:`${info.substring(0,200)}...`} <button onClick={()=>{
    setreadMore(!readMore)
  }}>{readMore?'showless':'show more'}</button></p>

  <button className="delete-btn" onClick={()=>removeTour(id)}> not interested</button>
</footer>
  </article>;
};

export default Tour;
