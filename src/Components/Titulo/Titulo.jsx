import style from './Titulo.module.css'

const Titulo = (props) => {
    return (
        <header>
            <h1 className={style.titulo}>{props.text}</h1>
        </header>
    )
}

export default Titulo;