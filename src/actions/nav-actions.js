import { SELECT_TAB } from './action-types';

export const selectTab = ( index ) => ({
  type: SELECT_TAB,
  index
});