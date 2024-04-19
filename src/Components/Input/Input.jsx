import style from './Input.module.css';

const Input = () => {
    return (
        <>
            <input className={style.busqueda} type="text" placeholder='Buscar...' />
        </>
    )
}
export default Input;