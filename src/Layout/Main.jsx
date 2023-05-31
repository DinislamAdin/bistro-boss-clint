import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer/Footer';
import Navbar from '../Pages/Sheard/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHearerFooter = location.pathname.includes('login') ||  location.pathname.includes('signUp');
    return (
        <div>
            {noHearerFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHearerFooter|| <Footer></Footer>}
        </div>
    );
};

export default Main;