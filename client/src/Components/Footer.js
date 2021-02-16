import React, { Component } from 'react';
import '../Assets/SASS/footer.scss';

export default class Footer extends Component {
  render() {
    var date = new Date();
    var year = date.getFullYear();
    return (
      <div className="Footer">
        <div className="footer-container">
          <p className="copyright">Copyright &copy; 2020-{year}. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}