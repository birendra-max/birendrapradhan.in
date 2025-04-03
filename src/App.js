import React, { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Topbar />
          <Menu />
        </>
      )}
    </>
  );
}
