import "./Button.css"
const Button = (props) => {
    return (
        <button type="submit" className="boton">{props.description}</button>
    )
}

export default Button;