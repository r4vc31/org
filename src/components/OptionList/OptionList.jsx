import Button from "../Button/Button";
import "./OptionList.css";

const OptionList = (props) => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "UX y Diseño",
        "Móvil",
        "Innovación y  Gestión"
    ]

    const [valor, actualizarValor] = [props.valor, props.actualizarValor]

    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }

    return(
        <div className="lista-opciones">
            <label htmlFor="">Equipos</label>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                <select name="" id="" value={valor} onChange={manejarCambio}>
                    <option value="" disabled defaultValue="" >- Seleccionar equipo -</option>
                    {
                        props.teamNames.map((equipo, index) => {
                            return <option key={index}>{equipo}</option>
                        })
                    }
                </select>
                <button style={{width:"20%"}} type="button" onClick={props.cambiarEstadoTeamForm}>add Team</button>
            </div>
            
        </div>
    )
}

export default OptionList;