import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import style from "./Home.module.css";
import Titulo from "../../Components/Titulo/Titulo"
import Tarea from "../../Components/Tarea/Tarea";
const Home = () => {
    return (
        <>
                <Titulo text="To-Do-List"></Titulo>
                <Tarea></Tarea>
        </>
    )
}

export default Home;