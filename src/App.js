
function App() {

  const numeroDeClase = 2;
  const clases = {
    contenedor: 'container'
  }

  return (
    <div className={clases.contenedor}>
      Bienvenidos a la clase: {numeroDeClase}
    </div> 
  );
}

export default App;
