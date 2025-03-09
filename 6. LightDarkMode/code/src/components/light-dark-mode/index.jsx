import useLocalStorage from "./useLocalStorage";
import "./theme.css"

const LightDarkMode =()=>{
    
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme =()=>{
    // console.log("click")
    setTheme(theme === "light" ? "dark" : "light");
  }
  // console.log(theme)

    return(<div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello World</p>
            <button onClick={handleToggleTheme}>Change Mode</button>
        </div>

    </div>)
}

export default LightDarkMode