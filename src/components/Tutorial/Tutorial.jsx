import React, { useRef, useState, useEffect } from "react";
import Head from "../Landing page/Header/Head";
import axios from "axios";
import { Spinner } from "flowbite-react";

let queryLink = "https://www.googleapis.com/youtube/v3/search?";
let api_key = "AIzaSyBshwIa6nPWeJZ8rbBmjQ_h9Drl_SdWYjQ";

const Inputcomponent = ({ data, setdata }) => {
  // const input = useRef("");
  const [input, setInput] = useState("");

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
          q: "" | input,
        })
    );
    const result = await response.data;
    console.log(result);
    setdata({ ...data, ...result.items });
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
          <span className="material-symbols-outlined text-2xl sm:text-3xl p-1 bg-blue-400 rounded drop-shadow-xl">
            search
          </span>
        </button>
      </div>
    </div>
  );
};

const Tutorial = () => {
  const [data, setdata] = useState([]);
  return (
    <div>
      <Head />
      <section className=" relative top-28 overflow-scroll h-[calc(100%-70px)] Hide m-auto">
        <Inputcomponent data={data} setdata={setdata} />
        <div>
          {data ? (
            <div className="">
              {console.log(data)}
              {data.map((data) => {
                console.log(typeof data);
                <div className="h-full">{data} this is my code</div>;
              })}
            </div>
          ) : (
            <p>Type into the search bar to start searching</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tutorial;
