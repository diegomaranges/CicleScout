import { arrayOfGoals, activities, arrayOfActivities } from './func'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ arrayOfGoals, activities, arrayOfActivities });

export default rootReducer;
