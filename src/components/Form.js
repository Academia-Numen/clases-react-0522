import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import centerItems from '../globalStyles';
import Icon from './Icon';

const Form = (props) => {
    const { id, nombre, apellido, causa, otro, deleteForm, edit } = props;

    const [showButtons, setShowButtons] = useState(false);

    const { themeStyles } = useContext(ThemeContext);

    return (
        <li
            style={{
                ...centerItems('row'),
                listStyle: 'none',
                width: 300,
                height: 245,
                border: `solid ${themeStyles.color} 1px`,
                padding: '0 1rem',
            }}
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
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

            {showButtons && <div>
                <Icon
                    name={faTrash}
                    size={20}
                    text='Eliminar'
                    color="red"
                    clickable
                    onClick={() => deleteForm(id)}
                />
                <Icon
                    name={faEdit}
                    size={20}
                    text='Editar'
                    color="blue"
                    clickable
                    onClick={() => edit(id)}
                />
               </div>
            }
        </li>
    )
}

export default Form;
