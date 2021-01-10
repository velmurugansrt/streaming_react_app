import React, { useEffect, useState } from 'react';
import ContentHeaderComponent from '../../components/ContentHeaderComponent';
import { APP_TEXT_CONSTANTS, API_URL } from '../../common/Constants';
import ImageCardComponent from '../../components/ImageCardComponent';

function MoviesScreen(props) {
    return (
        <div className="home-section full-height">
            <ContentHeaderComponent title={APP_TEXT_CONSTANTS.POPULAR_MOVIES} />
            <ImageCardComponent data={'movie'} />
        </div>
    );
}

export default MoviesScreen;
