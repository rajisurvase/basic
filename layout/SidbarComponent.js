import React from 'react'
import { Heart } from 'bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.css'


const sideLabel = [
    {
      id: 1,
      name: "Dashboard",
      icon: <Heart />,
      link: '/'
    }
    // {
    //   id: 2,
    //   name: "Borrowers",
    //   icon: <GroupAddIcon />,
    //   link: "/borrowers"
    // },
    // {
    //   id: 3,
    //   name: "Calculator",
    //   icon: <CalculateIcon />,
    //   link: "/calculator"
    // }
    // {
    //   id: 2,
    //   name: "Records",
    //   icon: <GroupAddIcon />,
    //   link: "/records"
    // }
  ]
  
const SidbarComponent = () => {

  return (
  <div className='   d-flex flex-row justify-content-start' style={{height:"100vh"}} >
    {/* <SideBarComponent/> */}
    <div className='px-4 pt-8 pb-4 bg-ligth d-flex justify-content-between  flex-col border  border-end-0  w-80'  style={{height:"100vh"}}>
{sideLabel.map((item,index)=>{
  return(
    <div key={index}>
      <h3 >{item.icon}{item.name}</h3>
    </div>
  )
})}

    </div>
    {/* <div className='  p-4 text-white border border-start-0'></div> */}
  </div>
  )
}

export default SidbarComponent