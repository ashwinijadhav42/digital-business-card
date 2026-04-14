import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { useEffect, useState } from "react";
import api from "../api/api";

function Home() {
const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/demo/home")
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);




  return (
    <>
     
<HeroSection/>
 
   
    </>
  );
}

export default Home;
