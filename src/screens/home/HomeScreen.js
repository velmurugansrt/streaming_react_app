import React from 'react';
import ContentHeaderComponent from '../../components/ContentHeaderComponent';
import { APP_TEXT_CONSTANTS, SCREEN_ROUTE } from '../../common/Constants';

function HomeScreen(props) {
    var list = [
        {
            heading: APP_TEXT_CONSTANTS.SERIES,
            subHeading: APP_TEXT_CONSTANTS.POPULAR_SERIES,
            path: SCREEN_ROUTE.SERIES
        },
        {
            heading: APP_TEXT_CONSTANTS.MOVIES,
            subHeading: APP_TEXT_CONSTANTS.POPULAR_MOVIES,
            path: SCREEN_ROUTE.MOVIES

        }
    ];
    function poularCardPressed(path) {
        props.history.push(path)
    }
    return (
        <div className="home-section full-height">
            <ContentHeaderComponent title={APP_TEXT_CONSTANTS.POPULAR_TITLES} />
            <div className="body-padding content-wrap">
                {list.map((item, index) => {
                    return <div key={index} className="card-wrap" onClick={() => poularCardPressed(item.path)}>
                        <div className="card card-placeholder">
                            <h3>{item.heading}</h3>
                        </div>
                        <p>{item.subHeading}</p>
                    </div>
                })}
            </div>
        </div>
    );
}

export default HomeScreen;
