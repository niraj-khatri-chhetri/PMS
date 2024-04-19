// import React from 'react';
// import styled from 'styled-components';

// import { basic } from '../Styles/theme';
// import { useInputContext } from './InputContext';

// const BaseInput = styled.div`
//   margin-bottom: 1rem;
// `;

// const StyledLabel = styled.div`
//   display: block;
//   width: 100%;
//   --tw-text-opacity: 1;
//   color: rgb(55 65 81 / var(--tw-text-opacity));
//   font-size: 0.875rem /* 14px */;
//   line-height: 1.25rem /* 20px */;
//   font-weight: 700;
//   margin-bottom: 0.5rem;
//   text-align: left;
// `;

// const shared = `
//   width: 100%;
//   border-radius: 0.375rem;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
//   padding-left: 0.75rem;
//   padding-right: 0.75rem;
//   font-size: 16px;
//   border: 1.4px solid #d1d5db;
//   transition: all 0.1s ease;
//   color: #333;
//   ::placeholder {
//     color: #666;
//   }
//   outline: none;

//   &:focus {
//     border: 1px solid ${basic.primary.default}; /* focus:border-indigo-500 equivalent */
//     box-shadow: 0 0 0 1px ${basic.primary.default};; /* focus:ring-1 and focus:ring-indigo-500 equivalent */
//   }

//   &.error {
//     border-color: #ef4444; /* border-red-400 equivalent */
//   }

//   &.sm {
//     font-size: 0.875rem; /* sm:text-sm equivalent */
//   }
// `;

// const StyledInput = styled.input`
//   ${shared}
// `;

// const StyledArea = styled.textarea`
//   ${shared}
// `;

// const index = ({
//   id,
//   name,
//   type,
//   label,
//   handleChange,
//   values,
//   placeholder,
//   onChange,
//   errors = {},
//   isRequired = false,
// }) => {
//   if (type === 'email') {
//     return (
//       <div className="mb-4">
//         <label
//           htmlFor={name}
//           className="block text-gray-700 text-sm font-bold mb-2 text-left"
//         >
//           {label}
//           {isRequired && <span className="text-red-500 ml-1">*</span>}
//         </label>
//         <input
//           id={id}
//           type="email"
//           name={name}
//           autoComplete="off"
//           onChange={handleChange}
//           value={values?.[`${name}`]}
//           placeholder={placeholder}
//           className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none
//           `}
//         />

//         {errors[`${name}`] && (
//           <p className="text-red-500 text-sm mt-1 text-left">
//             {errors[`${name}`]}
//           </p>
//         )}
//       </div>
//     );
//   }

//   if (type === 'password') {
//     return (
//       <div className="mb-4">
//         <label
//           htmlFor={name}
//           className="block text-gray-700 text-sm font-bold mb-2 text-left"
//         >
//           {label}
//           {isRequired && <span className="text-red-500 ml-1">*</span>}
//         </label>

//         <input
//           id={id}
//           type="password"
//           name={name}
//           autoComplete="off"
//           placeholder={placeholder}
//           onChange={handleChange}
//           value={values?.[`${name}`]}
//           className={
//             'block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none'
//           }
//         />
//         {errors[`${name}`] && (
//           <p className="text-red-500 text-sm mt-1 text-left">
//             {errors[`${name}`]}
//           </p>
//         )}
//       </div>
//     );
//   }

//   if (type === 'text') {
//     return (
//       <BaseInput>
//         <StyledLabel
//           htmlFor={name}
//           // className="block text-gray-700 text-sm font-bold mb-2 text-left"
//         >
//           {label}
//           {isRequired && <span className="text-red-500 ml-1">*</span>}
//         </StyledLabel>

//         <StyledInput
//           id={id}
//           type="text"
//           name={name}
//           autoComplete="off"
//           placeholder={placeholder}
//           onChange={handleChange}
//           value={values?.[`${name}`]}
//         />

//         {errors[name] && (
//           <p className="text-red-500 text-sm mt-1 text-left">{errors[name]}</p>
//         )}
//       </BaseInput>
//     );
//   }
//   if (type === 'number') {
//     return (
//       <div className="mb-4">
//         <StyledLabel
//           htmlFor={name}
//           // className="block text-gray-700 text-sm font-bold mb-2 text-left"
//         >
//           {label}
//           {isRequired && <span className="text-red-500 ml-1">*</span>}
//         </StyledLabel>

//         <StyledInput
//           id={id}
//           type="number"
//           name={name}
//           autoComplete="off"
//           placeholder={placeholder}
//           onChange={handleChange}
//           value={values?.[`${name}`]}
//           // className={`block w-full rounded-md border ${
//           //   errors?.[`${name}`] ? 'border-red-400' : 'border-gray-300'
//           // } py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//         />
//         {errors[`${name}`] && (
//           <p className="text-red-500 text-sm mt-1 text-left">
//             {errors[`${name}`]}
//           </p>
//         )}
//       </div>
//     );
//   }

//   if (type === 'textarea') {
//     return (
//       <div className="mb-4">
//         <label
//           htmlFor={name}
//           className="block text-gray-700 text-sm font-bold mb-2 text-left"
//         >
//           {label}
//           {isRequired && <span className="text-red-500 ml-1">*</span>}
//         </label>

//         <StyledArea
//           id={id}
//           name={name}
//           value={values[`name`]}
//           rows="5"
//           cols="50"
//           placeholder={placeholder}
//           onChange={handleChange}
//         ></StyledArea>

//         {errors[`${name}`] && (
//           <p className="text-red-500 text-sm mt-1 text-left">
//             {errors[`${name}`]}
//           </p>
//         )}
//       </div>
//     );
//   }

//   if (type === 'file') {
//     return (
//       <div className="flex items-center justify-center w-full mb-4">
//         <label
//           htmlFor={id}
//           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//         >
//           <div className="flex flex-col items-center justify-center pt-5 pb-6">
//             <svg
//               className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 16"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//               />
//             </svg>
//             <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//               <span className="font-semibold">Click to upload</span> or drag and
//               drop
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               SVG, PNG, JPG or GIF (MAX. 800x400px)
//             </p>
//           </div>
//           <input
//             id={id}
//             type={type}
//             name={name}
//             className="hidden"
//             onChange={onChange && onChange}
//           />
//         </label>
//       </div>
//     );
//   }
// };

// export default index;

// ####################################3

import React from 'react';
import styled from 'styled-components';

import { basic } from '../Styles/theme';
import { useInputContext } from './InputContext';

const BaseInput = styled.div`
  margin-bottom: 1rem;
`;

const StyledLabel = styled.div`
  display: block;
  width: 100%;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const shared = `
  width: 100%;
  border-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 16px;
  border: 1.4px solid #d1d5db;
  transition: all 0.1s ease;
  color: #333; 
  ::placeholder {
    color: #666;
  }
  outline: none;

  &:focus {
    border: 1px solid ${basic.primary.default}; /* focus:border-indigo-500 equivalent */
    box-shadow: 0 0 0 1px ${basic.primary.default};; /* focus:ring-1 and focus:ring-indigo-500 equivalent */
  }

  &.error {
    border-color: #ef4444; /* border-red-400 equivalent */
  }

  &.sm {
    font-size: 0.875rem; /* sm:text-sm equivalent */
  }
`;

const StyledInput = styled.input`
  ${shared}
`;

const StyledArea = styled.textarea`
  ${shared}
`;

const Index = ({
  id,
  name,
  type,
  label,
  placeholder,
  onChange,
  isRequired = false,
}) => {
  const { handleChange, values, errors, touched, handleBlur } =
    useInputContext();
  console.log('🚀 ~ touched:', touched);

  if (type === 'email') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
        >
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          id={id}
          type="email"
          name={name}
          autoComplete="off"
          onChange={handleChange}
          value={values?.[`${name}`]}
          placeholder={placeholder}
          className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none
          `}
        />

        {errors[`${name}`] && (
          <p className="text-red-500 text-sm mt-1 text-left">
            {errors[`${name}`]}
          </p>
        )}
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
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>

        <input
          id={id}
          type="password"
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          value={values?.[`${name}`]}
          className={
            'block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-indigo-500 sm:text-sm sm:leading-6 outline-none'
          }
        />
        {errors[`${name}`] && (
          <p className="text-red-500 text-sm mt-1 text-left">
            {errors[`${name}`]}
          </p>
        )}
      </div>
    );
  }

  if (type === 'text') {
    return (
      <BaseInput>
        <StyledLabel htmlFor={name}>
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </StyledLabel>

        <StyledInput
          id={id}
          type="text"
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.[`${name}`]}
        />

        {errors[name] && touched[name] && (
          <p className="text-red-500 text-sm mt-1 text-left">{errors[name]}</p>
        )}
      </BaseInput>
    );
  }
  if (type === 'number') {
    return (
      <div className="mb-4">
        <StyledLabel htmlFor={name}>
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </StyledLabel>

        <StyledInput
          id={id}
          type="number"
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.[`${name}`]}
        />
        {errors[`${name}`] && touched[name] && (
          <p className="text-red-500 text-sm mt-1 text-left">
            {errors[`${name}`]}
          </p>
        )}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="mb-4">
        <label
          htmlFor={name}
          className="block text-gray-700 text-sm font-bold mb-2 text-left"
        >
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>

        <StyledArea
          id={id}
          name={name}
          value={values[`name`]}
          rows="5"
          cols="50"
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        ></StyledArea>

        {errors[`${name}`] && touched[name] && (
          <p className="text-red-500 text-sm mt-1 text-left">
            {errors[`${name}`]}
          </p>
        )}
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

export default Index;
