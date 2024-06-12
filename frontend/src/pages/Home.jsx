import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinners.jsx";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center gap-x-4 my-4">
        <button
          className={`px-4 py-2 rounded-lg shadow-md transition duration-300 ${
            showType === "table"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600"
          }`}
          onClick={() => setShowType("table")}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 rounded-lg shadow-md transition duration-300 ${
            showType === "card"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border border-blue-600"
          }`}
          onClick={() => setShowType("card")}
        >
          Card View
        </button>
      </div>
      <div className="flex justify-between items-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Books List</h1>
        <Link
          to="/books/create"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <MdOutlineAddBox className="text-4xl" />
        </Link>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
