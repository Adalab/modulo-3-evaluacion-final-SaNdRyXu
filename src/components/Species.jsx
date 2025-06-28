function Species({pspecie, psetSpecies, pspecies}){

    const handleSpecies = (ev) => {
        
        psetSpecies(ev.target.value)
};

    return(

        <div className="species">
                
                <label>Selecciona la especie: <select className="select-species" name="species" value={pspecie} onChange={handleSpecies} id="species">
                        <option value="">Todas</option>

                    {pspecies.map((species, index) => {
                    const capitalizedSpecies = species.charAt(0).toUpperCase() + species.slice(1);
                    return <option key={index} value={species}>{capitalizedSpecies}</option>
            })}

                        
                    </select>
                </label>
     
        </div>

        
    )
}
export default Species;