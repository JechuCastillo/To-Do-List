import { useState } from "react";
import Button from "../../Components/Button/Button";
import style from "./Home.module.css";
import Titulo from "../../Components/Titulo/Titulo"
const Home = () => {
    return (
        <>
        <h1>TITULO</h1>
            <Button text="Agregar" />
            <Button text="Quitar" />
        </>

    )
}

export default Home;