// react
// component
// prop type
// from react
import React, { Component, PropTypes } from 'react';
// connect state and action, from react redux
import { connect } from 'react-redux';
// one of the action
import { getAllJobs, getToken } from '../actions/jobs';

import { Profile } from './Profile';
import { Footer } from './Footer';
const config = require('../../config');

// component class item list, extends component
class JobsList extends Component {
  // when mount
  componentDidMount() {
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

    //console.log('-- this props --');
    //console.log(this.props);

    let content = '';
    let jobsDisplay = '';
    if (this.props.user !== '') {
      jobsDisplay = this.props.user.jobs.map((job, index) => {
        //console.log(job);

        return (
          <div className="card" key={ job._id }>
            <div className="card-header">
              &nbsp;
            </div>
            <div className="card-block">
              <h4 className="card-title">{ job.company.displayName }</h4>
              <p className="card-text">{ job.jobTitle }</p>
              <p className="card-text">{ job.description }</p>
              <a href={ job.company.url } className="btn btn-primary">Go</a>
            </div>
          </div>
        );
      });
    } else {

    }

    //
    const wrapperStyle = {
      background: 'url("http://stream.shopshop.space/img/header.jpg") no-repeat center',
      backgroundSize: 'cover'
    };

    const wrapperImgStyle = {
      visibility: 'hidden'
    };

    // It seems not easy to have variable to hold some html, then render.
    return (
      <div>
        <div style={ wrapperStyle }>
          <img style={ wrapperImgStyle } src="http://stream.shopshop.space/img/header.jpg" />
        </div>

        <Profile />

        { jobsDisplay }

        <Footer />
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
    fetchData: (url) => {
      dispatch(getAllJobs(url));
    }
  };
};

// now we connect attribute and method to this template.
export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
