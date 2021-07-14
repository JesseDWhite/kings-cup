/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <>

      <div
        role='presentation'
        onKeyDown={() => props.whenCardClicked(props.value)}
        onClick={() => props.whenCardClicked(props.value)}
      >
        <h2>{props.id}:</h2>
        <br />
        <h3>Rule: {props.rule}</h3>
      </div>
    </>
  );
}

Card.propTypes = {
  value: PropTypes.number.isRequired,
  rule: PropTypes.string.isRequired,
  whenCardClicked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
