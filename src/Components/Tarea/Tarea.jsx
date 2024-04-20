import Input from '../Input/Input';
import Task from '../Task/Task';
import style from './Tarea.module.css';

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
                <Input></Input>
                <ul className={style.lista}>
                    <Task descripcion='Texto'></Task>
                    <Task descripcion='Estudiar'></Task>
                </ul>
            </div>

        </>

    )
}

export default Tarea;