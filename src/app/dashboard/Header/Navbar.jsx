import React from 'react'
import logo from '../../assets/Borderless logo B with background.png'

const Navbar = () => {
  return (
    <div>
      <div>
        <div className='bg-color1 w-[250px] h-[80px]'>
          <img src={logo} alt="Logo"  width={200} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar