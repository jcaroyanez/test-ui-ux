import React from 'react'
import './team-picture.css';

function TeamPicture(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
           <div className="content-avatar">
               <img  className="avatar" src={props.data.images.standard_resolution.url} alt="" onClick={() => props.openLinkImg(props.data.link)}/>     
           </div>
        </div>
    )
}

export default TeamPicture;
