import Link from "next/link";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  

  return (

    <div className="p-4">
    <div className="flex space-x-4">
      <Link href="/test">
        <button className="bg-gray-300 rounded-lg h-8 w-32 p-2 flex items-center">
          Add More
        </button>
      </Link>
      <Link href="/deleted">
        <button className="bg-red-300 rounded-lg h-8 w-32 p-2 flex items-center">
          Deleted
        </button>
      </Link>
      <Link href="/update">
        <button className="bg-blue-300 rounded-lg h-8 w-32 p-2 flex items-center">
          Update
        </button>
      </Link>
    </div>

    {userData.length > 0 ? (
        userData.map((curElem) => (
            <div key={curElem.id} className="mt-4 border rounded-lg p-4 bg-white shadow-md">
            <h3 className="text-lg font-semibold">ID: {curElem.id}</h3>
            <h2 className="text-blue-600">Email: {curElem.email}</h2>
            <p className="text-gray-700">Name: {curElem.name}</p>
          </div>
          
        ))
      ) : (
        <p className="mt-4">No data available.</p>
      )}
    </div>
    
  );
};

export default Body;

