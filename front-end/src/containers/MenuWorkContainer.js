import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setWhatRender } from './../actions';
import MenuSecundary from './../components-api/menus/menu_secundary';

const MenuWorkContainer = (props) => {

    const setSomethingToRender = (response) => {
      props.setWhatRender(response);
    }
    //console.log(props)

    return (
        props.menu &&
        <MenuSecundary 
            menu= { props.menu }/* traer el estado menu seleccionado {this.state.menuSeleccionado}*/
            whatRender= { setSomethingToRender } /* traer el estado menu seleccionado {this.state.getWhatRender}*//>
    );
}


MenuWorkContainer.propTypes = {
    menu: PropTypes.object.isRequired,
    setWhatRender: PropTypes.func.isRequired,
};

const mapStateToProps = ({ menu }) => ({ menu });

const mapDispatchToPropsActions = dispatch => ({
    setWhatRender : value => dispatch( setWhatRender(value)),
});
  
  
export default connect( mapStateToProps, mapDispatchToPropsActions)(MenuWorkContainer);
