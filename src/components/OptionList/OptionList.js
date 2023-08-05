import "./OptionList.css";

export const OptionList = () => {
  const teams = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];
  return (
    <div className="options">
      <label>Equipos</label>
      <select>
        {
            teams.map( (team, i) => {
                return <option key={i}>{team}</option>
            })
        }
      </select>
    </div>
  );
};
