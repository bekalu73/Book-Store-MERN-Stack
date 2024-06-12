import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full md:max-w-lg h-[400px] bg-white rounded-lg p-6 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute top-4 right-4 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="px-4 py-1 bg-red-300 text-white rounded-lg w-max">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="text-lg font-semibold">{book.title}</h2>
        </div>
        <div className="flex items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="text-lg">{book.author}</h2>
        </div>
        <p className="mt-4 text-gray-600">Additional Information:</p>
        <p className="my-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          magna nec est laoreet, sit amet convallis tortor pellentesque. Aliquam
          erat volutpat. Nullam vel dui et eros varius pellentesque. Nulla
          facilisi. Nullam id neque dignissim, lobortis magna vel, tincidunt
          neque.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
