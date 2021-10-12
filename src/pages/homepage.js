import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../components/navbar';
import FooterComp from '../components/footer';
import Title from '../components/titleComponent';
import SearchAvailablity from '../components/availability';
import Gallery from '../components/gallery';
import PackageCard from '../components/packageCard';
import { useState } from 'react';
const Layout = () => {


  return (
    <>
      <div className="">
        <div className="nav-comp">
          <NavbarComp />

        </div>

        <Title />
        <SearchAvailablity />
        <Gallery />
        <PackageCard />
        <FooterComp />
      </div>
    </>
  );
}

export default Layout;
