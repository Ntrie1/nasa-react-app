import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModel] = useState(false);
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAPIData = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API;
      const url = `https://api.nasa.gov/planetary/apod` + `?api_key=${NASA_KEY}`;


      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      };

      localStorage.clear();


      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        localStorage.setItem(localKey, JSON.stringify(apiData));

      } catch (error) {
        console.log(error.message);

      }


    }
    fetchAPIData();
  }, [])

  const handleDisplayModel = () => {
    setShowModel((prev) => !prev);
  }

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModal &&
        (<SideBar data={data} handleDisplayModel={handleDisplayModel} />)}

      {data &&
        (<Footer data={data} handleDisplayModel={handleDisplayModel} />)}
    </>
  )
}

export default App
