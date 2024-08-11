import React, {createContext} from 'react';
import {InitialState, UserReducer} from '../reducers/UseReducers';

export const UserContext = createContext();

export default ({Children}) => {
  return <UserContext.Provider>{Children}</UserContext.Provider>;
};
