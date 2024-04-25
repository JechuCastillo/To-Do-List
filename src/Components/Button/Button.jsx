import style from './Button.module.css';
let boton;

const Button = ({ text }) => {
    const handleClick=()=>{
        console.log('pulsaste');
    }
    return (
        <button className={(text == '-'|| text == 'x') ? style.botonTask : style.agregar} onClick={handleClick}>
            {text}
        </ button>
    )
}

export default Button;