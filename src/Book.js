import React from 'react'

const Book = (props) => {
    const {img, title, author} = props;
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = () => {
       alert("Hello world");
    }
 
    const complexHandler = (author) => {
     console.log(author);
  }
   return (
     <article className="book" onMouseOver={()=>{
       console.log("this is the book: " + title)
     }}>
       <img src={img} />
       <h1 onClick={()=>{console.log("Your book name is: " + title)}}>{title}</h1>
       <br/>
       <h4>{author}</h4>
       <button type="button" onClick={clickHandler}>Event sample</button>
       <button type="button" onClick={()=>complexHandler(author)}>2st Event sample</button>
     </article>
   );
 };
 

export default Book