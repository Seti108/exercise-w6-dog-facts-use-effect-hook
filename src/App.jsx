// Import required  hooks
import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState(null);
  // const [dogId, setDogId] = useState();

  // Hint: Define the API endpoint
  const apiUrl = "https://dogapi.dog/api/v2/facts/";

  //   {
  //     "data": [
  //         {
  //             "id": "23446baf-3f00-4981-8466-04b3bf13c616",
  //             "type": "fact",
  //             "attributes": {
  //                 "body": "A puppy is born blind, deaf, and toothless."
  //             }
  //         }
  //     ]
  // }
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.data[0]);
  //       setDogFact(res.data[0].attributes.body);
  //     });
  // }, [dogId]);

  const fetchDogFact = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0]);
        setDogFact(res.data[0].attributes.body);
      });
  };

  // const handleClick = () => {
  //   if (dogFact !== null) {
  //     // setDogFact(null);
  //     fetchDogFact();
  //   }
  // };

  useEffect(() => {
    fetchDogFact();
  }, []);

  return (
    <>
      <div className="App">{dogFact && <DogFact dogFact={dogFact} />}</div>
      <div>
        <button onClick={fetchDogFact}>Dog1</button>
      </div>
    </>
  );
};
