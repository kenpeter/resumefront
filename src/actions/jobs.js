// Action should be single and simple
// Tt has type and that single value.
export function jobsHaveError(bool) {
  return {
    type: 'JOBS_HAVE_ERROR',
    haveError: bool
  };
}

// A single attribute can be an action
export function jobsAreLoading(bool) {
  //
  return {
    //
    type: 'JOBS_ARE_LOADING',
    //
    areLoading: bool
  };
}

// all fetch data done
export function getAllJobsGood(jobs) {
  //console.log('-- getAllJobsGood --');
  //console.log(jobs);

  return {
    type: 'GET_ALL_JOBS_GOOD',
    jobs
  };
}

// Here we use all those single actions here.
// Dispatch them in different section.
export function getAllJobs(url) {
  //console.log('-- get all jobs --');

  // send
  // send item is loading
  return (dispatch) => {
    //console.log('-- url --');
    //console.log(url);

    // it is loading
    dispatch(jobsAreLoading(true));

    //
    fetch(url)
      .then((response) => {
        // not ok
        if (!response.ok) {
          // throw error
          throw Error(response.statusText);
        }

        // else not loading
        dispatch(jobsAreLoading(false));

        //console.log('-- res --');
        //console.log(response.json());

        return response;
      })
      .then((response) => response.json()) // now we get response
      .then((jobs) => {
        // response.json is promise....
        //console.log('-- jobs --');
        //console.log(jobs);
        dispatch(getAllJobsGood(jobs));
      })
      .catch(() => dispatch(jobsHaveError(true)));
    };
}
