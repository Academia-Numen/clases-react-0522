import { faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../App";
import possibleCauses from "../data";
import Checkbox from "./Checkbox";
import Icon from "./Icon";
import InputText from "./InputText";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

const errorInitialState = { isError: false, message: '' };

const NewForm = (props) => {
    const { title, refetchData } = props;
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cause, setCause] = useState('');
    const [hasFines, setHasFines] = useState(false);
    const [error, setError] = useState(errorInitialState);
    const [isLoading, setIsLoading] = useState(false);

    const sendForm = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            setError(errorInitialState);
            const payload = {
                nombre: name,
                apellido: lastName,
                causa: cause,
                otro: `El usuario ${hasFines ? '' : 'no'} tiene multas`
            }
            const res = await axios({
                method: 'post',
                url: `${BASE_URL}/forms/`,
                data: payload,
            })
            if (res.status === 201) {
                setName('');
                setLastName('');
                setCause('');
                setHasFines(!hasFines);
                refetchData();
            }
        } catch (e) {
            setError({
                isError: true,
                message: e?.message || 'Hubo un error al enviar el formulario',
            })
        } finally {
            setTimeout(() => setIsLoading(false), 1000);
        }
    }

    return (
        <div style={{ padding: '0 1rem' }}>
            {isLoading ? (
                <Icon
                    name={faSpinner}
                    size={40}
                    rotate={true}
                    text='Su formulario está siendo enviado...'
                />
            ) : (
                <form onSubmit={sendForm}>

                    <h2>{title}</h2>

                    <InputText
                        value={name}
                        changeHandler={(e) => setName(e.target.value)}
                        label="Nombre: "
                        name="name"
                    />

                    <InputText
                        value={lastName}
                        changeHandler={(e) => setLastName(e.target.value)}
                        label="Apellido: "
                        name="last-name"
                    />

                    <Select
                        name="cause"
                        value={cause}
                        changeHandler={(e) => setCause(e.target.value)}
                        label="Motivo del Reclamo: "
                        placeholder="Eliga una causa: "
                        options={possibleCauses}
                    />

                    <Checkbox
                        value={hasFines}
                        changeHandler={(e) => setHasFines(!hasFines)}
                        label="¿Posee multas?:"
                        name="fines"
                    />

                    <SubmitButton value="Enviar" />

                </form>
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
        </div >
    )
}

export default NewForm;