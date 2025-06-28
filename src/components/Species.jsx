function Species({pspecie, psetSpecies, pspecies}){

    const handleHouseChange = (ev) => {
        
        psetSpecies(ev.target.value)
};

    return(

        
        <>
        <div className="species">
                
                <label>Selecciona la especie: <select className="select-species" name="species" value={pspecie} onChange={handleHouseChange} id="species">
                        <option value="">Todas</option>

                    {pspecies.map((species, index) =>
                    <option key={index} value={species}> {species}</option>
                )}

                        
                    </select>
                </label>
     
            </div>

        
        </>
    )
}
export default Species;