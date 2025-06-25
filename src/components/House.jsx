function House(){
    return(
        <>
        <div className="house">
                
                <h2>Selecciona la casa : 
                    <select name="house" id="">
                        <option value="all">Todas</option>
                        <option value="gryffindor">Gryffindor</option>
                        <option value="hufflepuff">Hufflepuff</option>
                        <option value="ravenclaw">Ravenclaw</option>
                        <option value="slytherin">Slytherin</option>
                    </select>
                </h2>
     
            </div>

        
        </>
    )
}
export default House;