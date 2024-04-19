import style from './Contador.module.css';
import { useState } from 'react';
let contador=0;
const Contador = ({ text }) => {
    return (
    <h2 className={`${style.contador}`}>{text + ' '+contador}</h2>
    )
}
export default Contador;