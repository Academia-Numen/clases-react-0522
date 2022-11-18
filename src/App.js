import { useState } from "react";
import Forms from "./components/Forms";
import NewForm from "./components/NewForm";
import useFetchData from "./hooks/useFetchData";

export const BASE_URL = 'http://localhost:8000';

function App() {
  const [refetch, setRefetch] = useState(false);

  const { data, isLoading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts/1', refetch);

  const refetchData = () => setRefetch(!refetch);

  return (
    <div>
      {isLoading ? <p>Esta cargando...</p> :
        <div>
          {error.isError && <p>{error.message}</p>}
          {data.length !== 0 && JSON.stringify(data)}
        </div>
      }

      <Forms 
        refetch={refetch}
        url={`${BASE_URL}/forms`}
      />

      <NewForm 
        title="Formulario de Reclamos" 
        refetchData={refetchData}
      />
    </div>
  );
}

export default App;
