import "./Inputs.css";

export const Inputs = (dataInputs) => {
  const handleChange = (e) => {
    dataInputs.updateData(e.target.value);
  };

  return (
    <div className="inputs">
      <label>{dataInputs.title}</label>
      <input
        placeholder={dataInputs.placeholder}
        required={dataInputs.required}
        value={dataInputs.value}
        onChange={handleChange}
      />
    </div>
  );
};
