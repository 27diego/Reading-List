import React from "react";
import BookContextProvider from "./context/BookContext";
import NavBar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
