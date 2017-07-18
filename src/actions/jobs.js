const config = require('../../config');

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


// get token
export function getToken(url) {
  return new Promise((resolve, reject) => {
    const body = {
      username: config.backendUsername,
      password: config.backendPassword
    };

    //console.log('-- getToken --');
    //console.log(url);
    //console.log(body);

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then((res) => {
      //console.log('-- getToken res --');
      //console.log(res.token);

      resolve(res.token);
    })
    .catch((err) => {
      console.log('-- getToken error!!!!!! --');
      console.log(err);

      reject(err);
    })
  });
}

// Here we use all those single actions here.
// Dispatch them in different section.
export function getAllJobs(url, accessToken) {
  //console.log('-- get all jobs --');

  // send
  // send item is loading
  return async (dispatch) => {
    // it is loading
    dispatch(jobsAreLoading(true));

    const accessToken = await getToken(config.backendAuthUrl);
    /*
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk1YWZiMWY3NWNkM2Y3ZmI2MDE0ZjA5Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiam9icyI6ImluaXQiLCJjcmVhdGVkQXQiOiJpbml0IiwidXBkYXRlZEF0IjoiaW5pdCIsIl9fdiI6ImluaXQiLCJhZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJ1c2VybmFtZSI6ImluaXQiLCJkaXNwbGF5TmFtZSI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsImpvYnMiOnRydWUsImNyZWF0ZWRBdCI6dHJ1ZSwidXBkYXRlZEF0Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJkaXNwbGF5TmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwicGF0aHNUb1Njb3BlcyI6e30sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJqb2JzIjpbIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwMCIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwMSIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwMiIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwMyIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwNCIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwNSIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwNiIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwNyIsIjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwOCJdLCJjcmVhdGVkQXQiOiIyMDE3LTA3LTA0VDAyOjE5OjExLjA2MloiLCJ1cGRhdGVkQXQiOiIyMDE3LTA3LTA0VDAyOjE5OjExLjA2MloiLCJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6InBhc3N3b3JkIiwidXNlcm5hbWUiOiJrZW5wZXRlciIsImRpc3BsYXlOYW1lIjoiR2FyeSBMaWFuZyIsIl9pZCI6IjU5NWFmYjFmNzVjZDNmN2ZiNjAxNGYwOSJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTAwMjY5MDQ4LCJleHAiOjE1MDAzNTU0NDh9.6sCrWFFr_BVpRNX5OfOgc7R32VYgM6CAMx1SnpMYnH4';
    */
    const localUrl = url + `?token=${accessToken}`;

    fetch(localUrl)
      .then(response => {
        // not ok
        if (!response.ok) {
          if(response.status === 403) {
            // access denied, get token first
            console.log('-- 403, need to get token --');
            return;
          }

          // throw error
          console.log('throw error');
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
