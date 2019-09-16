import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Workspace from './../components-api/workspace';

const WorkspaceContainer = (props) => {
    //console.log(props);
    return (
        
        <Workspace 
            whatRender= { props.whatRender }/* traer el estado menu seleccionado {this.state.menuSeleccionado}*/
            response= { props.response } /* traer el estado menu seleccionado {this.state.getWhatRender}*//>
    );
}


WorkspaceContainer.propTypes = {
    whatRender: PropTypes.string.isRequired,
};

//const mapStateToProps = ({ whatRender, response }) => ({ whatRender, response });

const mapStateToProps = state =>{
    return {
        whatRender: state.whatRender,
        response: state.response
    }
}
/*
const mapDispatchToPropsActions = dispatch => ({
    setWhatRender : value => dispatch( setWhatRender(value)),
});*/
  
  
export default connect( mapStateToProps, null)(WorkspaceContainer);