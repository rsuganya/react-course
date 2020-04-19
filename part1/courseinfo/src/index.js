import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <><h1>{props.name}</h1></>
  );
}

const Part = (props) => {
  return (
    <><p>
    {props.part.name} {props.part.exercises}
    </p></>
  );
}

const Content = (props) => {
  var part=props.parts;
  return (
   
    <div>
       <Part part={part[0]} />
       <Part part={part[1]} />
       <Part part={part[2]} />
    </div>
   
  );
}

const Total = (props) => {
  var part=props.parts;
  return (
    <>
      <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>  
    </>
  );
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
    name: 'State of a component',
      exercises: 14
    }]
}
  
  return (
    <div>
      <Header name={course.name}></Header>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


