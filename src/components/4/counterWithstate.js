import { useState } from "react";

export default function CounterWithState() {
  const defaultAge = 10;
  const [age, setAge] = useState(defaultAge);
  const [team, updateTeam] = useState("Thames");
  function incrementAge() {
    updateTeam("NotDecidedYet");
    setAge(age + 1);
  }
  return (
    <div>
     
      <p>Updating the state renders the view automatically. React takes care of it.</p>
      <p>The age is {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Team namessssssssssss: {team}</p>
    </div>
  );
}
