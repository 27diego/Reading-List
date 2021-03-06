import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const NavBar = props => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>{`There are ${books.length} books to get through...`}</p>
    </div>
  );
};

export default NavBar;
