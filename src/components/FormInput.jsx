import { Tooltip } from "react-tooltip";
/* eslint-disable react/prop-types */
const FormInput = (props) => {
  const {
    type,
    name,
    label,
    required,
    handleChange,
    onBlur,
    errors,
    touched,
    ...rest
  } = props;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Tooltip
        noArrow
        className="!text-black !bg-white rounded shadow"
        id="signUpPassword"
      />
      <label
        className={`text-sm ${
          required && "after:content-['*'] after:text-red-600"
        }`}
      >
        {label}
      </label>
      {type === "password" ? (
        <input
          className="py-2 px-3 border rounded-md outline-none focus:outline-[#40a9ff] focus:outline-offset-1 "
          type={type}
          onChange={handleChange}
          {...rest}
          required={required}
          autoComplete="off"
          name={name}
          onBlur={onBlur}
          data-tooltip-html={`${
            type === "password"
              ? `<ul>
        <li>Password must have a minimum of 8 characters</li>
        <li>Password must have at least one uppercase character<li>
        <li>Password must have at least one lowercase character<li>
        <li>Password must have at least one number<li>
        <li>Password must have at least one special character<li>
        </ul>`
              : ``
          }
          `}
          data-tooltip-id="signUpPassword"
          data-tooltip-place="top"
        />
      ) : (
        <input
          className="py-2 px-3 border rounded-md outline-none focus:outline-[#40a9ff] focus:outline-offset-1 "
          type={type}
          onChange={handleChange}
          {...rest}
          required={required}
          autoComplete="off"
          name={name}
          onBlur={onBlur}
        />
      )}
      {errors && touched && <p className="text-red-600 text-sm">{errors}</p>}
    </div>
  );
};

export default FormInput;
