import "./OptionList.css";

export const OptionList = (team) => {
  const teams = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const handleChange = (e) => {
    team.updateData(e.target.value);
  };

  return (
    <div className="options">
      <label>Equipos</label>
      <select value={team.value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {teams.map((team, i) => {
          return (
            <option key={i} value={team}>
              {team}
            </option>
          );
        })}
      </select>
    </div>
  );
};
