import { useState } from "react";
import {v4 as uuidv4} from "uuid"; 
import "./Form.css";
import TextField from "../TextField/TextField";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";

const Form = (props) => {

    const {teamNames, registrarColaborador, crearEquipo, mostrarForm} = props;

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [nombreEquipo, actualizarNombreEquipo] = useState("");
    const [colorEquipo, actualizarColorEquipo] = useState("");


    const [addTeam, updateForAddTeam] = useState(false);

    const cambiarEstadoTeamForm = () => updateForAddTeam(!addTeam);


    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("🤟");
        const datosPorEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            id: uuidv4()
        }
        registrarColaborador(datosPorEnviar);
    }

    const manejarEnvioEquipo = (e) => {
        e.preventDefault();
        const datosPorEnviar = {
            nombreEquipo,
            colorEquipo,
            id: uuidv4()
        }
        crearEquipo(datosPorEnviar);
    }

    return (
        <section className="formulario" id="formulario">
            <div>
                <form onSubmit={manejarEnvio}>
                    <h2>Completa el formulario para crear el colaborador.</h2>
                    <TextField 
                        title="Nombre" 
                        description=""
                        required
                        valor={nombre}
                        actualizarValor={actualizarNombre}
                    />
                    <TextField 
                        title="Puesto" 
                        description="" 
                        required
                        valor={puesto}
                        actualizarValor={actualizarPuesto}
                    />
                    <TextField 
                        title="Foto" 
                        description="enlace" 
                        required
                        valor={foto}
                        actualizarValor={actualizarFoto}
                    />
                    <OptionList 
                        valor={equipo}
                        actualizarValor={actualizarEquipo}
                        teamNames={teamNames}
                        cambiarEstadoTeamForm={cambiarEstadoTeamForm}
                    />
                    <Button description="Crear Colaborador"></Button>
            </form>
            {
                mostrarForm && addTeam && <form onSubmit={manejarEnvioEquipo} className="form-team">
                    <h2>Completa el formulario para agregar un equipo.</h2>
                    <TextField 
                        title="Nombre" 
                        description=""
                        required
                        valor={nombreEquipo}
                        actualizarValor={actualizarNombreEquipo}
                    />
                    <TextField 
                        title="Color" 
                        description="" 
                        required
                        valor={colorEquipo}
                        actualizarValor={actualizarColorEquipo}
                        type="color"
                    />
                    <Button description="Crear Equipo"></Button>
                </form>
            }
            </div>
            
        </section>
    )
} 

export default Form;