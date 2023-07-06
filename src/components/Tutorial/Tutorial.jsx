import React, { useRef, useState, useEffect } from "react";
import Head from "../Landing page/Header/Head";

const Inputcomponent = () => {
  const input = useRef();
  const [data, setdata] = useState([]);
  let api_key = "AIzaSyBshwIa6nPWeJZ8rbBmjQ_h9Drl_SdWYjQ";
  let queryLink = "https://www.googleapis.com/youtube/v3/search?";

  //

  useEffect(() => {
    const SearchApi = (input) =>
      fetch(
        queryLink +
          new URLSearchParams({
            key: api_key,
            type: "videos",
            part: "snippet",
            maxResults: 1000,
            q: input,
          })
      )
        .then((response) => response.json())
        .then((res) => setdata(res));
    console.log(data);
  }, [input]);

  const eventHandler = (e) => {
    e.preventDefault();
    SearchApi(input.current.value);
  };

  return (
    <div>
      <div>
        <input type="text" ref={input} />
        <button
          onClick={() => {
            eventHandler;
          }}
        >
          search
        </button>
      </div>
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
    </div>
  );
};

const Tutorial = () => {
  return (
    <div>
      <Head />
      <section className="relative top-28">
        <Inputcomponent />
      </section>
    </div>
  );
};

export default Tutorial;
