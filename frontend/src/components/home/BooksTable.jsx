import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-6 text-left">No</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left max-md:hidden">Author</th>
            <th className="py-3 px-6 text-left max-md:hidden">Publish Year</th>
            <th className="py-3 px-6 text-center">Operations</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="border-b border-gray-200 hover:bg-gray-100 transition duration-300"
            >
              <td className="py-3 px-6 text-left">{index + 1}</td>
              <td className="py-3 px-6 text-left">{book.title}</td>
              <td className="py-3 px-6 text-left max-md:hidden">
                {book.author}
              </td>
              <td className="py-3 px-6 text-left max-md:hidden">
                {book.publishYear}
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition duration-300" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition duration-300" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-700 transition duration-300" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
