import React from "react";
import { connect } from "react-redux";
import logo from '../assets/images/SteelDemonLogo.png';

const Portal = props => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100vw',
        height: '100vh',
      }}>

      <header style={{textAlign: 'center'}}>
        <div style={{margin: '0 auto', width: 150, padding: '10px 20px', backgroundColor: '#ffffff', borderRadius: '50%'}}><img src={logo} alt="Cryptools by SteelDemon" style={{width: '100%', maxWidth: 100}}/></div>
        <h1>Welcome to Cryptools!</h1>
				<h5>Awesome features coming soon...</h5>
      </header>

      
    </div>
  );
};

const mapStateToProps = state => {
  return {    
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portal);
