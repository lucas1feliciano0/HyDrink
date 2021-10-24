import {createActions, createReducer} from 'reduxsauce';

type INITIAL_STATE_PROPS = {
  cups: [];
};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    addCup: ['cup'],
  },
  {prefix: '@cups/'},
);

// Reducer

const INITIAL_STATE: INITIAL_STATE_PROPS = {
  cups: [],
};

// Handlers

export const addCup = (state = INITIAL_STATE, action: any) => {
  const cupsCopy = [...state.cups];
  cupsCopy.push(action.cup);
  return {...state, cups: cupsCopy};
};

export const HANDLERS = {
  [Types.ADD_CUP]: addCup,
};

export default createReducer(INITIAL_STATE, HANDLERS);
