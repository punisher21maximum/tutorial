// v21 Mini Book Project
/*
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
*/

// v20-----------------
/*
function Greeting() {
  return (
    <div>
      <h1>Fruits</h1>
      <Apple />
      <Banana />
    </div>
  );
}

const Apple = () => <h2>I'm Apple</h2>;

const Banana = () => {
  return <h2>I'm Banana</h2>;
};
*/

// v19 ----------------------
/*
// JSX rules
// return one and only one element
// React.Fragment, <></>
// camelCase for html attr
// className instead of class
// close every element, even <img></img> or <img/>

function Greeting() {
  return <h4>Hello fellass!!!</h4>;
}
*/

// video 18 ------------------
/*
const Greeting = () => {
  return <h4>hello world</h4>;
};

const Greeting2 = () => {
  return React.createElement("h1", {}, "hello world");
};

const Morning = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

const Morning2 = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
};
*/

//before video 18 ---------------
/*
import React from "react";
import ReactDom from "react-dom"; // for render method

function Greeting() {
  // func name capital
  // always return JSX
  // always return sth

  return <h4>Hello fellas!!!</h4>;
}


// ReactDom func:
//   arg1: what to render, arg2: where to render 

//   arg1: should have closting tag, <Greetings/> or <Greeting></Greetings>

ReactDom.render(<Greeting />, document.getElementById("root"));
*/
