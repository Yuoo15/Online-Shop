// src/pages/MainPage.jsx
import Header from '../components/header_component/header/Header'
import Heading from '../components/Main_component/glavnya/heading'
import Products from '../components/Main_component/section-products/products'
import Benefits from '../components/Main_component/section-benefits/benefits'
import Otz from '../components/Main_component/otzyv/otz'
import Popular from '../components/Main_component/Section-popular/popular'
import Footer from '../components/footer_component/footer'

export default function MainPage() {
    return (
        <>
        <Header />
        <Heading />
        <Products />
        <Benefits />
        <Otz />
        <Popular />
        <Footer />
        </>
    );
}
