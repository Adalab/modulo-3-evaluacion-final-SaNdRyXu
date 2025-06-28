import { useParams, useNavigate } from "react-router-dom";
import SpeciesIcon from "./SpeciesIcon";


function CharacterDetail({pfilteredList, }){
    const {id} = useParams();
    
    const contact = pfilteredList.find(item => String(item.id) === id)
    const navigate = useNavigate();

    return (
       
        <div className="character-detail">
        <button className="button" onClick={() => navigate(-1)}>Volver</button>
        <div className="container">
        
            <img className='characters1' src={contact.image || `https://placecats.com/300/400`} alt={contact.name} /> 
            <div
    className={`house-image ${contact.house === "Sin casa" ? "sin-casa" : contact.house.toLowerCase()}`}
  ></div>
            <div className="info">
            <p>Nombre: {contact.name}</p>
            <p>Estado: {contact.alive ? "🟢 Vivo/a" : "⚰️ Fallecido/a"}</p>
            <p>Especie: <SpeciesIcon species={contact.species} /></p>
            <p>Genero: {contact.gender}</p>
            <p>Casa: {contact.house}</p>
            </div>

        </div>
        </div>
    );

}

export default CharacterDetail;


