

import Horario from './Horario'
import Localizacion from './Localizacion'
import { useState, useEffect, useRef} from 'react'

import NavBar from '../components/NavBar'


export default function Home() {


  const [openNav, setIsOpenNav] = useState(true);
  const toggleNav = (b) => {
    setIsOpenNav(b);
  }

  const [openWidget, setOpenWidget] = useState(true); // dont matter value



  console.log("index rendered")


  // trying to open widget from navmenu
  const horario = useRef()

  const [controlFlag, setControlFlag] = useState(horario.current?.getAttribute("flag"));

  useEffect(()=>{

    console.log("changed control flag: ", horario.current?.getAttribute("flag"))

  }, [controlFlag])


  const logRef = () => {

    let hf = horario.current?.getAttribute("flag");
    if(hf == "false"){
      setControlFlag("true")
      horario.current.setAttribute("flag", "true")
      console.log("setted atr: ", horario.current?.getAttribute("flag"))

    }
    else if(hf == "true"){
      setControlFlag("false")
      horario.current.setAttribute("flag", "false")
      console.log("setted atr: ", horario.current?.getAttribute("flag"))

    }
    
    console.log("log ref",horario.current?.getAttribute("flag"))
    
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
           
          ref={horario} 
          controlFlag={controlFlag}

          toggleNav={toggleNav} 
          openWidget={openWidget} />
        <Localizacion toggleNav={toggleNav}/>
      </div>
      {/* <div className="widgetholder">
        <Localizacion toggleNav={toggleNav}/>
        <Horario toggleNav={toggleNav} openWidget={openWidget}/>

      </div> */}

    </div>
  )
}
