'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Dynamicdata = dynamic(()=>import('./Story'),
  {loading:()=>{<h1>Loading</h1>}
});

const TomStory = () => {
  const [state, setState] = useState(false);
  return(<>
  <h1>Tom and Jerry story</h1>
  <button className="p-2 shadow-md hover:bg-red-600 bg-red-400 rounded-xl" onClick={()=>{setState(!state)}}>view story</button>
  {state && <div className=' p-10 mx-10'><Dynamicdata/></div>}
  </>
)
}
export default TomStory;