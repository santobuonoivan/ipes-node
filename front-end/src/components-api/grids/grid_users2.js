import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {
    const data = props.users;
    const [state, setState] = React.useState({
    columns: [
      { title: '#', field: 'id' },
      { title: 'Apellido', field: 'apellido', type: 'string' },
      { title: 'Nombre', field: 'nombre', type: 'string' },
      { title: 'DNI', field: 'DNI', type: 'numeric' },
      { title: 'Email', field: 'email', type: 'string' },
      { title: 'Perfil', field: 'perfil', type: 'string' },
    ],
    data,
  });

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
