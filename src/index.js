import React from 'react';
import ReactDOM from 'react-dom';
import Someword from './Header';


const Component1 = () => {
  return (
    <React.Fragment>
 
    <Someword>  </Someword>

      <h1> My first Component</h1>
      <div> 
            This is my first functional component
            </div>
            </React.Fragment>
 
  )
} 
ReactDOM.render(<Component1/>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

