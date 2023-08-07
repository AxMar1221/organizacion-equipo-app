import { Cards } from "../Cards/Cards";
import "./Team.css";

export const Team = (teams) => {
  const { primaryColor, secondaryColor, team } = teams.data;

  const secondary = { backgroundColor: secondaryColor}
  return (
    <section className="teams" style={ secondary}>
      <h3 style={{ borderColor: primaryColor }}>{team}</h3>
      <div className="collaborators">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section>
  );
};
