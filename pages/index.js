

import Horario from './Horario'
import Localizacion from './Localizacion'
import { useState, useEffect, useRef} from 'react'

import NavBar from '../components/NavBar'


export default function Home() {


  const [openNav, setIsOpenNav] = useState(true);

  

  const [openWidget, setOpenWidget] = useState(true); // dont matter value

  /**
   * Calling forceRender triggers useState's re-render. 
   */
  const [, forceRender] = useState(Date.now())


  // component refs to widgetCover of every page:
  const hRef = useRef();
  const lRef = useRef();

  const menuControlRef = useRef({
    localizacion: false,
    horario: false,
  })
  const changeflagRef = (s) => {
    switch(s){
      case "horario":
        hRef.current.scrollIntoView({behavior: "smooth"});
        menuControlRef.current.horario = true;
        break;
      case "localizacion":
        lRef.current.scrollIntoView({behavior: "smooth"})
        menuControlRef.current.localizacion = true;
        break;
      
    };

    /**
     * Rendering index and widget pages again, so that 
     * the pages evaluate the updated ref value and change accordingly. 
     */
    setTimeout(()=>{
      forceRender(Date.now());
    }, 500)
    
  }
  const closeAllPages = () => {
    console.log("menuControlRef", menuControlRef.current);
    for (let page in menuControlRef.current){
      console.log(page,menuControlRef.current[page]  )
      menuControlRef.current[page] = false;
    }

    forceRender(Date.now());

    
  }
 



  return (
    <div className="container">

      <NavBar 
        closeAllPages={closeAllPages}
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
          menuControlRef={menuControlRef}
          changeflagRef={changeflagRef}
        />
        <Localizacion 
          ref={lRef}
          setIsOpenNav={setIsOpenNav}
          menuControlRef={menuControlRef}
          changeflagRef={changeflagRef}
        />
      </div>
      {/* <div className="widgetholder">
        <Localizacion toggleNav={toggleNav}/>
        <Horario toggleNav={toggleNav} openWidget={openWidget}/>

      </div> */}

    </div>
  )
}
