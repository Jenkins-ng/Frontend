import React, { useRef, useState, useEffect } from "react";
import Head from "../Landing page/Header/Head";

export const SearchApi = () => {
  const [data, setdata] = useState([]);
  let api_key = "AIzaSyCv5xnjDSLOc5u_xlpvwipdwRrwxzROTsU";
  let queryLink = "https://www.googleapis.com/youtube/v3/search?";
  useEffect(() => {
    const Api = fetch(
      queryLink +
        new URLSearchParams({
          key: api_key,
          type: "videos",
          part: "snippet",
          maxResults: 1000,
          q: "html",
        })
    )
      .then((response) => response.json)
      .then((res) => setdata(res));

    // return () => {
    //   setdata([]);
    // };
  }, []);

  return (
    <>
      <div>
        {data.items?.map((data) => {
          `<iframe
        width="350"
        height="300"
        src="http://www.youtube.com/embed/${data.id.videoId}"
          frameborder="0"
          allowfullscreen
        ></iframe>`;
        })}
      </div>
    </>
  );
};

const Tutorial = () => {
  return (
    <div>
      <Head />
      <section className="relative top-28">
        <SearchApi />
      </section>
    </div>
  );
};

export default Tutorial;
