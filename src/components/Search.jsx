function Search({ psearchName, psetSearchName}){

    const handleName = (ev) => {
        ev.preventDefault();
        psetSearchName(ev.target.value);

    }

    return(
        
        <div className="search">
                
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="searchInput">Buscar por personaje: </label>
                    <input className="search-input"
                        id="searchInput"
                        type="search"
                        placeholder="Escribe un nombre..."
                        value={psearchName}
                        onChange={handleName}
                    />
            </form>
     
        </div>
        
        
    )
}
export default Search;