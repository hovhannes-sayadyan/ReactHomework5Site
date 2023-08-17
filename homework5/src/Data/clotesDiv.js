function ClotesDiv({img,name,price}) {
    return(
        <div style={{width:320 , height:500, border:`2px solid green`, display:`flex`,justifyContent:"space-around",alignItems:'center', flexDirection:"column"}}>
            <img style={{width:300}} src={img} />
            <h1>{name}</h1> 
            <h1>{price}</h1>            
        </div>
    )
}

export default ClotesDiv