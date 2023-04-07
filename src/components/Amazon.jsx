import React, { useState } from "react";
import list from "../data";
import Cards from "./Card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  const [input, setInput] = useState();

  return (
    <>
      <input type="text" className="text-align:center" onChange={(e) => setInput(e.target.value)} />
      <section>
        {list
          .filter((salom) => {
            return input === ""
              ? salom
              : salom.title.toLowerCase().includes(input);
          })
          .map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
      </section>
    </>
  );
};

export default Amazon;
