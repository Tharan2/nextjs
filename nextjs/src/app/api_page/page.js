
'use client'

import { useState } from "react";
export default function ApiPage() {
  const [response, setResponse] = useState(null);
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const getrequest = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/hello', {
        method: 'GET',

      });
      const data = await response.json();
      setResponse(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const postrequest = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/hello', {
        method: 'post',body:JSON.stringify({id:id,name:name})});
      const data = await response.json();
      setResponse(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const putrequest = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/hello', {
        method: 'put',body:JSON.stringify({id:id,name:name})});
      const data = await response.json();
      setResponse(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const deleterequest = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/hello', {
        method: 'delete',body:JSON.stringify({id})});
      const data = await response.json();
      setResponse(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-9rem)] pt-4">
      <h1 className="text-2xl font-bold font-sans">API Page</h1>
      <div className="flex items-center mt-4 space-x-4">
        <div className="border-2 border-black rounded-md shadow-md p-4">
          <h1 className="text-lg font-bold">GET Request</h1>
          <button
            className="bg-blue-500 p-2 m-2 rounded-md hover:bg-blue-700 text-white"
            onClick={getrequest}
          >
            Get Data
          </button>
        </div>
        <div className="border-2 border-black rounded-md shadow-md p-4">
          <h1 className="text-lg font-bold">Post Request</h1>
          <div className="flex flex-col">
          <input type="number" placeholder="Enter Id" value={id} onChange={(e)=>{setId(e.target.value)}} className="my-1"></input>
          <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} className="my-1"></input>
          <button
            className="bg-blue-500 p-2 m-2 rounded-md hover:bg-blue-700 text-white"
            onClick={postrequest}
          >
            Send Data
          </button>
          </div>
        </div>
        <div className="border-2 border-black rounded-md shadow-md p-4">
          <h1 className="text-lg font-bold">Put Request</h1>
          <div className="flex flex-col">
          <input type="number" placeholder="Enter Id" value={id} onChange={(e)=>{setId(e.target.value)}} className="my-1"></input>
          <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} className="my-1"></input>
          <button
            className="bg-blue-500 p-2 m-2 rounded-md hover:bg-blue-700 text-white"
            onClick={putrequest}
          >
            Update Data
          </button>
          </div>
        </div>
        <div className="border-2 border-black rounded-md shadow-md p-4">
          <h1 className="text-lg font-bold">Delete Request</h1>
          <div className="flex flex-col">
          <input type="number" placeholder="Enter Id" value={id} onChange={(e)=>{setId(e.target.value)}} className="my-1"></input>
          <button
            className="bg-blue-500 p-2 m-2 rounded-md hover:bg-blue-700 text-white"
            onClick={deleterequest}
          >
            Delete Data
          </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">Response</h1>
        <div className="border-2 border-black rounded-md shadow-md p-4">
          {response && response.length > 0 ? (
            response.map((item)=>{return <div className="flex" key={item.id}><p className="font-bold ">Id:{item.id}  </p><p className="font-bold ml-2">Name:{item.name}</p></div>})):<div>No data</div>}
        </div>
      </div>
    </div>
  );
}
