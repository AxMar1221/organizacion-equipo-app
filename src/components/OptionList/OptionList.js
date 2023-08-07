import "./OptionList.css";

export const OptionList = (teams) => {
  const handleChange = (e) => {
    teams.updateData(e.target.value);
  };

  return (
    <div className="options">
      <label>Equipos</label>
      <select value={teams.value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {teams.team.map((team, i) => (
          <option key={i} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};
