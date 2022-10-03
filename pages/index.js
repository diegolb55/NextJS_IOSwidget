

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
  })
  /**
   * 
   * @param {string} s
   *  
   */
  const changeflagRef = (s) => {
    switch(s){
      case "home":
        closeAllPages();
        break
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

    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 250)


    
  }
 



  return (
    <div className="container">
      <NavBar 
        closeAllPages={closeAllPages}
        openNav={openNav}
        changeflagRef={changeflagRef}
        
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
          Without the WidgetCover the Widget's scale change can alter other surrounding components.<br/><br/>
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
