import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SideBarComponent from '@/component/SideBarComponent'
import 'bootstrap/dist/css/bootstrap.css';

// const sideLabel = [
//     {
//       id: 1,
//       name: "Dashboard",
//       icon: <i class="bi bi-border-all"></i>,
//       link: '/'
//     },
//     {
//       id: 2,
//       name: "Borrowers",
//       icon: <GroupAddIcon />,
//       link: "/borrowers"
//     },
//     {
//       id: 3,
//       name: "Calculator",
//       icon: <CalculateIcon />,
//       link: "/calculator"
//     }
//     // {
//     //   id: 2,
//     //   name: "Records",
//     //   icon: <GroupAddIcon />,
//     //   link: "/records"
//     // }
//   ]
  
const SidbarComponent = () => {

  return (
  <div className='   d-flex flex-row justify-content-start' style={{height:"100vh"}} >
    <SideBarComponent/>
    <div className=' bg-primary  p-4 text-white border border-start-0'>Dashboard</div>
  </div>
  )
}

export default SidbarComponent