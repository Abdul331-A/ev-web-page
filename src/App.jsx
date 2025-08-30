import { useEffect, useState } from "react";
import Background from "./Components/Background";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "Give in to", text2: "your passion" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval); // Cleanup to prevent stacking
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
