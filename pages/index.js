

import Horario from './Horario'
import Localizacion from './Localizacion'
import { useState, useEffect, useRef} from 'react'

import NavBar from '../components/NavBar'


export default function Home() {


  const [openNav, setIsOpenNav] = useState(true);

  
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
  });
  /**
   * 
   * @param {string} s
   *  
   */
  const changeRefValue = (s) => {
    
    closeAllPages();

    switch(s){
      case "home":
        goHome();
        break;
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
    for (let page in menuControlRef.current){
      menuControlRef.current[page] = false;
    }
  }

  const goHome = () => {
    closeAllPages();
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 250);
    forceRender(Date.now())
  }

 



  return (
    <div className="container">
      <NavBar 
        goHome={goHome}
        openNav={openNav}
        changeRefValue={changeRefValue}
        
      />

      {/* Landing page heading */}
      <h1 style={{margin: "100px 0 0", textAlign:"center"}}>Home Page</h1>

      {/* black rectangle */}
      <div className="brect"></div>
      <div className="binfo">
        <p>
          Created website widgets such as the app widgets on Iphone.
          Using Next.js and framer motion to handle the animations.<br/><br/>
          First, there is a WidgetCover function component to hold onto position the actual Widget component.
          Without the WidgetCover the Widgets scale change can alter other surrounding components.<br/><br/>
          The widgets have two content components: ClosedContent and OpenContent. 
          These components evaluate a boolean prop to decide or not to render its children content.

        </p>
      </div>
      <div className="brect"></div>
      <div className="brect"></div>

      {/* Two flex widgetholders */}
      <div className="widgetholder" >
        <Horario 
          ref={hRef} 

          setIsOpenNav={setIsOpenNav} 
          menuControlRef={menuControlRef}
          changeRefValue={changeRefValue}
        />
        <Localizacion 
          ref={lRef}
          setIsOpenNav={setIsOpenNav}
          menuControlRef={menuControlRef}
          changeRefValue={changeRefValue}
        />
      </div>
     

    </div>
  )
}
