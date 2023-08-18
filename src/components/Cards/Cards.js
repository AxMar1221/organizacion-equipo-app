import { CancelRounded } from "@mui/icons-material"
import "./Cards.css"

export const Cards = ( collaborator ) => {
  const {name, rol, photo, id } = collaborator.data
  const { color, deleteCollaborator } = collaborator

  return (
    <div className="collaborator">
        <CancelRounded className="icon" onClick={() => deleteCollaborator(id)}/>
        <div className="card__header" style={{backgroundColor: color}}>
            <img src={photo} alt={name} />
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{rol}</h5>
        </div>
    </div>
  )
}
