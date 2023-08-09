import { CancelRounded } from "@mui/icons-material"
import "./Cards.css"

export const Cards = ( collaborator ) => {
  const {name, rol, photo } = collaborator.data
  const { color  } = collaborator

  return (
    <div className="collaborator">
      <CancelRounded className="icon"/>
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
