import ClotesList from "../Data/List";
import ClotesDiv from "../Data/clotesDiv";
import { useState } from "react";
import './home.css'

function SectionFunc() {

    const [click,setClick] = useState(false)

    let map = ClotesList.map((el,i) =>{
        return <ClotesDiv img={el.src} name={el.name} price={el.price} />
    })

    return(
        <section>
            <div onClick={()=>{
                setClick(!click)
                
            }} className="Div1">
                {map}
            </div>
            <div className={click? `Open`:`Close`}>
            {map}
            
            </div>
        </section>
    )
}

export default SectionFunc