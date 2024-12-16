import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import CardGroup from '../components/CardGroup';
import SocialMediaLinks from '../components/SoicalMediaLinks';
import '../assets/css/Home.css';
import backgroundImage from '../assets/images/myimages07.jpeg';

function Home({ setPage }) {

  const whiteSpaceStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '45rem',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  };

  const whiteCard = {
    height: '38rem',
    padding: '3.5rem',
    backgroundColor: 'white',
  };

  return (
    <>
      <title>Journey</title>
      <Header setPage={setPage} />
      <div style={whiteSpaceStyles}>
        <h1>Travel to Seattle</h1>
        <div className='home-modal'>
          <Modal openButtonText="Explore" onClose="close">
            <p>Waterfront Park is a public park on the Central Waterfront, Downtown, Seattle, Washington, USA. 
              Designed by the Bumgardner Partnership and consultants, it was constructed on the site of the former Schwabacher Wharf.
              Address: 1401 Alaskan Wy, Seattle, WA 98101
            </p>
          </Modal>
        </div>
      </div>
      <div style={whiteCard}>
        <CardGroup />
      </div>
      <div className='grey-footer'>
        <SocialMediaLinks />
      </div>
      <Footer />
    </>
  );
}

export default Home;
