import React from 'react';
import data from './Object';


export default function index() {
  return (
    <>
         {
            data.map((ele) => {
                            return (
                              <>
                              <div>
        <img src={ele.image} alt="lg" />
           </div>
           <div>{ele.name}</div>
           <div>{ele.age}</div>
           </>
           );
      })
       }
         
    </>
  )
}
