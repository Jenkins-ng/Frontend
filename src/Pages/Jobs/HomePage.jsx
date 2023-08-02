import React from "react";
import Header from "../../components/Jobs/Landing Page/Header";
import Category from "../../components/Jobs/Landing Page/Category";
import Partner from "../../components/Jobs/Landing Page/Partner";
import Job from "../../components/Jobs/Jobs/Job";

const HomePage = () => {
  return (
    <main>
      <Header />
      <main className="m-auto w-[90%]">
        <Partner />
        <Category />
        <Job />
      </main>
    </main>
  );
};

export default HomePage;
