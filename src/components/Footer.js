import React, { Component } from 'react';

// component class item list, extends component
export class Footer extends Component {
  render() {
    const footerStyle = {
      marginTop: '20px'
    };

    return (
      <div className="card">
        <div className="card-block text-nowrap text-center">
          @copy XYZ all right reserved
        </div>
      </div>
    );
  }
}
