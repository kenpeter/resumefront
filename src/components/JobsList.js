// react
// component
// prop type
// from react
import React, { Component, PropTypes } from 'react';
// connect state and action, from react redux
import { connect } from 'react-redux';
// one of the action
import { getAllJobs } from '../actions/jobs';

const config = require('../../config');

// component class item list, extends component
class JobsList extends Component {
    // when mount
    componentDidMount() {
      // where this fetch data
      this.props.fetchData(config.backendUserDataUrl);
    }

    //
    render() {
      // error
      if (this.props.haveError) {
        return <p>Sorry! Fetching jobs have error.</p>;
      }

      // loading
      if (this.props.areLoading) {
        return <p>Loading....</p>;
      }

      console.log('-- this props --');
      console.log(this.props);

      let content = '';
      let jobsDisplay = '';
      if (this.props.user !== '') {
        jobsDisplay = this.props.user.jobs.map((job, index) => {
          //console.log('-- job --');
          //console.log(job.jobTitle);
          return (
            <li key={job._id}>
              { job.jobTitle }<br/>
              { job.company.displayName }<br/>
              { job.description }
            </li>
          );
        });
      } else {

      }

      // It seems not easy to have variable to hold some html, then render.
      return (
        <div>
          <p>
            { this.props.user.displayName }
          </p>
          <ul>
            { jobsDisplay }
          </ul>
        </div>
      );
    }
}

// Basically, this is attribute.
// map state means use part of state as attribute
// then display in front end.
const mapStateToProps = (state) => {

  //console.log('-- mapStateToProps --');
  //console.log(state);
  //console.log(state.getAllJobsGood);
  //console.log(state.jobsHaveError);
  //console.log(state.jobsAreLoading);

  // state
  return {
    // state has items
    user: state.getAllJobsGood,
    // state has error
    haveError: state.jobsHaveError,
    // state has loading
    areLoading: state.jobsAreLoading
  };
};

// Basically, this is method
// we map dispatch(action) in internal attribute
// so we can fire any time.
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(getAllJobs(url))
  };
};

// now we connect attribute and method to this template.
export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
