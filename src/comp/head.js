import React from 'react';

class Head extends React.Component {
  render(){
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-home">
        <a className="navbar-brand" href="#">PIZZAMANIA</a>
        <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>

                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">About Pizza <span className="sr-only">(current)</span></a>

                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Pizza Types <span className="sr-only">(current)</span></a>

                </li>
            </ul>
        </div>
    </nav>
    </div>
    );
  }
};
export default Head ;
