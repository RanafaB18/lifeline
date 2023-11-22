/* eslint-disable react/prop-types */
const FormInput = (props) => {
  const { type, label, handleChange, ...rest } = props;
  return (
    <div className="flex flex-col gap-4">
      <label>{label}</label>
      <input type={type} onChange={handleChange} {...rest} />
    </div>
  );
};

export default FormInput;
