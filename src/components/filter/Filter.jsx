import { useState } from "react";
import DataDisplay from "../DataDisplay/DataDisplay";
import "./Filter.scss";
import "../DataDisplay/DataDisplay.scss"

function Filter() {

  const [status, setStatus] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSearch = (selectedStatus) => {
    setStatus(selectedStatus);
  };

  
  return (
    <>
        <div className="filtros">
          <div className="busca">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Nome do personagem"
            />
          </div>
          <div className="buttons">
            <button className="button unknown" value={"unknown"} disabled={false}  onClick={() => handleSearch("unknown")}>
              unknown
            </button>
            <button className="button dead" value={"Dead"}  disabled={false} onClick={() => handleSearch("Dead")}>
              Dead
            </button>
            <button className="button alive" value={"Alive"}  disabled={false}  onClick={() => handleSearch("Alive")}>
              Alive
            </button>
            <button className="button"  disabled={false}  onClick={() => handleSearch("")}>
              Clear Filter
            </button>
          </div>
        <DataDisplay name={name} status={status}/>
        </div>
    </>
  )
}

export default Filter
