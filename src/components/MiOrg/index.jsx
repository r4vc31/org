import { useState } from "react";
import "./styles.css";

const MiOrg = (props) => {

    /*  const [mostrar, actualizarMostrar] = useState(false);

    const manejarClick = (e) => {
        console.log("Mostrar/Ocultar elemento");
        console.log(mostrar);
        actualizarMostrar(!mostrar);
    } */ 

    return (
        <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <a href="#formulario" title="Mostrar/Ocultar formulario">
                <img onClick={props.cambiarEstadoForm} src="/img/add.png" alt="add icon" />
            </a>
        </section>
    )
}

export default MiOrg;