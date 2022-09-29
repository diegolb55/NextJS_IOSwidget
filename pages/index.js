

import Horario from './Horario'
import Localizacion from './Localizacion'
import { useState, useEffect, useRef} from 'react'

import NavBar from '../components/NavBar'


export default function Home() {


  const [openNav, setIsOpenNav] = useState(true);

  

  const [openWidget, setOpenWidget] = useState(true); // dont matter value



  console.log("index rendered")


  // trying to open widget from navmenu
  const hRef = useRef()
  const [hcf, setHCF] = useState("false")

 

  useEffect(()=>{
    console.log("init hcf")
    setHCF(hRef.current.getAttribute("flag"));
  })


  const logRef = () => {

    hRef.current.setAttribute("flag", "true");
    hRef.current.scrollIntoView({behavior: "smooth"});
    setTimeout(()=>{
      setHCF("true");
    }, 1000)
    

      
  }


 

  return (
    <div className="container">

      <NavBar 
        openNav={openNav}
        setOpenWidget={setOpenWidget}
        logRef={logRef}
        
      />

      {/* Landing page heading */}
      <h1 style={{margin: "100px 0 0", textAlign:"center"}}>Home Page</h1>

      {/* black rectangle */}
      <div 
        style={{ height: 1000, width: "70vw",
          margin:"20px auto", background:"#414a4c",
          boxShadow:"inset 5px 0px 12px 2px black"
        }}
      ></div>

      {/* Two flex widgetholders */}
      <div className="widgetholder" >
        <Horario 
          hcf={hcf}
          ref={hRef} 

          setIsOpenNav={setIsOpenNav} 
          openWidget={openWidget} />
        <Localizacion setIsOpenNav={setIsOpenNav}/>
      </div>
      {/* <div className="widgetholder">
        <Localizacion toggleNav={toggleNav}/>
        <Horario toggleNav={toggleNav} openWidget={openWidget}/>

      </div> */}

    </div>
  )
}
