//import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';
import Button from './Button';

const App=()=>{
  return(
    <>
     <Button >
     <CommentBox name="Jenny Lawrence" type="New user" des="Jenny requested to permission to view ur details"  />
     </Button>
    
    </>
  )
}


ReactDOM.render(
    <>
    
    <App />
    </>,
     document.getElementById('root')
)