import React, { useEffect, useState } from 'react';
import './Toggle.css';
import { setTheme } from '../utils/themes';
import {
  BsFillBrightnessHighFill,
  BsFillMoonFill
} from "react-icons/bs";

function Toggle() {
    const [active, setActive] = useState(false)
    const [ariaActive, setAriaActive] = useState(true)
    let theme = localStorage.getItem('theme')

    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
        setActive(true)
        setAriaActive(false)
      } else {
        setTheme('theme-dark')
        setActive(false)
        setAriaActive(true)
      }
    }

    const handleOnClick = () => {
      changeThemeAndToggle()
    }

    const handleKeypress = e => {
      if (e.code === "Enter") {
        changeThemeAndToggle()
      }
    }

    useEffect(() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setActive(false)
        setAriaActive(true)
      } else if (localStorage.getItem('theme') === 'theme-light') {
        setActive(true)
        setAriaActive(false)
      }
    }, [theme]);

  let icon = localStorage.getItem('theme') === 'theme-light' ? <BsFillMoonFill size={50} /> : <BsFillBrightnessHighFill size={50} />;
  console.log(icon)

    return (
      // <div className="container--toggle">
      //   <input aria-label="dark mode toggle" role="switch" aria-checked={ariaActive} onKeyPress={handleKeypress} type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked={active} readOnly />
      //   <label htmlFor="toggle" className="toggle--label">
      //     <span className="toggle--label-background"></span>
      //     Switch
      //   </label>
      // </div>

      <div>
        <input aria-label="dark mode toggle" role="switch" aria-checked={ariaActive} onKeyPress={handleKeypress} type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked={active} readOnly />

        <label htmlFor="toggle" className="toggle-icon">
          {icon}
        </label>
      </div>

    )
}

export default Toggle;