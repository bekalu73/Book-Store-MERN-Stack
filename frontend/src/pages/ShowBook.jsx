import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinners.jsx";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <BackButton />
      <h1 className="text-4xl font-bold text-gray-800 my-8 text-center">
        Book Details
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-8 mx-auto">
          <div className="my-4">
            <span className="block text-lg font-semibold text-gray-600">
              ID
            </span>
            <span className="text-xl text-gray-800">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="block text-lg font-semibold text-gray-600">
              Title
            </span>
            <span className="text-xl text-gray-800">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="block text-lg font-semibold text-gray-600">
              Author
            </span>
            <span className="text-xl text-gray-800">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="block text-lg font-semibold text-gray-600">
              Publish Year
            </span>
            <span className="text-xl text-gray-800">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="block text-lg font-semibold text-gray-600">
              Created At
            </span>
            <span className="text-xl text-gray-800">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="my-4">
            <span className="block text-lg font-semibold text-gray-600">
              Last Updated At
            </span>
            <span className="text-xl text-gray-800">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
