import { faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import centerItems from '../globalStyles';
import Form from "./Form";
import useFetchData from "../hooks/useFetchData";

const Forms = (props) => {
    const { refetch, url } = props;
    const { data, isLoading, error } = useFetchData(url, refetch);

    return (
        <div style={{ padding: '0 1rem' }}>
            {isLoading ? (
                <Icon
                    name={faSpinner}
                    size={40}
                    rotate={true}
                    text='Los formularios están cargando...'
                />
            ) : (
                <div style={centerItems()}>
                    {data.length !== 0 && (
                        <div style={centerItems()}>
                            <h2>Formularios Enviados:</h2>
                            <ul style={{
                                ...centerItems('row'),
                                paddingLeft: 0,
                                gap: '1rem',
                                flexWrap: 'wrap',
                            }}>
                                {data.map(form => (
                                    <Form
                                        key={form.id}
                                        id={form.id}
                                        nombre={form.nombre}
                                        apellido={form.apellido}
                                        causa={form.causa}
                                        otro={form.otro}
                                    />
                                ))}
                            </ul>
                        </div>
                    )}

                    {
                        error.isError && (
                            <Icon
                                name={faCircleExclamation}
                                size={20}
                                color="red"
                                text={"Hubo un error"}
                            />
                        )
                    }
                </div>
            )}

        </div >
    )
}

export default Forms;