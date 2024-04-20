import Button from '../Button/Button';
import style from './Task.module.css';

const Task = ({ descripcion }) => {
    return (
        <>
            <li className={style.task}>
                <p className={style.descripcion}>{descripcion}</p>
                <div className={style.botones}>
                    <Button text={'-'}></Button>
                    <Button text={'x'}></Button>
                </div>
            </li>
        </>
    )
}

export default Task;