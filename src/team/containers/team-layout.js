import React, { Component } from 'react'
import Api from '../../util/api';
import TeamPicture from '../components/team-picture';

import './team-layout.css'
class TeamLayout extends Component {
    state = { listPicture:[] };

    async componentDidMount() {
        /*load data the api*/
        this.setState({listPicture:await Api.getPituer()});
    }

    /*open link of the image in instagram*/
    openLinkImg = (link) =>{
        window.open(link,'_black');  
        return null;     
    }
    render() {
        return (
            <div className="row content-team">
              {
                 this.state.listPicture.map(picture => <TeamPicture key={picture.id} data={picture} openLinkImg={this.openLinkImg}/>)
              }  
            </div>
        )
    }
}

export default TeamLayout;
