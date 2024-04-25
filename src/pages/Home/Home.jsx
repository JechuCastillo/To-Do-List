import { useState } from "react";
import Button from "../../Components/Button/Button";
import style from "./Home.module.css";
import Titulo from "../../Components/Titulo/Titulo"
import Tarea from "../../Components/Tarea/Tarea";
import Contador from "../../Components/Contador/Contador";
import Task from "../../Components/Task/Task";
const Home = () => {
    const [tarea, setTarea] = useState("");
    const [incomplentas, setIncompletas] = useState([]);
    const [completadas, setCompletas] = useState([]);
    const [contadorCompletas, setContadorCompletas] = useState(0);
    const [contadorIncompletas, setContadorIncompletas] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const completarTarea = () => {
    }
    const borrarTarea = () => {
    }
    
    return (
        <>
            <Titulo text="To-Do-List"></Titulo>
            <div className={`${style.flex}`}>
                <article>
                    <div className={`${style.contador}`}>
                        <Contador text='Tareas por completar:'></Contador>
                        <Button text={'+'} handleClick={agregarTarea}></Button>
                    </div>
                    <Tarea color='rojo'>
                    </Tarea>
                </article>
                <article>
                    <Contador text='Tareas completadas:'></Contador>
                    <Tarea />
                </article>
            </div>
            <footer className={style.footer}><p>Castillo Jesus 2024</p></footer>

        </>
    )
}
const agregarTarea = () => {
    return (
        <>
            <input type="text" placeholder="Agregar tarea..."/>
        </>
    )       
}
export default Home;