
import ContentComponent from '../components/ContentComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function AppRoute() {
    return (
        <div className="main-app">
            <HeaderComponent />
            <ContentComponent />
            <FooterComponent />
        </div>
    );
}

export default AppRoute;
