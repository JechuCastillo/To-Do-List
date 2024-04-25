import Button from '../Button/Button';
import style from './Task.module.css';

const Task = ({ id,descripcion, funcionCompletar, funcionBorrar }) => {
    return (

        <>
            <li className={style.task} id={id} estado={false}>
                <p className={style.descripcion}>{descripcion}</p>
                <div className={style.botones}>
                    <Button text={'-'} handleClick={funcionCompletar}></Button>
                    <Button text={'x'} handleClick={funcionBorrar}></Button>
                </div>
            </li>
        </>
    )
}

export default Task;