import arrayOfGoals, { arrayOfActivities } from './func'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ arrayOfGoals, arrayOfActivities });

export default rootReducer;
