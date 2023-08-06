import { useState } from "react";
import { Button } from "../Button/Button";
import { Inputs } from "../Inputs/Inputs";
import { OptionList } from "../OptionList/OptionList";
import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [rol, setRol] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    let sendData = {
      name,
      rol,
      photo,
      team,
    };
    console.log(sendData);
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
          <OptionList value={team} updateData={setTeam} />
          <Button>Crear</Button>
        </form>
      </section>
    </>
  );
};
