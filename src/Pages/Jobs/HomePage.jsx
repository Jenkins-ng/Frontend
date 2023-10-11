import React, { useEffect } from "react";
import Header from "../../components/Jobs/Landing Page/Header";
import Category from "../../components/Jobs/Landing Page/Category";
import Partner from "../../components/Jobs/Landing Page/Partner";
import Job from "../../components/Jobs/Jobs/Job";

const HomePage = () => {
  useEffect(() => {
    document.title = "Jenkins.ng | Your No 1 stop shop for varieties";
  }, []);

  return (
    <main>
      <Header />
      <main className="m-auto w-[90%]">
        <Partner />
        {/* <Category /> */}
        <Job />
      </main>
    </main>
  );
};

export default HomePage;
