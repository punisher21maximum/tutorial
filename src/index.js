// import React from "react";
import ReactDom from "react-dom"; // for render method

function BookList() {
  return (
    <div>
      <h1>This is a Book List</h1>
      <Book1 />
      <Book1 />
      <Book1 />
    </div>
  );
}

const Book1 = () => {
  return (
    <article>
      <Image1 />
      <Title1 />
      <Author1 />
    </article>
  );
};

const Image1 = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/41FVfCxfHLS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt="image1"
    ></img>
  );
};

const Title1 = () => <h2>Wuthering Heights</h2>;
const Author1 = () => <h3>~ Emily Bronte</h3>;

ReactDom.render(<BookList />, document.getElementById("root"));
