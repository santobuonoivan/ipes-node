import React from 'react';
import {Table} from 'react-bootstrap';

const GridUser = (props) => {
    const {users} = props;
 console.log(users);
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>DNI</th>
                    <th>Email</th>
                    <th>Perfil</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( (user,i) => (
                        <tr>
                            <td>{i}</td>
                            <td>{user.apellido}</td>
                            <td>{user.nombre}</td>
                            <td>{user.dni}</td>
                            <td>{user.email}</td>
                            <td>{user.perfil}</td>
                        </tr>
                    ))
                }            
            </tbody>
        </Table>
    );
}

export default GridUser;