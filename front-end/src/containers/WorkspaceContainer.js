import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Workspace from './../components-api/workspace';

const WorkspaceContainer = (props) => {
    const { whatRender } = props || '';
    
    return (
        <Workspace 
            whatRender= { whatRender }/* traer el estado menu seleccionado {this.state.menuSeleccionado}*/
            /* traer el estado menu seleccionado {this.state.getWhatRender}*//>
    );
}


WorkspaceContainer.propTypes = {
    whatRender: PropTypes.object,
};

const mapStateToProps = ({ whatRender }) => ({ whatRender });

/*
const mapDispatchToPropsActions = dispatch => ({
    setWhatRender : value => dispatch( setWhatRender(value)),
});*/
  
  
export default connect( mapStateToProps, null)(WorkspaceContainer);