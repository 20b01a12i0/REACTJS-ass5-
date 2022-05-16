import React from 'react';
import Faker from 'faker'; 
function CommentBox(props){
    
    return (

<div className="ui cards">
        <div className="card">
          <div className="content">
           <img className="right floated mini ui image" src={Faker.image.image()}  />
            <div className="header">
              {props.name}
            </div>
            <div className="meta">
              {props.type}
            </div>
            <div className="description">
             {props.des}
            </div>
          </div>
          </div>
        </div>
 
      
        

    )
}
export default CommentBox;