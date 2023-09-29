import React, {useState} from 'react';
import './App.css';
import ArtworkCard from './ArtworkCard';
import instagramIcon from './images/insta.png';
import linkedinIcon from './images/linkedin.png';
import image1 from './images/a (1).jpg';
import image2 from './images/a (2).jpg';

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [language, setLanguage] = useState('en');

  const artworks = [
    {
      titleEN: 'Detailphoto 1',
      titleNL: 'Detailfoto 1',
      descriptionEN: 'The hands you see in this image portray the ....',
      descriptionNL: 'De handen die je in deze afbeelding ziet verbeelden de ...',
      imageUrl: image1
    },
    {
      titleEN: 'Detailphoto 2',
      titleNL: 'Detailfoto 2',
      descriptionEN: 'The roots of the tree symbolize the...',
      descriptionNL: 'De wortels van de boom symboliseren de ...',
      imageUrl: image2
    },
  ];
  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseDetail = () => {
    setSelectedArtwork(null);
  };

  const handleLanguageSwitch = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'nl' : 'en');
  };

  return (
      <div className="App">
        <div className="Header">
          <div className="LanguageSwitch">
            <button onClick={handleLanguageSwitch}>
              {language === 'en' ? '🇳🇱 Nederlands' : '🇬🇧 English'}
            </button>
          </div>
          <h1 className="Title">
            Yu kon na sey lanki fu mi pranasi, ma yu no doro na mi lanpe.
          </h1>
          <div className="Divider"></div>
          <h2 className="Subtitle">
            { language === 'en' ?
                "You passed by my plantation, but you didn't actually set foot on land."
                :
                'Je bent langs mijn plantage gekomen, maar hebt niet werkelijk voet aan wal gezet.'
            }
          </h2>
          <div className="Divider"></div>

          <h3 className="Socials">
            { language === 'en' ?
                "Creators"
                :
                'Makers'
            }
          </h3>
          <div className="Row">
            <div className="Column">
              <div className="SocialContainer">
                <div className="Icon">
                  <a href="https://www.instagram.com/marleenvandereerden/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram Icon" />
                  </a>
                </div>
                <div className="Icon">
                  <a href="https://www.linkedin.com/in/marleen-van-der-eerden-84307322a/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                  </a>
                </div>
              </div>
              <div className="Username">Marleen van der Eerden</div>
            </div>
            <div className="Column">
              <div className="SocialContainer">
                <div className="Icon">
                  <a href="https://www.instagram.com/joellewagteveld/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram Icon" />
                  </a>
                </div>
                <div className="Icon">
                  <a href="https://www.linkedin.com/in/joëlle-wagteveld-475093278/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                  </a>
                </div>
              </div>
              <div className="Username">Joëlle Wagteveld</div>
            </div>
          </div>

        </div>
        <div className="ArtworkGrid">
          {artworks.map((artwork, index) => (
              <ArtworkCard
                  key={index}
                  title={language === 'en' ? artwork.titleEN : artwork.titleNL}
                  description={language === 'en' ? artwork.descriptionEN : artwork.descriptionNL}
                  imageUrl={artwork.imageUrl}
                  onClick={() => handleArtworkClick(artwork)}
              />
          ))}
        </div>

        {selectedArtwork && (
            <div className="DetailOverlay active">
              <div className="DetailContent">
                <button className="CloseButton" onClick={handleCloseDetail}>
                  &times;
                </button>
                <img src={selectedArtwork.imageUrl} alt={selectedArtwork.title} />
                <h2>{language === 'en' ? selectedArtwork.titleEN : selectedArtwork.titleNL}</h2>
                <p>{language === 'en' ? selectedArtwork.descriptionEN : selectedArtwork.descriptionNL}</p>
                {/* Add more details as needed */}
              </div>
            </div>
        )}
      </div>
  );
}

export default App;
