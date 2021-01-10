import React, { useState, useEffect } from 'react';
import ContentHeaderComponent from '../../components/ContentHeaderComponent';
import placeholder from '../../assets/images/placeholder.png';
import { APP_TEXT_CONSTANTS, API_URL } from '../../common/Constants';
import ImageCardComponent from '../../components/ImageCardComponent';
import { placeRequest } from '../../utils/ApiCommunicator';

function SeriesScreen(props) {
    return (
        <div className="home-section full-height">
            <ContentHeaderComponent title={APP_TEXT_CONSTANTS.POPULAR_SERIES} />
            <ImageCardComponent data={'series'} />
        </div>
    );
}

export default SeriesScreen;
