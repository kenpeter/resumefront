// Reducer takes care simple and single action after it fires.
// It just returns value inside the action.
// component will use it like state.reducer.xxxxx
export function jobsHaveError(state = false, action) {
  //
  switch (action.type) {
    // error
    case 'JOBS_HAVE_ERROR':
      // true or false
      return action.haveError;
    default:
      // default just returns back to state
      return state;
  }
}

export function jobsAreLoading(state = false, action) {
  //
  switch (action.type) {
    // loading
    case 'JOBS_ARE_LOADING':
      // action has loading, so true or false
      return action.areLoading;
    default:
      // ...
      return state;
  }
}

// You can see that each action corresponding one in reducer.
export function getAllJobsGood(state = '', action) {
  //
  switch (action.type) {
    // fetch data good
    case 'GET_ALL_JOBS_GOOD':
      //console.log('-- reducer, getAllJobsGood --');
      //console.log(action.jobs.user);
      //
      return action.jobs.user;
    default:
      //
      return state;
  }
}
