import { useState } from "react";
import "./App.css";
import StudentDetails from "./StudentDetails";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (name === "" || number === "" || age === "" || gender === "") {
      alert("Please fill all the fields.");
      return;
    }
    setName("");
    setNumber("");
    setAge("");
    setGender("");
    setData([...data, { name, number, age, gender }]);
  };
  const handleDelete = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };
  return (
    <>
      <h1>Student details</h1>
      <div className="form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          autoComplete="name"
          spellCheck="false"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          name="number"
          id="number"
          placeholder="Enter number"
          autoComplete="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter age"
          autoComplete="tel"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button onClick={handleSubmit}>Add</button>
      </div>

      {data.map((item, index) => (
        <StudentDetails
          key={index}
          {...item}
          index={index + 1}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </>
  );
}

export default App;
