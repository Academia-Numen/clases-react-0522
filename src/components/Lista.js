import Titulo from "./Titulo";

const Lista = (props) => {
    console.log('Titulo:', props.title);
    console.log('Items:', props.items);

    return (
        <>
            <Titulo title={props.title} />
            
            <ul style={{ fontSize: 14, color: 'red' }}>
                {props.items.map((item, index) => (
                    <li key={index}>
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Lista;