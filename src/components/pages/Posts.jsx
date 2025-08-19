import axios from "axios";
import { useState, useEffect } from "react";

let baseurlApi = "http://localhost:3333/politicians";

export default function Posts() {
  // presa dei dati
  const [posts, setPost] = useState([]);

  function fetchpost() {
    axios.get(`${baseurlApi}`).then((res) => {
      console.log(res.data);

      setPost(res.data);
    });
  }
  useEffect(fetchpost, []);
  return (
    <>
      <div className="container-sm  mt-5">
        <div className="row g-2">
          {posts.map((post) => (
            <div key={post.id} className="col-4  ">
              <div className="card ">
                <img
                  src={post.image}
                  className="card-img-top "
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                  <hr />
                  <small>date of birth: {post.dob}</small>
                  <hr />
                  <small>years_in_office: {post.years_in_office}</small>
                  <p>Country: {post.country}</p>

                  <hr />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
