import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMenu } from './../actions';
import MenuPrincipal from './../components-api/menus/menu_principal';

const MenuBarContainer = (props) => {
    
    const setOneMenu = (args) => {
        props.setMenu(args);
    }
    
    return (
        <MenuPrincipal action={setOneMenu}></MenuPrincipal>    
    );
}

MenuBarContainer.propTypes = {
    setMenu: PropTypes.func.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setMenu : value => dispatch( setMenu(value)),
});
  
  
export default connect(null, mapDispatchToPropsActions)(MenuBarContainer);