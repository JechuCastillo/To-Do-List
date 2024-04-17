import Input from '../Input/Input';
import style from './Tarea.module.css';

const Tarea = ({ text }) => {
    return (
        <>
            <div className={style.flex}>
                <div className={style.tareaACompletar}>
                    <Input text="Buscar..."></Input>
                </div>

                <div className={style.tareaCompletada}>
                    <Input text="Buscar..."></Input>
                </div>
            </div>
        </>

    )
}

export default Tarea;