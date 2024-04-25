import Input from '../Input/Input';
import Task from '../Task/Task';
import style from './Tarea.module.css';
const tareas = [];

const Tarea = ({ color }) => {
    let name;
    if (color == 'rojo') {
        name = style.colorRojo;

    } else {

        name = style.colorVerde
    }
    return (
        <>
            <div className={`${style.tamanio} ${name}`}>
                <Input placeholder="Buscar..."></Input>
                <ul className={style.lista}>
                </ul>
            </div>

        </>

    )
}

export default Tarea;