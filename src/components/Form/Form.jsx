import { useState } from "react";
import { Button } from "../Button/Button";
import { Inputs } from "../Inputs/Inputs";
import { OptionList } from "../OptionList/OptionList";
import "./Form.css";

export const Form = (teams) => {
  const [name, setName] = useState("");
  const [rol, setRol] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState([]);
  const [title, setTitle] = useState([]);
  const [color, setColor] = useState([]);

  const { putCollaborator, createTeam } = teams;

  const handleSend = (e) => {
    e.preventDefault();
    let sendData = {
      name,
      rol,
      photo,
      team,
    };
    console.log(sendData);
    putCollaborator(sendData);
  };

  const handleNewTeam = (e) => {
    e.preventDefault();
    let createNewTeam = {
      team: title,
      primaryColor: color,
    };
    createTeam(createNewTeam);
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleSend}>
          <h2>Rellene el formulario para crear el registro</h2>
          <Inputs
            title="Nombre"
            placeholder="Ingrese el nombre"
            value={name}
            updateData={setName}
          />
          <Inputs
            title="Puesto"
            placeholder="Ingrese el puesto"
            value={rol}
            updateData={setRol}
          />
          <Inputs
            title="URL Foto"
            placeholder="Pega el URL de la foto"
            value={photo}
            updateData={setPhoto}
          />
          <OptionList value={team} updateData={setTeam} team={teams.team} />
          <Button>Crear</Button>
        </form>
        <form onSubmit={handleNewTeam}>
          <h2>Rellene el formulario para crear equipo</h2>
          <Inputs
            title="Equipo"
            placeholder="Ingrese el eqipo"
            value={title}
            updateData={setTitle}
          />
          <Inputs
            title="Color"
            placeholder="Ingrese el color en hexadecimal"
            value={color}
            updateData={setColor}
            type="color"
          />
          <Button>Crear Equipo</Button>
        </form>
      </section>
    </>
  );
};
