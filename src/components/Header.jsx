import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex gap-31 items-center justify-around py-7.5 px-4.5 lg:gap-235.25">
          <h2 className="justify-start text-neutral-900 text-sm font-extrabold font-['Nunito_Sans'] leading-5">
            Where in the world?
          </h2>
          <div className="flex items-center justify-center gap-2">
            <img src="images/moon.svg" alt="" />
            <h3 className="justify-start text-neutral-900 text-xs font-semibold font-['Nunito_Sans']">
              Dark Mode
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Header
