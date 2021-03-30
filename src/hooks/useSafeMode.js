import { useEffect, useState } from "react"

export const useSafeMode = () => {
  const [theme, setTheme] = useState("light")

  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const themeToggle = () => {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const themelocal = window.localStorage.getItem("theme")
    themelocal && setTheme(themelocal)
  }, [])
  return [theme, themeToggle]
}
