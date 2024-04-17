import style from './Titulo.module.css'

const Titulo = ({ text }) => {
    return (
        <header>
            <h1 className={style.titulo}>{text}</h1>
        </header>
    )
}

export default Titulo;