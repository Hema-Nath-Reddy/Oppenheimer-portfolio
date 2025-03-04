import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  // Fetch all items
  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/items");

    setItems(res.data);
  };

  // Add or Update an item
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await axios.put(`http://localhost:5000/items/${editingItem._id}`, {
        name,
        description,
      });
    } else {
      await axios.post("http://localhost:5000/items", { name, description });
    }
    setName("");
    setDescription("");
    setEditingItem(null);
    fetchItems();
  };

  // Edit an item
  const handleEdit = (item) => {
    setName(item.name);
    setDescription(item.description);
    setEditingItem(item);
  };

  // Delete an item
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    fetchItems();
  };

  return (
    <div className="container">
      <h2>MERN CRUD Application</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{editingItem ? "Update" : "Add"} Item</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
