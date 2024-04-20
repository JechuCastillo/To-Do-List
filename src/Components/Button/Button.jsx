import style from './Button.module.css';
let boton;
const Button = ({ text }) => {
    if (text == '-' || text == 'x') {
        boton = style.botonTask;
    } else {
        boton = style.agregar;
    }
    return (
        <button className={`${boton}`}>
            {text}
        </ button>
    )
}

export default Button;