import Lista from "./components/Lista";

function App() {

  const electrodomesticos = [
    { nombre: 'Heladera', precio: 200000, color: 'Blanca' },
    { nombre: 'Lavarropas', precio: 80000, color: 'Blanco' },
    { nombre: 'Freezer', precio: 120000, color: 'Gris' },
    { nombre: 'Microondas', precio: 50000, color: 'Negro' },
    { nombre: 'Cocina', precio: 75000, color: 'Negro' },
    { nombre: 'Cocina x', precio: 75000, color: 'Negro' },
  ];

  const dolares = [
    { nombre: 'Heladera', precio: 200000, color: 'Blanca' },
    { nombre: 'Lavarropas', precio: 80000, color: 'Blanco' },
    { nombre: 'Freezer', precio: 120000, color: 'Gris' },
    { nombre: 'Microondas', precio: 50000, color: 'Negro' },
    { nombre: 'Cocina', precio: 75000, color: 'Negro' },
    { nombre: 'Cocina x', precio: 75000, color: 'Negro' },
  ];

  return (
    <>
      <Lista items={electrodomesticos} title="Lista de Electrodomésticos" />
      <Lista items={dolares} title="Lista de Dolares" />
    </>
  );
}

export default App;
