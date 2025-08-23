import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";

let baseurlApi = "http://localhost:3333/politicians";

const PoliticianCard = ({
  id,
  image,
  title,
  name,
  dob,
  years_in_office,
  country,
}) => {
  console.log("cards");

  return (
    <div key={id} className="col-4  ">
      <div className="card ">
        <img src={image} className="card-img-top " alt={title} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr />
          <small>date of birth: {dob}</small>
          <hr />
          <small>years_in_office: {years_in_office}</small>
          <p>Country: {country}</p>

          <hr />
        </div>
      </div>
    </div>
  );
};

const memorizedPost = React.memo(PoliticianCard);

export default function Posts() {
  // presa dei dati
  const [posts, setPost] = useState([]);

  const [text, setText] = useState("");

  function fetchpost() {
    axios.get(`${baseurlApi}`).then((res) => {
      console.log(res.data);

      setPost(res.data);
    });
  }
  useEffect(fetchpost, []);

  function handlOnChange(e) {
    const value = e.target.value;
    setText(value);
  }

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const isInName = post.name.toLowerCase().includes(text.toLowerCase());
      return isInName;
    });
  }, [posts, text]);
  return (
    <>
      <div className="container-sm  mt-5">
        <div className=" text-center p-4 ">
          <label className="p-3" htmlFor="search ">
            Cerca
          </label>
          <input type="text" value={text} onChange={handlOnChange} />
        </div>
        <div className="row g-2">
          {filtered.map((post) => (
            <PoliticianCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
