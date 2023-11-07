import React, { useEffect, useState } from "react";
import './style.css'

export default function Mateushora() {
  const [hora, setHora] = useState(new Date());

  const [fusoHorario, setFusoHorario] = useState("UTC");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const handleFusoHorarioChange = (e) => {
    setFusoHorario(e.target.value);
  };

  const horaFormat = hora.toLocaleTimeString("en-US", {
    timeZone: fusoHorario,
    hour12: false,
  });

  return (
    <>

   
      <span>Relógio Mundial</span>

      

      <div className="horaatual" >
        <span>Hora atual: {horaFormat}</span>

        <div className=" hcontainerhora">
        <label>Escolha o fuso horáro: </label>
        <select onChange={handleFusoHorarioChange} value={fusoHorario}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New York</option>
          <option value="Europe/London">Europa/Londres</option>
          <option value="Asia/Tokyo">Asia/Tokyo</option>
          <option value="America/Sao_Paulo">America/SP(Brasil)</option>
        </select>
      </div>

   

      </div>
    </>
  );
}
