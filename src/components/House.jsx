function House({phouse, psetHouse, phouses}){

    const handleHouseChange = (ev) => {
        
        psetHouse(ev.target.value)
};

    return(

        
        <>
        <div className="house">
                
                <h2>Selecciona la casa : 
                    <select name="house" value={phouse} onChange={handleHouseChange} id="house">
                        <option value="">Todas</option>

                    {phouses.map((house, index) =>
                    <option key={index} value={house}> {house}</option>
                )}

                        
                    </select>
                </h2>
     
            </div>

        
        </>
    )
}
export default House;