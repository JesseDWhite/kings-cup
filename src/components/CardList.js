/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Card from './Card';

function CardList(props) {
  const deck = useSelector(state => state.firestore.ordered.deck);

  useFirestoreConnect([
    {
      collection: 'deck',
    },
  ]);
  if (isLoaded(deck)) {
    return (
      <>
        <hr />
        {deck.map(card => {
          return <Card
            whenCardClicked={props.onCardSelection}
            cardImg={card.cardImg}
            cardRule={card.cardRule}
            isDiscarded={card.isDiscarded}
            value={card.value}
            id={card.id}
            key={card.id}
          />;
        })}
      </>
    );
  }
  return (
    <>
      <h3>Loading...</h3>
    </>
  );
}

CardList.propTypes = {
  onCardSelection: PropTypes.func,
};

export default CardList;
