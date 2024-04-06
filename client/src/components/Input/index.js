import React from 'react';

const index = ({
  id,
  name,
  type,
  label,
  handleChange,
  values,
  placeholder,
}) => {
  if (type === 'email') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2"
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
          className="block text-gray-700 text-sm font-bold mb-2"
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
};

export default index;
