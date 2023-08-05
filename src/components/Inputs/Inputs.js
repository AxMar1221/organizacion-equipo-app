import "./Inputs.css"

export const Inputs = (dataInputs) => {

  return (
    <div className="inputs">
      <label>{dataInputs.title}</label>
      <input placeholder={dataInputs.placeholder}/>
    </div>
  )
}
