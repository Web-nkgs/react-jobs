import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getJobById = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching jobs");
      } finally {
        setLoading(false);
      }
    };

    getJobById();
  }, []);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};

export default JobPage;
