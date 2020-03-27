import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// here we are getting the alert part of the entire state tree and passing it as props to the Alert component. alerts is then being destructured above and used in the component
const mapStateToProps = state => ({
  alerts: state.alert
});

// connect takes in mapStateToProps and an action. Everytime you need to read something from redux, you need to use connect
export default connect(mapStateToProps)(Alert);