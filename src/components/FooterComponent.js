import React from 'react';
import { MENU_LIST } from '../common/Constants';
import FacebookWhite from '../assets/images/social/facebook-white.svg';
import InstagramWhite from '../assets/images/social/instagram-white.svg';
import twitterWhite from '../assets/images/social/twitter-white.svg';


import AppStore from '../assets/images/store/app-store.svg';
import PlayStore from '../assets/images/store/play-store.svg';
import WindowsStore from '../assets/images/store/windows-store.svg';

// app-store.svg

function FooterComponent() {
    const socialMediaIcon = [
        FacebookWhite,
        twitterWhite,
        InstagramWhite
    ];
    const appStoreIcon = [
        AppStore,
        PlayStore,
        WindowsStore
    ];

    return (
        <div className="footer body-padding">
            <span>
                {MENU_LIST.map((item, index) => {
                    return <div key={index} className={`menu-item`}>
                        {item}
                    </div>;
                })}
            </span>
            <br />
            <p>copyright 2016 DEMO streaming. All Rights Reserved.</p>
            <div className="icon-wrap">
                <div className="social-icon-wrap footer-flex-center">
                    {socialMediaIcon.map((item, index) => {
                        return <img key={index} src={item} className="social-media-icon" />
                    })}
                </div>
                <div className="social-icon-wrap footer-flex-center">
                    {appStoreIcon.map((item, index) => {
                        return <img key={index} src={item} className="appstore-icon" />
                    })}
                </div>
            </div>
        </div >
    );
}

export default FooterComponent;
