import React from 'react';

const index = ({
  id,
  name,
  type,
  label,
  handleChange,
  values,
  placeholder,
  onChange,
}) => {
  if (type === 'email') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
        >
          {label}
        </label>

        <input
          id={id}
          type="email"
          name={name}
          autoComplete="off"
          onChange={handleChange}
          value={values?.[`${name}`]}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none
"
        />
      </div>
    );
  }

  if (type === 'password') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
        >
          {label}
        </label>

        <input
          id={id}
          type="password"
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          value={values?.[`${name}`]}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
        />
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
        >
          {label}
        </label>

        <input
          id={id}
          type="text"
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          value={values?.[`${name}`]}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
        />
      </div>
    );
  }
  if (type === 'number') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
        >
          {label}
        </label>

        <input
          id={id}
          type="number"
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          value={values?.[`${name}`]}
          className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    );
  }

  if (type === 'desc') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
        >
          {label}
        </label>
        <textarea
          type="desc"
          id={id}
          name={name}
          rows="5"
          cols="50"
          placeholder={placeholder}
          className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
    );
  }

  if (type === 'file') {
    return (
      <div className="flex items-center justify-center w-full mb-4">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id={id}
            type={type}
            name={name}
            className="hidden"
            onChange={onChange && onChange}
          />
        </label>
      </div>
    );
  }
};

export default index;
