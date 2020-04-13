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
    {props.part} {props.exercises}
    </p></>
  );
}

const Content = (props) => {
  return (
   
    <div>
       <Part part={props.part[0]} exercise={props.excercises[0]} />
      <Part part={props.part[1]} exercise={props.excercises[1]} />
     <Part part={props.part[2]} exercise={props.excercises[2]} />
    </div>
   
  );
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.excercise[0] + props.excercise[1] + props.excercise[2]}</p>  
    </>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}></Header>
      <Content part={[part1,part2,part3]} excercises={[exercises1,exercises2,exercises3]}/>
      <Total excercise={[exercises1,exercises2,exercises3]}/>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


