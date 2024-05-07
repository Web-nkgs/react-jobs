import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import AllJobsButton from "../components/AllJobsButton";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
      <AllJobsButton />
    </>
  );
};

export default HomePage;
