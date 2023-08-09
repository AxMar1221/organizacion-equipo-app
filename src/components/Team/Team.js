import { Cards } from "../Cards/Cards";
import "./Team.css";

export const Team = (teams) => {
  const { primaryColor, secondaryColor, team } = teams.data;
  const { collaborators, deleteCollaborator } = teams;

  return (
    <>
      {collaborators.length > 0 && (
        <section className="teams" style={{ backgroundColor: secondaryColor }}>
          <h3 style={{ borderColor: primaryColor }}>{team}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, i) => (
              <Cards data={collaborator} key={i} color={primaryColor} deleteCollaborator={deleteCollaborator} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
