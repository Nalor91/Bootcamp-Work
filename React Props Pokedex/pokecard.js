function Pokecard ({name, image, type, base_experience})
{
    return (
        <div>
            <h2> {name}</h2>
            {image}
            Type: {type}
            <p></p>
            EXP: {base_experience}
        </div>
    )
}