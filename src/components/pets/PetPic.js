import React from 'react';

const PetPic = (props) => {
    const { pictureUrl } = props;
    return (
        <img className="ui medium image" src={pictureUrl} alt=""/>
    );   
}

export default PetPic;