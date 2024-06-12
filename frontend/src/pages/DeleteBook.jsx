import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinners.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800 my-8 text-center">
        Delete Book
      </h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-xl w-full max-w-md p-8 mx-auto">
        <h3 className="text-2xl text-gray-700 mb-8">
          Are you sure you want to delete this book?
        </h3>
        <button
          className="w-full py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
