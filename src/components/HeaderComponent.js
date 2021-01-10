import React from 'react';
import { APP_TEXT_CONSTANTS, SCREEN_ROUTE } from '../common/Constants';

function HeaderComponent(props) {
    return (
        <div className="header-wrap">
            <div className="body-padding container-body">
                <div className="left-section header-flex-center">
                    <a href={"/"} className="home-link">{APP_TEXT_CONSTANTS.HEADER_TITLE}</a>
                </div>
                <div className="right-section header-flex-center">
                    <h6>
                        {APP_TEXT_CONSTANTS.LOGIN}
                    </h6>
                    <button className="strail-btn">
                        {APP_TEXT_CONSTANTS.START_YOUR_FREE_TRAIL}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
