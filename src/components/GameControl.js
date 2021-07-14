import React from 'react';
// import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import CardList from './CardList';
import Card from './Card';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
    };
  }

  whenCardClicked = value => {
    if (this.state.selectedCard !== null && this.state.isDiscarded !== false) {
      this.setState({
        selectedCard: null,
      });
    } else {
      this.props.firestore.get({ collection: 'deck', doc: value }).then(card => {
        const firestoreCard = {
          value: card.get('value'),
          cardRule: card.get('cardRule'),
          isDiscarded: card.get('isDiscarded'),
          cardImg: card.get('cardImg'),
        };
        this.setState({ selectedCard: firestoreCard });
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.selectedCard != null) {
      currentlyVisibleState
        = <Card
          card={this.state.selectedCard}
        />;
    } else {
      currentlyVisibleState
        = <CardList
          whenCardClicked={this.whenCardClicked}
        />;
    }
    return (
      <>
        {currentlyVisibleState}
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   selectedCard: state.selectedCard,
// });

// eslint-disable-next-line no-class-assign
// GameControl = connect(mapStateToProps)(GameControl);

export default withFirestore(GameControl);
