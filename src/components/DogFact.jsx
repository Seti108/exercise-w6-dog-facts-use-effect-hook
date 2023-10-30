import { useEffect } from "react";

// DogFact Component
export const DogFact = ({ data }) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  const dogFact = data.data[0].attributes.body;

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (
    <>
      <div>{dogFact}</div>
    </>
  );
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
