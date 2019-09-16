import React from 'react';
import { PropTypes } from 'prop-types';
import Prueba from './menus/Prueba';
import GridUser from './grids/grid_users';

const Workspace = (props) => {

    const { component, response } = props.whatRender;

    return (
        ( component === '' ) ? <Prueba/> : 
        ( component === 'grid_user' ) ? <GridUser users = { response }/> : null
    );

};


Workspace.propTypes = {
    whatRender : PropTypes.string.isRequired,

}

export default Workspace;