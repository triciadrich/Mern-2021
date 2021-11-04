import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const personcard = [
    {
      firstName: "Tricia",
      lastName: "Richardson",
      age: 40,
      hairColor: "brown",
    },
    {
      firstName: "Brian",
      lastName: "Richardson",
      age: 40,
      hairColor: "bald",
    },
    {
      firstName: "Debbie",
      lastName: "Wager",
      age: 30,
      hairColor: "black",
    },
    {
      firstName: "Billy",
      lastName: "Robinson",
      age: 30,
      hairColor: "brown",
    },
  ];
  return (
    <div className="App">
      <p>
        {personcard.map((element, index) => (
          <PersonCard
            key={index}
            firstName={element.firstName}
            lastName={element.lastName}
            age={element.age}
            hairColor={element.hairColor}
          />
        ))}
      </p>
    </div>
  );
}

export default App;
