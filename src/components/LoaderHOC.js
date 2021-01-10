import React, { useState } from 'react';

const LoaderHOC = (Component) => {
    const LoaderComponent = (props) => {
        const [isLoading, setLoading] = useState(false);
        function showloader() {
            setLoading(true)
        }
        function hideloader() {
            setLoading(false)
        }
        return <>
            {isLoading ?
                <div className="body-padding loader">
                    Loading...
            </div>
                : null}

            <Component showloader={showloader} hideloader={hideloader} {...props} />
        </>
    }
    return LoaderComponent;
}

export default LoaderHOC;
