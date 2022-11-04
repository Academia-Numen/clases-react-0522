
// PROX CLASE: Formulario de Reclamo

import { useState } from "react";

function Button(props) {
  const { nombre, onClick } = props;
  return (
    <button onClick={onClick}>{nombre}</button>
  );
}

function Counter() {
  const [count, setCount] = useState(() => 0);

  const sumar = () => setCount((prevState) => prevState + 1);
  const restar = () => setCount((prevState) => prevState - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1>{count}</h1>
      <Button onClick={sumar} nombre='Sumar'/>
      <Button onClick={restar} nombre='Restar'/>
      <Button onClick={reset} nombre='Reset'/>
    </>
  );
}

export default Counter;
