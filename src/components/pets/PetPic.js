import React from 'react';

const PetPic = (props) => {
    const { pictureUrl } = props;
    return (
       <div className=""> <img className="ui medium image" src={pictureUrl} alt=""/></div>
    );   
}

export default PetPic;