import { useEffect, useState } from "react";
import "./DataDisplay.scss";
import useFetch from "../../useFetch";
import SkeletonLoading from "../skeletonLoading/SkeletonLoading";

function DataDisplay({ name, status }) {
  const { data, loading, error, request } = useFetch();
  const [page, setPage] = useState(1);

  const handlePageNext = () => {
    setPage(page + 1);
  };
  const handlePagePrev = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    request(
      `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&page=${page}`
    );
  }, [request, name, status, page]);

  if (error) return <p>Erro ao carregar a página</p>;
  if (loading) return <SkeletonLoading />;
  if (data)
    return (
      <>
        <div className="cards">
          {data.results.map((person) => (
            <div key={person.id} className="card">
              <div className="information">
                <h1 key={person.id}>{person.name}</h1>
                <p
                  style={{
                    backgroundColor:
                      person.status === "Alive"
                        ? "#22ff00"
                        : person.status === "unknown"
                        ? "white"
                        : "red",
                  }}
                  className="status"
                >
                  {person.status}
                </p>
              </div>
              <p className="species">{person.species}</p>
              <img className="img-backgroung" src={person.image} alt="" />
            </div>
          ))}
        </div>
        <div className="buttons">
          <button
            className="button prev-button"
            onClick={handlePagePrev}
            disabled={page == 1}
          >
            Voltar
          </button>
          <button
            className="button next-button"
            onClick={handlePageNext}
            disabled={page == data.info.pages}
          >
            Avançar
          </button>
        </div>
      </>
    );
  else return null;
}

export default DataDisplay;