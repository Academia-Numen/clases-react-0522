import centerItems from '../globalStyles';

const Form = (props) => {
    const { id, nombre, apellido, causa, otro } = props;

    return (
        <li
            style={{
                ...centerItems(),
                listStyle: 'none',
                width: 300,
                height: 245,
                border: 'solid black 1px',
                padding: '0 1rem',
            }}
        >
            <div>
                <p>Formulario N°
                    <span style={{ fontWeight: '500' }}> {id}</span>
                </p>
                <p>Nombre:
                    <span style={{ fontWeight: '500' }}> {nombre}</span>
                </p>
                <p>Apellido:
                    <span style={{ fontWeight: '500' }}> {apellido}</span>
                </p>
                <p>Causa:
                    <span style={{ fontWeight: '500' }}> {causa}</span>
                </p>
                <p>Otro:
                    <span style={{ fontWeight: '500' }}> {otro}</span>
                </p>
            </div>
        </li>
    )
}

export default Form;
