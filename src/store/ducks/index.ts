import {combineReducers} from 'redux';

import drinks from './drinks';

const rootReducer = combineReducers({
  drinks,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
