import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {

    const [valor, actualizarValor] = [props.valor, props.actualizarValor]
    const {type} = props;

    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.title}</label>
            <input 
                required={props.required} 
                placeholder={`Ingresar${props.description?" "+props.description:""} ${props.title.toLowerCase()}...`}
                value={valor}
                onChange={manejarCambio}
                type={type||"text"}
            />
        </div>
    )
}

export default TextField;