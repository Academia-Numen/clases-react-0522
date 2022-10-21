import Lista from "./components/Lista";

function App() {

  // PROX CLASE: Formulario de Reclamo

  const electrodomesticos = [
    { nombre: 'Heladera', precio: 200000, color: 'Blanca' },
    { nombre: 'Lavarropas', precio: 80000, color: 'Blanco' },
    { nombre: 'Freezer', precio: 120000, color: 'Gris' },
    { nombre: 'Microondas', precio: 50000, color: 'Negro' },
    { nombre: 'Cocina', precio: 75000, color: 'Negro' },
    { nombre: 'Cocina x', precio: 75000, color: 'Negro' },
  ];

  const eventHandler = (event) => {
    console.log('Evento', event);
    console.log('Target', event.target);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const flexStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const styles = {
    div1: {
      ...flexStyles,
      backgroundColor: 'red',
      width: 400,
      height: 400,
    }, 
    div2: {
      ...flexStyles,
      backgroundColor: 'yellow',
      width: 300,
      height: 300,
    },
    div3: {
      ...flexStyles,
      backgroundColor: 'blue',
      width: 200,
      height: 200,
    }
  }

  function cambiarFondo(e) {
    e.target.style.background = 'green'
  }

  function detenerLaPropagacion(e) {
    e.stopPropagation();
  }

  return (
    <>
      <div style={styles.div1} onClick={cambiarFondo}>
        <div style={styles.div2} onClick={detenerLaPropagacion}>
          <div style={styles.div3}>
            <button>Press</button>
          </div>
        </div>
      </div>

      <form onSubmit={submitHandler}>
        <input type="text" />
        <input type="submit" value="Enviar" />
      </form>

      <button onClick={eventHandler}>Presione</button>
      <Lista items={electrodomesticos} title="Lista de Electrodomésticos">
        <h2>CHILDREN</h2>
      </Lista>
    </>
  );
}

export default App;
