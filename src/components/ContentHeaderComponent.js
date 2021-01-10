import React from 'react';
import { APP_TEXT_CONSTANTS } from '../common/Constants';

function ContentHeaderComponent(props) {
    return (
        <div className="body-padding content-header-wrap">
            <h4>
                {props.title}
            </h4>
        </div>
    );
}

export default ContentHeaderComponent;
