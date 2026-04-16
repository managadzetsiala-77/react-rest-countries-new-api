import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const Header = () => {
  const {isDark, toggle} = useThemeStore()
  return (
    <div>
      <div className= {`${isDark ? "bg-[#2B3844] text-white" : ""} flex gap-31 items-center justify-around py-7.5 px-4.5 lg:gap-235.25`} >
          <h2 className={`${isDark ? "text-white" : ""} justify-start text-neutral-900 text-sm font-extrabold font-['Nunito_Sans'] leading-5`}>
            Where in the world?
          </h2>
          <div onClick={toggle} className="flex items-center justify-center gap-2">
            <img src="images/moon.svg" alt="" />
            <h3 className={`${isDark ? "text-white" : ""} justify-start text-neutral-900 text-xs font-semibold font-['Nunito_Sans'] `}>{isDark ? "light Mode" : "Dark Mode"}
        
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Header
