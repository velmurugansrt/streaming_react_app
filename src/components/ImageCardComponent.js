
import React, { useState, useEffect } from 'react';
import { API_URL } from '../common/Constants';
import { placeRequest } from '../utils/ApiCommunicator';
import LoaderHOC from './LoaderHOC';

function ImageCardComponent(props) {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        jsonFetch();
    }, []);

    function jsonFetch() {
        props.showloader();
        placeRequest(API_URL.jsonFile, (response) => {
            props.hideloader();
            if (!response.error) {
                var allData = response.data.entries;
                var filterData = allData.filter(item => item.releaseYear >= 2010 && item.programType == props.data).slice(0, 21);
                filterData.sort((a, b) => {
                    return (a.title).localeCompare(b.title);
                });
                setData(filterData);
            } else {
                setErrorMessage(response.message);
            }
        })
    }

    return (<div className="body-padding image-content-wrap">
        {data.length ? data.map((item) => {
            return <div className="image-card" >
                <img src={item.images['Poster Art'].url} className="card-image" />
                <p>{item.title}</p>
            </div>
        }) :
            errorMessage
        }
    </div>
    );
}

export default LoaderHOC(ImageCardComponent);
