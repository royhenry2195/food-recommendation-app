import React from "react";
import "./styles.css";
import { useState } from "react";

const foodData = {
  gujarati: [
    { name: "Fafda", rating: "4/5" },
    { name: "Dhokla", rating: "3.5/5" },
    { name: "Handva", rating: "4.5/5" }
  ],
  southIndian: [
    {
      name: "Idli",
      rating: "5/5"
    },
    {
      name: "Dosa",
      rating: "4.5/5"
    },
    {
      name: "Upma",
      rating: "4/5"
    }
  ],
  punjabi: [
    {
      name: "Rajma chawal",
      rating: "3.5/5"
    },
    {
      name: "Paneer tufani",
      rating: "5/5"
    },
    {
      name: "chhole bhature",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Foods </h1>
      <div>
        {Object.keys(foodData).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodData[selectedGenre]?.map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "#E5E7EB"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
