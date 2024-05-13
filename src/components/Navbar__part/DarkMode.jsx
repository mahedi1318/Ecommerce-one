import { useEffect, useState } from "react"
import LightModeButton from "../../assets/images/Light-Mode.png"
import DarkModeButton from "../../assets/images/dark-logo.png"

const DarkMode = () => {

    const [ theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light")

    const element = document.documentElement;    

    useEffect(()=>{
      localStorage.setItem("theme", theme);
      if (theme == "dark") {
        element.classList.add("dark")
        element.classList.remove("light")
      }else{
        element.classList.add("light")
        element.classList.remove("dark")
      }
    })

    const handleTheme = ()=>{
        setTheme(theme == "dark" ? "light" : "dark")
    }

  return (
    <>
      <div className="relative">
        <img onClick={handleTheme} className={`w-12 absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"}`} src={LightModeButton} alt="" />
        <img onClick={handleTheme} className={`w-12 }`} src={DarkModeButton} alt="" />
      </div>
    </>
  )
}

export default DarkMode
