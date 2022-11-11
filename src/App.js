import { faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Form from "./components/Form";
import Icon from "./components/Icon";
import InputText from "./components/InputText";
import Select from "./components/Select";
import SubmitButton from "./components/SubmitButton";
import possibleCauses from "./data";

const BASE_URL = 'http://localhost:8000';

const errorInitialState = { isError: false, message: '' };

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cause, setCause] = useState('');
  const [hasFines, setHasFines] = useState(false);
  const [error, setError] = useState(errorInitialState);
  const [isLoading, setIsLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    console.log('Se envió el formulario?', refetch);
  }, [refetch]);

  useEffect(() => {
    setTimeout(() => console.log('Aceptas todas las coockies?'), 1000);
  }, []);

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
        setRefetch(!refetch);
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
    <div>
      {isLoading ? (
        <Icon
          name={faSpinner}
          size={40}
          rotate={true}
          text='Su formulario está siendo enviado...'
        />
      ) : (
        <>
          {error.isError && (
            <Icon
              name={faCircleExclamation}
              size={20}
              color="red"
              text={"Hubo un error"}
            />
          )}

          <Form send={sendForm}>
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
          </Form>
        </>
      )}
    </div>
  );
}

export default App;
