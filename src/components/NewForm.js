import { faCircleCheck, faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import possibleCauses from "../data";
import useFormSubmission from "../hooks/useFormSubmission";
import Checkbox from "./Checkbox";
import Icon from "./Icon";
import InputText from "./InputText";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

const NewForm = (props) => {
    const {
        title,
        method,
        refetchData,
        url,
        errorMessage,
        successMessage,
        loadingMessage,
    } = props;
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cause, setCause] = useState('');
    const [hasFines, setHasFines] = useState(false);

    const emptyState = () => {
        setName('');
        setLastName('');
        setCause('');
        setHasFines(!hasFines);
    }

    const payload = {
        nombre: name,
        apellido: lastName,
        causa: cause,
        otro: `El usuario ${hasFines ? '' : 'no'} tiene multas`
    };

    const { submitHandler, isLoading, error, success } = useFormSubmission(
        url,
        method,
        refetchData,
        payload,
        emptyState,
        errorMessage,
        successMessage,
        loadingMessage,
    )

    return (
        <div style={{ padding: '0 1rem' }}>
            {isLoading.isLoading ? (
                <Icon
                    name={faSpinner}
                    size={40}
                    rotate={true}
                    text={isLoading.message}
                />
            ) : (
                <form onSubmit={submitHandler}>

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
                        text={error.message}
                    />
                )
            }

            {
                success.wasSent && (
                    <Icon
                        name={faCircleCheck}
                        size={20}
                        color="green"
                        text={success.message}
                    />
                )
            }
        </div >
    )
}

export default NewForm;