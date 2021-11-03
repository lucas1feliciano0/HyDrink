import {createActions, createReducer} from 'reduxsauce';

export type Cup = {
  created_at: string;
};

type INITIAL_STATE_PROPS = {
  cups: Cup[];
};

// Types & Creators

export const {Types, Creators} = createActions(
  {
    addCup: ['cup'],
    removeCup: [],
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

export const removeCup = (state = INITIAL_STATE) => {
  const cupsCopy = [...state.cups];

  cupsCopy.pop();

  return {...state, cups: cupsCopy};
};

export const HANDLERS = {
  [Types.ADD_CUP]: addCup,
  [Types.REMOVE_CUP]: removeCup,
};

export default createReducer(INITIAL_STATE, HANDLERS);
