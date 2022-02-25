import ReactDom from "react-dom";
import "./index.css";
import { Children } from "react";

import {data} from './books';
import Book from './Book'


const BookList = () => {
  return (
    <section className="booklist">
     {data.map((data, index) => {
       return (<Book key={data.id} {...data}></Book>);
     })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
