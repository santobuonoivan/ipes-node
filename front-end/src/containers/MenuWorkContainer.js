import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setWhatRender } from './../actions';
import MenuSecundary from './../components-api/menus/menu_secundary';
import { getMenu } from './../reduces';

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
    dispatchSetWhatRender: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
    setWhatRender : component => dispatch( setWhatRender(component)),
});

const mapStateToProps = state => ({ menu: getMenu(state) });
  
export default connect( mapStateToProps, mapDispatchToProps)(MenuWorkContainer);
