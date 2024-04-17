import style from './Input.module.css';

const Input = ({text}) => {
    return (
        <div >
            <input className={style.busqueda} type="text" placeholder={text} />
        </div>
    )
}
export default Input;