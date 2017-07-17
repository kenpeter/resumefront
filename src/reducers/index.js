// combine all reducers from reducer
import { combineReducers } from 'redux';
// custom reducers
// those reducers are like global vars
import { jobsHaveError, jobsAreLoading, getAllJobsGood } from './jobs';

// export default
// combine reducers
export default combineReducers({
  jobsHaveError,
  jobsAreLoading,
  getAllJobsGood
});
