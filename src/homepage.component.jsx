import React from 'react';
import './homepage.style.scss';

const HomePage = ()=> (
    <div className='hompage'>
        <div className='directory-menu'> 
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Balea Beauty Effect</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Balea AQUA</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Balea Cleansing</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Balea BodyFit</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'> 
                <div className='content'>
                    <h1 className='title'>Balea Shampoo</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;