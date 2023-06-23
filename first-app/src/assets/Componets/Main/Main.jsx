//CSS externo
//CSS interno
//CSS JSON

const titleStyle = 
{
    color: 'white',
    backgroundColor: 'blue',

}

function Main({name, age}) {

    return (
        <>
    <h1 style={titleStyle}>{name}</h1>

    <h1 style={{
            color : 'red',
            backgroundColor: 'white',
    }} >

    {age}

    </h1>

    </>
    )
}

export default Main;