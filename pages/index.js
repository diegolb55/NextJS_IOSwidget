

import Horario from './Horario'
import Localizacion from './Localizacion'
import { useState, useEffect, useRef} from 'react'

import NavBar from '../components/NavBar'


export default function Home() {


  const [openNav, setIsOpenNav] = useState(true);

  

  const [openWidget, setOpenWidget] = useState(true); // dont matter value

  const [, forceRender] = useState(Date.now())




  console.log("index rendered")


  // component refs to widgetCover of every page:
  const hRef = useRef();
  const lRef = useRef();

  const menuControlRef = useRef({
    localizacion: false,
    horario: false,
  })
  const changeflagRef = (s) => {
    switch(s){
      case "localizacion":
        lRef.current.scrollIntoView({behavior: "smooth"})
        menuControlRef.current.localizacion = true;
        break;
      case "horario":
        hRef.current.scrollIntoView({behavior: "smooth"});
        menuControlRef.current.horario = true;
        break;
    }
    setTimeout(()=>{
      forceRender(Date.now());
    }, 1000)
    
    console.log("index forced")

  }
 



  return (
    <div className="container">

      <NavBar 
        openNav={openNav}
        setOpenWidget={setOpenWidget}
        changeflagRef={changeflagRef}
        
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
          ref={hRef} 

          setIsOpenNav={setIsOpenNav} 
          openWidget={openWidget}
          menuControlRef={menuControlRef}
        />
        <Localizacion 
          ref={lRef}
          setIsOpenNav={setIsOpenNav}
          menuControlRef={menuControlRef}
        />
      </div>
      {/* <div className="widgetholder">
        <Localizacion toggleNav={toggleNav}/>
        <Horario toggleNav={toggleNav} openWidget={openWidget}/>

      </div> */}

    </div>
  )
}
