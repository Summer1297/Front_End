
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Carousel from '../components/Carousel';
import SocialMediaLinks from '../components/SoicalMediaLinks';
import backgroundImage from '../assets/images/myimages05.jpeg';
import CarouselImg1 from '../assets/images/myimages02.jpeg';
import CarouselImg2 from '../assets/images/myimages03.jpeg';
import CarouselImg3 from '../assets/images/myimages04.jpeg';
import CarouselImg4 from '../assets/images/myimages06.jpeg';

function About({ setPage }) {

    const whiteSpaceStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '60rem',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
    };

    const greySpaceStyles = {
        height: '20rem',
        backgroundColor: '#333',
    };
    const images = [
        { src: CarouselImg1 },
        { src: CarouselImg2 },
        { src: CarouselImg3 },
        { src: CarouselImg4 },
    ];
    

    return (
        <>
            <Header setPage={setPage} />
            <div style={whiteSpaceStyles}>
                <div className='home-modal'>
                    <Modal openButtonText="Western Gull" onClose="close">
                        <p>When and Where to Find in Washington
                            Western Gulls are common in all seasons along the Washington coast. 
                            The northern edge of the breeding range of pure Western Gulls is at Tatoosh Island in Washington, and south of Grays Harbor, 
                            most of the gulls are pure Western Gulls. Many of the birds breeding in Grays Harbor are hybrids. The hybrid zone extends farther to the north, 
                            but not into British Columbia.
                        </p>
                    </Modal>
                </div>
            </div>
            <Carousel images={images} interval={3000} />
            <div style={greySpaceStyles}>
                <SocialMediaLinks />
            </div>
            <Footer />
        </>
    );
}

export default About;
