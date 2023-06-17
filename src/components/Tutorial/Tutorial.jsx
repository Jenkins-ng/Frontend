import React, { useRef, useState } from "react";
import Head from "../Landing page/Header/Head";

const searchApi = ({ input }) => {
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
          q: input,
        })
    )
      .then((response) => response.json)
      .then((data = setdata(data)));

    return () => {
      setdata([]);
    };
  }, [input]);
};

const Search = () => {
  const inputRef = useRef();
  const Submithandler = () => {
    const input = inputRef.current.value;
    searchApi(input);
  };

  return (
    <div>
      <input type="text" name="" id="" value={inputRef} />
      <button type="submit" onClick={Submithandler}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

const VideoData = () => {
  return (
    <div>
      {data.items.map((data) => {
        `<iframe
          width="350"
          height="300"
          src="http://www.youtube.com/embed/${data.id.videoId}"
          frameborder="0"
          allowfullscreen
        ></iframe>`;
      })}
    </div>
  );
};

const Tutorial = () => {
  return (
    <div>
      <Head />
      <Search />
      <VideoData />
    </div>
  );
};

export default Tutorial;
