import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Myorg } from "./components/MyOrg/Myorg";
import { Team } from "./components/Team/Team";
import { Footer } from "./Footer/Footer";

function App() {
  const [showHideForm, setShowHideForm] = useState(false);
  const [collaborators, setCollaborators] = useState([]);

  const changeShowHide = () => {
    setShowHideForm(!showHideForm);
  };

  const putCollaborator = (collaborator) => {
    console.log("new", collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

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
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
