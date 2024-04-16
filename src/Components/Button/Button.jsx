import style from './Button.module.css';

const Button = ({ text }) => {
    return (<button className={style.Button}>{text}</button>)
}

export default Button;