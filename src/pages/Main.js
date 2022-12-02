import { useState } from "react";
import { BASE_URL } from "../App";
import Forms from "../components/Forms";
import NewForm from "../components/NewForm";
import centerItems from "../globalStyles";

function Main() {
  const [editFormId, setEditFormId] = useState('');
  const [refetch, setRefetch] = useState(false);

  const refetchData = () => setRefetch(!refetch);

  const editFormData = (id) => {
    setEditFormId((prevId) => prevId === id ? '' : id);
  }

  return (
    <>

      <Forms
        refetch={refetch}
        refetchData={refetchData}
        edit={editFormData}
        url={`${BASE_URL}/forms`}
      />

      <div style={centerItems('row')}>

        <NewForm
          title="Formulario de Reclamos"
          method="post"
          refetchData={refetchData}
          url={`${BASE_URL}/forms`}
          errorMessage="Hubo un error al enviar el formulario"
          successMessage="Su formulario fue enviado exitosamente"
          loadingMessage='Su formulario está siendo enviado...'
        />

        {editFormId && (
          <NewForm
            title={`Editar Formulario N° ${editFormId}`}
            method="put"
            refetchData={() => {
              setEditFormId('');
              refetchData();
            }}
            url={`${BASE_URL}/forms/${editFormId}`}
            errorMessage="Hubo un error al editar el formulario"
            successMessage="Su formulario fue editado exitosamente"
            loadingMessage='Su formulario está siendo editado...'
          />
        )}

      </div>

    </>
  );
}

export default Main;
