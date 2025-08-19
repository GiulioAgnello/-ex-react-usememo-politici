import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";

export default function PostDetail() {
  const { id: cakeId } = useParams();
  const [cake, setCake] = useState([]);
  const changePageBefore = () => {
    const cakeId = cakeId ? cakeId + 1 : cakeId;
  };
  const changePageAfter = () => {
    const cakeId = cakeId ? cakeId - 1 : cakeId;
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/Posts/${cakeId}`).then((res) => {
      setCake(res.data.data);
      console.log(cake);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row text-center d-flex justify-content-center">
          <div className="col-7 ">
            <div className="card my-5">
              <img
                src={`http://localhost:3000${cake.image}`}
                className="card-img-top "
                alt={cake.title}
              />
              <div className="card-body">
                <h5 className="card-title">{cake.title}</h5>
                <hr />
                <p className="card-text fs-6 overflow-auto">{cake.content}</p>
                <hr />
                <small>Tags: {cake.tags}</small>
                <hr />
              </div>
              <div className="p-2 fs-5">
                <NavLink
                  className="p-5"
                  onClick={changePageBefore}
                  to={`http://localhost:5173/Posts/${cake.id - 1}`}
                >
                  {"<"}
                </NavLink>
                <NavLink
                  className="p-5"
                  onClick={changePageAfter}
                  to={`http://localhost:5173/Posts/${cake.id + 1}`}
                >
                  {">"}
                </NavLink>
              </div>
              <NavLink className="btn btn-secondary" to={`/Posts`}>
                Torna alla lista delle Torte
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
