import { faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import centerItems from '../globalStyles';
import Form from "./Form";
import useFetchData from "../hooks/useFetchData";
import useDeleteData from "../hooks/useDeleteData";

const Forms = (props) => {
    const { refetch, refetchData, url, edit } = props;

    const { 
        data: forms, 
        isLoading: isFormsLoading, 
        error: formsError, 
    } = useFetchData(url, refetch);

    const { 
        deleteForm, 
        isLoading: isFormDeletionLoading, 
        error: deleteFormError, 
    } = useDeleteData(url, refetchData, 'Hubo un error al eliminar el formulario');

    return (
        <div style={{ padding: '0 1rem' }}>
            {isFormsLoading ? (
                <Icon
                    name={faSpinner}
                    size={40}
                    rotate={true}
                    text='Los formularios están cargando...'
                />
            ) : (
                <div style={centerItems()}>
                    {forms.length !== 0 && (
                        <div style={centerItems()}>
                            <h2>Formularios Enviados:</h2>

                            {isFormDeletionLoading ? (
                                <Icon
                                    name={faSpinner}
                                    size={40}
                                    rotate={true}
                                    text='Eliminando Formulario...'
                                />
                            ) : <ul style={{
                                ...centerItems('row'),
                                paddingLeft: 0,
                                gap: '1rem',
                                flexWrap: 'wrap',
                            }}>
                                {forms.map(form => (
                                    <Form
                                        key={form.id}
                                        id={form.id}
                                        nombre={form.nombre}
                                        apellido={form.apellido}
                                        causa={form.causa}
                                        otro={form.otro}
                                        deleteForm={deleteForm}
                                        edit={edit}
                                    />
                                ))}
                            </ul>}

                        </div>
                    )}

                    {
                        formsError.isError && (
                            <Icon
                                name={faCircleExclamation}
                                size={20}
                                color="red"
                                text={formsError.message}
                            />
                        )
                    }

                    {
                        deleteFormError.isError && (
                            <Icon
                                name={faCircleExclamation}
                                size={20}
                                color="red"
                                text={deleteFormError.message}
                            />
                        )
                    }
                </div>
            )}

        </div >
    )
}

export default Forms;