import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [link, setLink] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/history").then((response) => {
      setHistory(response.data);
    });
  }, [history]);

  const generateQR = async () => {
    const res = await axios.post("http://localhost:5000/generate", {
      link,
    });
    setHistory([...history, res.data]);
  };
  return (
    <div className="container">
      <h2>QR Code Generator</h2>
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter link"
      />
      <button onClick={generateQR}>Generate QR</button>
      <div className="history">
        {history.map((item, index) => (
          <div key={index}>
            <p>{item.link}</p>
            <img src={item.qrImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
