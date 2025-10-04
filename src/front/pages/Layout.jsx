import { Outlet} from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { NavbarNasa } from "../components/NavbarNasa"
import { Footer } from "../components/Footer"
import { HomePage } from "./HomePage.jsx"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <NavbarNasa />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}