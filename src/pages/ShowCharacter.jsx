import { useEffect } from "react";
import { useState } from "react";
import "./ShowCharacter.css";


const ShowCharacter = () => {
    const [characters, setCharacters] = useState([])
    function getAllCharacters() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response =>response.json())
        .then(data => {
            console.log(data.results)
            setCharacters(data.results)

    });


    }
    useEffect(() => {
        getAllCharacters()
}, []);
    return (
      <div className="morty">
         <h1>Hola, soy el componente ShowCharacter</h1>
            {
                characters.map((character) => (
            <div key={character.id}>
                <img src={character.image} alt={character.name} />
                <p>Nombre: {character.name}</p>
                <p>Especie: {character.species}</p>
                <p>Estado: {character.status}</p>
            </div>
                ))

            }
      </div>
    );
  };
  
  export default ShowCharacter;