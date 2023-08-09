import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Myorg } from "./components/MyOrg/Myorg";
import { Team } from "./components/Team/Team";
import { Footer } from "./components/Footer/Footer";


function App() {
  const [showHideForm, setShowHideForm] = useState(false);
  const [collaborators, setCollaborators] = useState([
    {
      name: "Mario Hernández",
      rol: "Desarrollador Sr",
      team: "Front End",
      photo: "https://avatars.githubusercontent.com/u/85906328?v=4"
    },
    {
      name: "Axel Hernández",
      rol: "Trainer",
      team: "Front End",
      photo: "https://avatars.githubusercontent.com/u/140589488?v=4"
    },
    {
      name: "Mario Hernández",
      rol: "Desarrollador Sr",
      team: "Programación",
      photo: "https://avatars.githubusercontent.com/u/85906328?v=4"
    },
    {
      name: "Cynthia Hernández",
      rol: "Diseñadora Sr",
      team: "UX y Diseño",
      photo: "https://avatars.githubusercontent.com/u/129420455?v=4"
    },
    {
      name: "Heidy Murillo",
      rol: "Diseñadora Sr",
      team: "UX y Diseño",
      photo: "https://avatars.githubusercontent.com/u/130028365?v=4"
    },
  ]);

  const changeShowHide = () => {
    setShowHideForm(!showHideForm);
  };

  const putCollaborator = (collaborator) => {
    console.log("new", collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  const deleteCollaborator = () => {
    console.log("eliminar")
  }

  const teams = [
    {
      team: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      team: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      team: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      team: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      team: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      team: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      team: "Innovación y  Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  return (
    <div>
      <Header />
      {showHideForm && (
        <Form
          team={teams.map((team) => {
            return team.team;
          })}
          putCollaborator={putCollaborator}
        />
      )}
      <Myorg changeShowHide={changeShowHide} />

      {teams.map((team) => {
        return (
          <Team
            data={team}
            key={team.team}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.team
            )}
            deleteCollaborator={deleteCollaborator}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
