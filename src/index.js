// Kirupa Chinnathambi - https://www.youtube.com/watch?v=h5crrOsLbpk&t=782s
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  destination
);