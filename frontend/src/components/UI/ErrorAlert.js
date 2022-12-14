import React from 'react';

import './ErrorAlert.css';

function ErrorAlert(props) {
  return (
    <section className='error-alert'>
      <h2>Algo deu errado!</h2>
      <p>{props.errorText}</p>
    </section>
  );
}

export default ErrorAlert;
