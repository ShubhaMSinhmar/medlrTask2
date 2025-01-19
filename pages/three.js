// // creating and resolving Promise

import React, { useState, useEffect } from "react";

export default function Promisess() {
  const [message, setMessage] = useState();

  useEffect(() => {

    const Promeese = new Promise((resolve, reject) => {
      const done = true;

      if (done) {
        resolve("Hogaya");
      } else {
        reject("Nahi hua");
      }
    });


    Promeese.then((message) => {
      setMessage(message); 
    }).catch((error) => {
      setMessage(error);
    });
  }, []); 

  return (
    <div className="bg-red-300 p-4 rounded">
      <h1 className="text-black">Promise Result</h1>
      <p>{message}</p>
    </div>
  );
}
