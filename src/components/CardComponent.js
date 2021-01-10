import React from 'react';
import ContentHeaderComponent from '../../components/ContentHeaderComponent';
import { APP_TEXT_CONSTANTS } from '../../common/Constants';

function CardComponent(props) {
    return (
        <div className="card-wrap">
            <div className="card">
                <h3>{props.heading}</h3>
            </div>
            <p>{APP_TEXT_CONSTANTS.POPULAR_SERIES}</p>
        </div>
    );
}

export default CardComponent;
