import { useEffect, useState } from "react";
import DataDisplay from "../DataDisplay/DataDisplay";
import "./Filter.scss";
import "../DataDisplay/DataDisplay.scss"

function Filter() {

  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSearch = (selectedStatus) => {
    setStatus(selectedStatus);
  };

  
  return (
    <>
        <div className="filtros">
          <h1 className="titulo">Filtros</h1>
          <div className="busca">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Nome do personagem"
            />
          </div>
          <div className="buttons">
            <button className="button" value={"unknown"} disabled={false}  onClick={() => handleSearch("unknown")}>
              unknown
            </button>
            <button className="button" value={"Dead"}  disabled={false} onClick={() => handleSearch("Dead")}>
              Dead
            </button>
            <button className="button" value={"Alive"}  disabled={false}  onClick={() => handleSearch("Alive")}>
              Alive
            </button>
          </div>
        <DataDisplay name={name} status={status} page={page}/>
        </div>
    </>
  )
}

export default Filter
