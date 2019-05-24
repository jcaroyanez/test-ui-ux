import React, { Component, Fragment } from 'react'
import NavbarLayout from './navBar/containers/nav-bar-layout';
import Footer from './footer/footer';
import TeamLayout from './team/containers/team-layout';
import TitleTeam from './team/components/title-team';

class Appcontainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <NavbarLayout />
          <TitleTeam />
          <TeamLayout />
        </div>
        <Footer/>
      </Fragment>

    )
  }
}

export default Appcontainer;
