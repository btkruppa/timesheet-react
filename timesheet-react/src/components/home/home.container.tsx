import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { HomeComponent } from './home.component';

const mapStateToProps = (state: State, ownProps: any) => ({

});

const mapDispatchToProps = {
  
};

export const QuestionBankPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
