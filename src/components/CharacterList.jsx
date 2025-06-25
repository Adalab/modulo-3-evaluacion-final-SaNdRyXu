function CharacterList(contactsList){

    return(
        <>
            <div className='container'>
                <div className='cards'>
                    {contactsList.contactsList.map((item, index) => (
                        
                            <div className='card-info' key={index}>
                                <img className='characters' src={item.image || `https://placecats.com/300/400`} alt={item.name} />
                                <div className='info'>
                                <h3>{item.name}</h3>
                                <p>Casa: {item.house}</p>
                                <p>Especie: {item.species}</p>
                                </div>
                            </div>
                        
                    ))}
                </div>
            </div>

        </>
    )

}
export default CharacterList;