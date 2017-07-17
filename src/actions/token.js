export function tokenHasError(bool) {
  // return part of state and cap type
  return {
    type: 'TOKEN_HAS_ERROR',
    // true or false
    hasError: bool
  };
}

//
export function tokenIsLoading(bool) {
  //
  return {
    //
    type: 'TOKEN_IS_LOADING',
    //
    isLoading: bool
  };
}

// all fetch data done
export function getTokenGood(token) {
  return {
    type: 'GET_TOKEN_GOOD',
    token
  };
}

//
export function getAToken(url) {
  //
  return (dispatch) => {
    // it is loading
    dispatch(tokenIsLoading(true));
    //
    fetch(url)
      .then((response) => {
        // not ok
        if (!response.ok) {
          // throw error
          throw Error(response.statusText);
        }

        // else not loading
        dispatch(tokenIsLoading(false));

        // return response
        return response;
      })
      .then((response) => response.json()) // now we get response
      .then((token) => dispatch(getTokenGood(token))) // does it mean can keep chaining .them, see above
      .catch(() => dispatch(tokenHasError(true)));
    };
}
