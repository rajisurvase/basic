import React from 'react'
// import { Heart } from 'bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'


const sideLabel = [
    {
      id: 1,
      name: "Dashboard",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-dash" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>,
      link: '/'
    },
    {
      id: 2,
      name: "Total student",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-hearts" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
    </svg>,
      link: '/student'
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
  <div className='d-flex flex-row justify-content-start' style={{height:"100vh"}} >
        {sideLabel.map((item,index)=>{
          return(
            <Link key={index} href={item.link} >
              <div >{item.icon}<label> {item.name} </label></div>
             </Link>
          )
        })}
  </div>
  )
}

export default SidbarComponent