import { Children } from "react";
import ReactDom from "react-dom";
import "./index.css";

//setup vars{
const books =[
{
  id:1,
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
  img:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8486/9781848690691.jpg"
},
{
  id:2,
  title: "If Animals Kissed Good Night",
  author: "Ann Whitford Paul",
  img: "https://mpd-biblio-covers.imgix.net/9780374300210.jpg?w=900",
},
{
  id:3,
  title: "The Wonderful Things You Will Be",
  author: "Emily Winfield Martin",
  img: "https://i.ytimg.com/vi/jwiWJDh1ULs/hqdefault.jpg",
}];

// const newBook = books.map((title)=>{
//  console.log(title);
// });

const BookList = () => {
  return (
    <section className="booklist">
     {books.map((book, index) => {
       return (<Book key={book.id} {...book}></Book>);
     })}
    </section>
  );
};

const Book = (props) => {
   const {img, title, author} = props;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <br/>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));