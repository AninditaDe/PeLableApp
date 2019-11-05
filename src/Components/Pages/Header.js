import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PeLableNav from "./PeLableNav"

class Header extends React.Component {
  render() {
    return (
      <div>
        <header class="app-header navbar">
          <PeLableNav />
        </header>
      </div>
    )
  }
}


export default Header