import React from 'react';
import Banner from '../Components/Banner';
import Productivity from '../Components/Productivity';

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <div className="container w-11/12 mx-auto">
                <Productivity></Productivity>
            </div>
        </>
    );
};

export default HomePage;