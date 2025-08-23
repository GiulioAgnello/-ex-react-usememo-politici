import axios from "axios";
import { useState, useEffect } from "react";

let baseurlApi = "http://localhost:3333/politicians";

export default function Posts() {
  // presa dei dati
  const [posts, setPost] = useState([]);
  const [allPosts, setAllPosts] = useState([]); // aggiungi stato per tutti i post
  const [text, setText] = useState("");

  function fetchpost() {
    axios.get(`${baseurlApi}`).then((res) => {
      console.log(res.data);

      setPost(res.data);
      setAllPosts(res.data); // salva tutti i post
    });
  }
  useEffect(fetchpost, []);

  function handlOnChange(e) {
    const value = e.target.value;
    setText(value);

    const filtered = allPosts.filter((post) =>
      post.name.toLowerCase().includes(value.toLowerCase())
    );
    setPost(filtered);
  }
  return (
    <>
      <div className="container-sm  mt-5">
        <label htmlFor="search">Cerca</label>
        <input type="text" value={text} onChange={handlOnChange} />
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
