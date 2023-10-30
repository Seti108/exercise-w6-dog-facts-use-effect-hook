// Import required  hooks
import { useEffect, useState } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [fact, setFact] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // Hint: Define the API endpoint

  const apiUrl = "https://dogapi.dog/api/v2/facts";
  // Hint: Create a function to fetch the dog fact

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couln't reach the API end-point.");
        } else return res.json();
      })
      .then((data) => {
        setFact(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  return (
    <div className="App">
      {fact && <DogFact data={fact} />}
      {isLoading && <p>Loading the data...</p>}
    </div>
  );
};
