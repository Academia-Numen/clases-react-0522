import { useState } from "react";
import InputText from "./components/InputText";

const possibleCauses = [
  { label: 'Arreglo de Luminaria', value: 'Arreglo de Luminaria' },
  { label: 'Mantenimiento Espacios Públicos', value: 'Mantenimiento Espacios Públicos' },
  { label: 'Poda y corta de Pasto', value: 'Poda y corta de Pasto' },
  { label: 'Pavimento', value: 'Pavimento' },
  { label: 'Senda Peatonal', value: 'Senda Peatonal' },
];

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cause, setCause] = useState('');
  const [hasFines, setHasFines] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    const datos = {
      nombre: name,
      apellido: lastName,
      causa: cause,
      otro: `El usuario ${hasFines ? '' : 'no'} tiene multas`
    }
    console.log('Enviar datos al Backend', datos);
  }

  return (
    <form onSubmit={sendForm}>
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

      <label htmlFor="cause">Motivo del Reclamo: </label>
      <select name="cause" defaultValue="" onChange={(e) => setCause(e.target.value)}>
        <option disabled value="">Eliga una causa: </option>
        {possibleCauses.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <label htmlFor="fines">¿Posee multas?: </label>
      <input type="checkbox" name="fines" value={hasFines} onChange={e => setHasFines(!hasFines)} />

      <input type='submit' value="Enviar" />
    </form>
  );
}

export default App;
