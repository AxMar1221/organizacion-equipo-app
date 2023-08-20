import { Cards } from "../Cards/Cards";
import hexToRgba from "hex-to-rgba";
import "./Team.css";

export const Team = (teams) => {
  const { primaryColor, team, id } = teams.data;
  const { collaborators, deleteCollaborator, updateTeamColor, like } = teams;

  return (
    <>
      {collaborators.length > 0 && (
        <section className="teams" style={{ backgroundColor: hexToRgba(primaryColor, 0.7) }}>
          <input 
            type="color"
            className="input__color"
            value={primaryColor}
            onChange={(e)=> {updateTeamColor(e.target.value, id)}}
          />
          <h3 style={{ borderColor: primaryColor }}>{team}</h3>
          <div className="collaborators">
            {collaborators.map((collaborator, i) => (
              <Cards
                data={collaborator}
                key={i}
                color={primaryColor}
                deleteCollaborator={deleteCollaborator}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
