import {combineReducers} from 'redux';

import list from './list';

const rootReducer = combineReducers({
  list,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
