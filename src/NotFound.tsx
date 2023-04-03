import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-2 ">
      <div>
        <img src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=" />
      </div>
      <div>
        <h1 className="py-4 text-2xl font-bold">PAGE NOT FOUND</h1>
      </div>
      <div className="pb-4">
        <Link
          className="px-4 py-2 text-2xl text-white bg-gray-500 rounded-full hover:bg-gray-800"
          to="/"
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
}

export default NotFound;