import React from 'react';

import "./Buttons.scss";

const Button = props => {

  const { photosLength } = props;

  return (
    <div className="buttonsContainer">
      <button className="returnButton">Voltar</button>
      {photosLength > 0 && <button className="finishButton">Concluir</button>}
    </div>
  );
}

export default Button;
