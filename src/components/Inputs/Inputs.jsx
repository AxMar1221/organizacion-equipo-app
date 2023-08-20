import "./Inputs.css";

export const Inputs = (dataInputs) => {
  const handleChange = (e) => {
    dataInputs.updateData(e.target.value);
  };

  const { type = "text" } = dataInputs

  return (
    <div className={`input input-${type}`}>
      <label>{dataInputs.title}</label>
      <input
        placeholder={dataInputs.placeholder}
        required={dataInputs.required}
        value={dataInputs.value}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};
