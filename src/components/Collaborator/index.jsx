import { useState } from "react";
import "./Collaborator.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Collaborator = (props) => {
    const {
        nombre,
        puesto,
        foto,
        id,
        fav
    } = props.datos;


    const changeFav = () => {
        likeColaborador(id);
    }

    const {primaryColor, deleteCollaborator, likeColaborador} = props;
    return (
        <div className="colaborador">
            <AiFillCloseCircle onClick={()=>deleteCollaborator(id)} className="eliminar icon" title="Eliminar Colaborador"/>
            <div className="encabezado" style={{backgroundColor: primaryColor}}>
                <img src={foto} alt="user profile" />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <AiFillHeart onClick={changeFav} className="icon" color="red" /> : <AiOutlineHeart onClick={changeFav} className="icon" />}
            </div>
        </div>
    )
}

export default Collaborator;