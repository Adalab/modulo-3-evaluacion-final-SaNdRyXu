

function Character ({item}) {

    return(
        
                        <div className='card-info'>
                                <img className='characters' src={item.image || `https://placecats.com/300/400`} alt={item.name} />
                                <div className='info'>
                                <h3>{item.name}</h3>
                                <p>Casa: {item.house}</p>
                                <p>Especie: {item.species}</p>
                                </div>
                            </div>
        
        
    )
}
export default Character;