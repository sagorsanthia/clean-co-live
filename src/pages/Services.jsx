import React, { useEffect, useState } from "react";
import fetcher from "../Api";

const Services = () => {
  const [services, setServices] = useState();
  console.log(services);
  useEffect(() => {
    /*  axios
      .get("http://localhost:5000/services")
      .then((res) => setServices(res.data)); */
    (async () => {
      const res = await fetcher.get("/services");
      setServices(res.data);
    })();
  }, []);
};

export default Services;
