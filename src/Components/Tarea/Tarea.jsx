import Input from '../Input/Input';
import style from './Tarea.module.css';

const Tarea = ({color}) => {
    let name;
if(color=='rojo'){
    name=style.colorRojo;

}else{

    name=style.colorVerde
}
    return (
        <>
            <div className={`${style.tamanio} ${name}`}>
                <Input></Input>
            </div>
        </>

    )
}

export default Tarea;