"use client";
import { useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <button className="text-2xl" onClick={toggleTheme}>
        {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
      </button>
    </div>
  );
}

export default ThemeToggle;
