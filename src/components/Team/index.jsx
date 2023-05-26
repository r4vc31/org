import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {

    const {id, teamName, color, colaboradores, eliminarColaborador, actualizarColor, likeColaborador} = props;

    return (
        <section className="equipo" style={{backgroundColor: color+"33"}}>
            <input
                className="input-color"
                type="color"
                value={color}
                onChange={(event) => {
                    const newColor = event.target.value;
                    actualizarColor(newColor, id)
                }}
                title="Cambiar color de Equipo"
            />
            <h3 style={{borderBottomColor: color}}>{teamName}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Collaborator 
                        primaryColor={color} 
                        deleteCollaborator={eliminarColaborador} 
                        key={index} 
                        datos={colaborador} 
                        likeColaborador={likeColaborador}
                    />)
                }
            </div>
        </section>
    )
}

export default Team;