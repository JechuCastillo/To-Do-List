import style from './Button.module.css';

const Button = ({ text}) => {
    return (
        <button className={style.agregar}>{text}</ button>
    )
}

export default Button;