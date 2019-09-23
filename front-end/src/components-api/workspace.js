import React from 'react';
import { PropTypes } from 'prop-types';
import Prueba from './menus/Prueba';
//import GridUser from './grids/grid_users';
import MaterialTableDemo  from './grids/grid_users2';

const Workspace = (props) => {
    const { component, response } = props.whatRender;
    return (
        ( component === '' )  ? <Prueba/> : 
        component === 'grid_user' && <MaterialTableDemo users = { response }/>
    );

};


Workspace.propTypes = {
    component : PropTypes.string,

}

export default Workspace;