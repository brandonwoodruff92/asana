import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import * as ModalConstants from "../constants/modal_constants";

import LoginForm from "./closed/session/login_form";
import SignupForm from "./closed/session/signup_form";

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;

  switch (modal) {
    case ModalConstants.LOGIN:
      component = <LoginForm />;
      break;
    case ModalConstants.SIGNUP:
      component = <SignupForm />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={ closeModal }>
      <div className="modal-child"onClick={ (e) => e.stopPropogation() }>
        { component }
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    modal: state.ui.modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => {
      return dispatch(closeModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
