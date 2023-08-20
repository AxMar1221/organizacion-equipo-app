import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Myorg } from "./components/MyOrg/Myorg";
import { Team } from "./components/Team/Team";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [showHideForm, setShowHideForm] = useState(false);
  const [collaborators, setCollaborators] = useState([
    {
      id: uuid(),
      name: "Mario Hernández",
      rol: "Desarrollador Sr",
      team: "Programación",
      photo: "https://avatars.githubusercontent.com/u/85906328?v=4",
      fav: true,
    },
    {
      id: uuid(),
      rol: "Trainer",
      name: "Axel Hernández",
      team: "Front End",
      photo: "https://avatars.githubusercontent.com/u/140589488?v=4",
      fav: false,
    },
    {
      id: uuid(),
      name: "Mario Hernández",
      rol: "Desarrollador Sr",
      team: "Front End",
      photo: "https://avatars.githubusercontent.com/u/85906328?v=4",
      fav: false,
    },
    {
      id: uuid(),
      name: "Cynthia Hernández",
      rol: "Diseñadora Sr",
      team: "UX y Diseño",
      photo: "https://avatars.githubusercontent.com/u/129420455?v=4",
      fav: false,
    },
    {
      id: uuid(),
      name: "Heidy Murillo",
      rol: "Diseñadora Sr",
      team: "UX y Diseño",
      photo: "https://avatars.githubusercontent.com/u/130028365?v=4",
      fav: false,
    },
  ]);

  const [teams, setTeams] = useState([
    {
      id: uuid(),
      team: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      id: uuid(),
      team: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      id: uuid(),
      team: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      id: uuid(),
      team: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      id: uuid(),
      team: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      id: uuid(),
      team: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      id: uuid(),
      team: "Innovación y  Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]);

  const changeShowHide = () => {
    setShowHideForm(!showHideForm);
  };

  const putCollaborator = (collaborator) => {
    console.log("new", collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  const deleteCollaborator = (id) => {
    console.log("eliminar", id);
    const newCollaborators = collaborators.filter(
      (collaborator) => collaborator.id !== id
    );
    setCollaborators(newCollaborators);
    console.log(newCollaborators);
  };

  const updateTeamColor = (color, id) => {
    console.log("Update", color, id);
    const updateTeamsData = teams.map((teams) => {
      if (teams.id === id) {
        teams.primaryColor = color;
      }
      return teams;
    });
    setTeams(updateTeamsData);
  };

  const createTeam = (newTeam) => {
    setTeams([...teams, { ...newTeam, id: uuid() }]);
  };

  const like = (id) => {
    const updateCollaboratorFav = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });
    setCollaborators(updateCollaboratorFav);
  };

  return (
    <div>
      <Header />
      {showHideForm && (
        <Form
          team={teams.map((team) => {
            return team.team;
          })}
          putCollaborator={putCollaborator}
          createTeam={createTeam}
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
            updateTeamColor={updateTeamColor}
            like={like}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
