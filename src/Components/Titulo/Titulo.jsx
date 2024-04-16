import style from './Titulo.module.css'

const Titulo = ({ text }) => {
    return (
        <h1 className={style.titulo}>{text}</h1>
    )
}

export default Titulo