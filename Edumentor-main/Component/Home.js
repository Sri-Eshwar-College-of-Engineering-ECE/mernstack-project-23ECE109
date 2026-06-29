import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [currentBlock, setCurrentBlock] = useState(0);

  const blockContent = [
    {
      title: 'Personalized Mentor',
      description: ["Your journey to success is unique—let us pair you with a personalized mentor who will guide you every step of the way, tailored to your goals and aspirations."
      ],
      image: "/mentor.jpg",  
    },
    {
      title: 'Courses',
      description: ["Unlock your potential with our expertly curated courses, designed to equip you with the knowledge and skills to excel in your field."
      ],
      image: "/course.jpg", 
    },
    {
      title: 'Professional Growth',
      description: ["Accelerate your career with tailored resources and guidance, helping you grow professionally and achieve your long-term goals."
      ],
      image: "/growth.jpg",
    }
  ];

  const totalBlocks = blockContent.length;

  const handleLeftArrowClick = () => {
    if (currentBlock > 0) {
      setCurrentBlock(currentBlock - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentBlock < totalBlocks - 1) {
      setCurrentBlock(currentBlock + 1);
    }
  };

  return (
    <>
      <div className="video-section">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-blocks-container">
        <button className="arrow left" onClick={handleLeftArrowClick}>
          &#10094;
        </button>

        <div className="content-blocks">
          {blockContent.map((block, index) => (
            <div
              key={index}
              className={`block ${currentBlock === index ? 'active' : ''}`}
            >
              <img src={block.image} alt={block.title} className="block-image" />
              <h2>{block.title}</h2>
              <ul>
                {block.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={handleRightArrowClick}>
          &#10095;
        </button>
      </div>
    </>
  );
};

export default Home; 