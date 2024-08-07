import { BiSearch } from "react-icons/bi";

function Input() {
  return (
    <div>
      <div className="absolute ps-3 py-4 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </div>
      <div className="relative w-full">
        <div className="absolute top-4 start-0 ml-4 text-gray-500">
          <BiSearch />
        </div>
        <input
          className="bg-gray-50 pl-10 py-3 rounded-lg w-full border"
          type="text"
          name=""
          id=""
          placeholder="Search Course Title"
        />
        <div className="absolute top-0 end-0">
          <button
            type="sumbit"
            className="bg-emerald-500 py-3 px-10 rounded-lg text-white hover:bg-emerald-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
