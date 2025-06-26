import { Link } from "react-router-dom";
import Character from "./Character";


function CharacterList({pfilteredList, psearchName}){

    if (pfilteredList.length === 0 && psearchName !== "") {
    return <p className="no-results">No se encuentra el nombre indicado 🧹</p>;
  }

    return(
        
            
            <div >
                <div className='cards'>
                    {pfilteredList.map((item, index) => (
                        <Link to={`/character/${item.id}`} className="back-link" key={index}>
                       <Character key={index} item={item} index={index} />     
                        </Link>
                    ))}
                </div>
            </div>

            
    )

}
export default CharacterList;