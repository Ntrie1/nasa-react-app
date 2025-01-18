import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModel] = useState(false);

  const handleDisplayModel = () => {
    setShowModel((prev) => !prev);
  }

  return (
    <>
      <Main />
     { showModal && (<SideBar handleDisplayModel={handleDisplayModel} />)}
      <Footer handleDisplayModel={handleDisplayModel}  />
    </>
  )
}

export default App
