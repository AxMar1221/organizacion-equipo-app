import "./Inputs.css"

export const Inputs = (dataInputs) => {
  console.log("datos", dataInputs.title)
  return (
    <div className="inputs">
      <label>{dataInputs.title}</label>
      <input placeholder={dataInputs.placeholder}/>
    </div>
  )
}
