import style from './Task.module.css';

const Task = ({ descripcion }) => {
    return (
        <>
            <li className={style.task}>
                <p className={style.descripcion}>{descripcion}</p>
                <div className={style.botones}>
                    <button></button>
                    <button></button>
                </div>
            </li>
        </>
    )
}

export default Task;