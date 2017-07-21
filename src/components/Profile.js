import React, { Component } from 'react';

// component class item list, extends component
export class Profile extends Component {
  //
  render() {
    // It seems not easy to have variable to hold some html, then render.
    return (
      <div className="card">
        <div className="card-header">
          &nbsp;
        </div>
        <div className="card-block">
          <h4 className="card-title">Gary Liang</h4>
          <p className="card-text">Full stack developer</p>
          <ul>
            <li>PHP, MySQL, Postgresql, Oracle, Apache, Nginx.</li>
            <li>Nodejs, Webpack, Requirejs, a bit of React, Redux, Vuejs, Vuex, Mongo, Express</li>
            <li>Laravel, CodeIgniter, Drupal 7/8, Magento</li>
            <li>AWS, Digital Ocean, Ubuntu, Redhat, Centos</li>
            <li>Arduino, MQTT, ESP8266 (WiFi chip) for Thermostat and WiFiHub.</li>
            <li>Rest API, CSS, SASS</li>
            <li>A bit of C# and Windows Server.</li>
          </ul>

          <div className="card-text">
            Extra:
            <ul>
              <li>Side projects: https://goo.gl/4Ancwa</li>
              <li>Github: https://github.com/kenpeter</li>
              <li>Linkedin: https://www.linkedin.com/in/thegaryliang</li>
            </ul>
          </div>

          <div className="card-text">
            <p>About this resume: </p>
            <ul>
            <li>
              Buy a domain name from namecheap.com. It costs like $1.
            </li>
              <li>
                I rent a $20/month Ubuntu server on vpsdime.com. It is cheap and good.
                <ul>
                  <li>4 CPUs</li>
                  <li>12G Memory</li>
                  <li>60G SSD</li>
                </ul>
              </li>
              <li>
                On the Ubuntu, I installed Nginx, MongoDB, NVM, Node 8.1.4, Letsencrypt, Forever, Yarn
              </li>
              <li>The backend for this resume is: Express, MongoDB with 3 collections, JWT, Use async/await</li>
              <li>The front end for this resume is: React and Redux. Use async/await</li>
              <li>
                There are many tutorials on the Internet talking about how to create a frontend or backend, but not both.
                I hope this project gives you some idea on building a site from buying a domain name running backend and frontend successfully.
                More detail checkout the source code below.
              </li>
              <li>
                Backend souce code here: https://github.com/kenpeter/resumeback
              </li>
              <li>
                Frontend source code here: https://github.com/kenpeter/resumefront
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
