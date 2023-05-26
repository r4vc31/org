import { useState } from 'react';
import {v4 as uuidv4} from "uuid"; 
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  
  const [mostrarForm, actualizarMostrar] = useState(false);
  let collaboratorsBasicConfig = [{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }];
  collaboratorsBasicConfig = collaboratorsBasicConfig.map( collaborator => {
    collaborator.id = uuidv4();
    collaborator.fav = Math.random() > .5
    return collaborator;
  })

  const [colaboradores, actualizarColaboradores] = useState([...collaboratorsBasicConfig])

  let teamsBasicConfig = [
    ["Programación", "#57C278" ],
    ["Front End", "#82CFFA"],
    ["Data Science", "#A6D157"],
    ["Devops", "#E06B69"],
    ["UX y Diseño", "#DB6EBF"],
    ["Móvil", "#FFBA05"],
    ["Innovación y Gestión", "#FF8A29"]
  ]

  teamsBasicConfig = teamsBasicConfig.map(equipo => {
    return {
        teamName: equipo[0], 
        color: equipo[1],
        id: uuidv4()
    }
  })

  const [equipos, actualizarEquipos] = useState([...teamsBasicConfig]);
  
  const cambiarEstadoForm = () => {
    actualizarMostrar(!mostrarForm)
  }

  const registrarColaborador = (colaborador) => actualizarColaboradores([...colaboradores, colaborador]); 

  const eliminarColaborador = (id) => {
    const collaboratorsUpdated = colaboradores.filter(colaborador => colaborador.id !== id );
    actualizarColaboradores(collaboratorsUpdated);
  };

  const actualizarColor = (color, id) => {

    const teamsUpdated = equipos.map((equipo) => {
        if (equipo.id === id) {
          equipo.color = color;
        }
        return equipo;
    })

    actualizarEquipos(teamsUpdated)
  };

  const crearEquipo = (equipo) => {
    console.log(equipo);
    const teamsUpdated = [...equipos, {teamName: equipo.nombreEquipo, color:equipo.colorEquipo, id: equipo.id}]
    actualizarEquipos(teamsUpdated);
  }

  const like = (id) => {
    const collaboratorsUpdated = colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador
    });
    actualizarColaboradores(collaboratorsUpdated);
  }

  return (
    <div>
      <Header />
      {
        /* mostrarForm ? <Form /> :<></> */
        mostrarForm && <Form 
          teamNames={equipos.map(equipo => equipo.teamName)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          mostrarForm={mostrarForm}
        />
      }
      <MiOrg cambiarEstadoForm={cambiarEstadoForm}/>
      {
        equipos.map((equipo) => {
          const colaboradoresForThisTeam = colaboradores.filter((colaborador)=>colaborador.equipo===equipo.teamName);
          return (
            colaboradoresForThisTeam.length > 0 && <Team key={equipo.id} teamName={equipo.teamName} 
              color={equipo.color}
              id={equipo.id}
              colaboradores={colaboradoresForThisTeam}
              eliminarColaborador={eliminarColaborador}
              actualizarColor={actualizarColor}
              likeColaborador={like}
          />
          )
        }
        )
      }

      <Footer />

    </div>
  );
}

export default App;
