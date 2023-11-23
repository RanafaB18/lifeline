/* eslint-disable react/prop-types */
const FormSelect = (props) => {
  const { name, id, label, handleChange, required, options, ...rest } = props
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className={`text-sm ${required && "after:content-['*'] after:text-red-600"}`}
      >
        {label}
      </label>
      <select {...rest} onChange={handleChange} className="py-2 px-3 border rounded-md outline-none" name={name} id="lang">
        {
          options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))
        }
      </select>
    </div>
  );
};

export default FormSelect;
