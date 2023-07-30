import React, { useState } from "react";
import Inputfield from "../../Error & recovery/Inputfield";
import Wrapper from "../Wrapper";
import { apiPrivate as api } from "../../../utils/api";
import Emailverifybutton from "../../Buttons/Emailverifybutton";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const CreateAdmin = async (e) => {
    e.preventDefault();
    const data = name

    try {
      const response = await api.post("/admin", { name, email, password });
      console.log(data);
      const result = await response.data;
      console.log(result);
    } catch (error) {
      // console.log(error.response);
    }
  };

  return (
    <Wrapper>
      <main className="w-4/6 m-auto -translate-x-1/5 translate-y-2/3">
        <h1 className="text-slate-500 font-bold ">CREATE ADMIN</h1>
        <div>
          <form onSubmit={CreateAdmin}>
            <Inputfield
              placeholder="ENTER YOUR NAME"
              title="Name"
              input={name}
              setInput={setName}
            />
            <Inputfield
              placeholder="ENTER YOUR EMAIL"
              title="Email"
              type="email"
              input={email}
              setInput={setEmail}
            />
            <Inputfield
              placeholder="ENTER YOUR PASSWORD"
              title="password"
              type="password"
              input={password}
              setInput={setPassword}
            />

            <Emailverifybutton title="CREATE ADMIN" />
          </form>
        </div>
      </main>
    </Wrapper>
  );
};

export default Profile;
