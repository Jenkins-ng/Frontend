import React, { useRef, useState, useEffect } from "react";
import Head from "../Landing page/Header/Head";
import axios from "axios";
import { Spinner } from "flowbite-react";

let queryLink = "https://www.googleapis.com/youtube/v3/search?";
let api_key = "AIzaSyBshwIa6nPWeJZ8rbBmjQ_h9Drl_SdWYjQ";

const Inputcomponent = () => {
  // const input = useRef("");
  const [input, setInput] = useState("");
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //

  const SearchApi = async (input) => {
    const response = await axios.get(
      queryLink +
        new URLSearchParams({
          key: api_key,
          type: "videos",
          part: "snippet",
          maxResults: 1000,
          q: input,
        })
    );
    const result = await response.json();
    setdata(result.data);
  };

  useEffect(() => {
    SearchApi(input);

    // return () => {
    //   second;
    // };
  }, [input]);

  const Keypress = (e) => {
    console.log(e.code);
    e.preventDefault();
    if (e.code === "Enter") {
      SearchApi(input);
    }
    if (e.code === "Backspace") {
      // SearchApi(input.current.value);
      input.current.value = "";
    }
  };

  // useEffect(() => {
  //   console.log(document.activeElement);
  //   if (document.activeElement === document.querySelector("#search")) {
  //     document.querySelector("#search").addEventListener("keydown", Keypress);
  //   }

  //   return () => {
  //     document
  //       .querySelector("#search")
  //       .removeEventListener("keydown", Keypress);
  //   };
  // }, [input]);

  const eventHandler = (e) => {
    e.preventDefault();
    console.log(input);
    SearchApi(input);
  };

  return (
    <div>
      <div className="m-auto w-5/6 flex gap-">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-5/6 rounded"
          id="search"
        />
        <button onClick={eventHandler}>
          <span className="material-symbols-outlined text-3xl p-2 bg-blue-400 rounded drop-shadow-xl">
            search
          </span>
        </button>
      </div>
      {data ? (
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
      ) : (
        <p>Type into the search bar to start searching</p>
      )}
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
