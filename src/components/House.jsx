function House({phouse, psetHouse, phouses}){

    const handleHouseChange = (ev) => {
        
        psetHouse(ev.target.value)
};

    return(

        
        <>
        <div className="house">
                
                <label>Selecciona la casa: <select className="select-house" name="house" value={phouse} onChange={handleHouseChange} id="house">
                        <option value="">Todas</option>

                    {phouses.map((house, index) =>
                    <option key={index} value={house}> {house}</option>
                )}

                        
                    </select>
                </label>
     
            </div>

        
        </>
    )
}
export default House;