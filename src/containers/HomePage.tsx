import MedicineList from '../components/MedicineList'
import Navbar from '../components/Navbar'
import React, { FC } from "react";
import '../style/index.css'
import Banner from '../components/Banner';

const HomePage: FC = () => {

  return (
    <div className='container'>
      <Navbar/>
      <Banner/>
      <MedicineList/>
    </div>
  );
}

export default HomePage;
