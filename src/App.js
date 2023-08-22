import React from 'react';
import './styles/App.css';
import Footer from './Footer.js'; // Import the Footer component
import GridCardLayout from './GridCardLayout';
import 'font-awesome/css/font-awesome.min.css';

import sideSmileImage from './backgrounds/sidesmile.JPG';
import serioussmile from './backgrounds/serioussmile.JPG'
import whiteshadow from './backgrounds/whiteshadow.jpg'
import food from './backgrounds/food.jpg'

function App() {
  const projects = [
    { 
      title: 'Hi👋 I\'m Gautham Pandian',
      description: 'I am a dedicated programmer currently a Junior studying Computer Science and Engineering at UC Davis. I am always keen on staying up-to-date with the latest technological advancements to ensure I bring the most current and innovative approaches to my work. Below are some of my projects.',
      theme: 'dark',
      gridClass: 'card-2x1',
      backgroundColor: 'bg-color-black',
      textPosition: 'top-left', // Added this
    },
    { 
      gridClass: 'card-2x2',
      backgroundImage: sideSmileImage,
      textPosition: 'bottom-left', // Added this
    },

    { 
      title: 'Resume',
      description: '',
      theme: 'light',
      downloadPath: '/files/GPResume.pdf',
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-blue', // or 'path/to/image.jpg' or another color class
      textPosition: 'top-left', // Added this
    },
    { 
      title: 'AI Study Planner',
      description: 'An AI study plan creator where students can input a topic and the amount of time they plan to study. The application then generates a detailed study plan for the user based on this input.',
      theme: 'light',
      tags: ['REACT.JS','OPENAI API'],
      link: 'https://github.com/Gauthampdn/Aggieworkss23',
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-blue', // or 'path/to/image.jpg' or another color class
      textPosition: 'top-left', // Added this
    },

    { 
      title: 'SafeGrub',
      description: 'A web app utilizing computer vision, the Clarifai API, and the Openfoodfacts API to aid visually impaired individuals with food allergies. The app enables users to scan food wrappers using their webcam and extract the serial number. It then parses through a database of ingredients to identify any common allergens associated with the serial number, and uses text-to-speech technology to read the list of ingredients aloud, ensuring accessibility for individuals with visual impairments.',
      tags: ['HTML/CSS', 'JAVASCRIPT', 'REST API'],
      link: 'https://www.google.com',
      gridClass: 'card-3x1',
      theme: 'dark',
      backgroundImage: food,
      textPosition: 'top-left', // Added this
    },
    { 
      title: 'Aggieworks: Clubly',
      description: 'Designed and developed the landing page for the club finder app created by Aggieworks. Clubly, is a convenient and efficient solution for discovering, organizing, and managing club information on campus. It streamlines the process, providing a centralized hub for students to explore clubs, stay updated with memberships and events, and communicate with club leaders.',
      tags: ['ASTRO','FIGMA'],
      gridClass: 'card-1x2',
      backgroundColor: 'bg-color-yellow',
      textPosition: 'top-left', // Added this
    },
    { 
      title: 'Pergi',
      gridClass: 'card-2x1',
      description: 'I am the Founder of Pergi: Your Ultimate ChatGPT Prompt Assistant. Recognizing the inconvenience of constantly retyping ChatGPT prompts, I embarked on a mission to streamline this process to help with prompt engineering.',
      tags: ['ASTRO', 'APPSCRIPT', 'EXCEL'],
      backgroundColor: 'bg-color-green',
      textPosition: 'top-left', // Added this
    },
    { 
      description: 'Description for project 2',
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-lavender',
      textPosition: 'top-left', // Added this
    },



    // ... other projects ...
  ];
  

  return (
    <div className="App">
      <GridCardLayout projects={projects} />
      <Footer/>
    </div>
  );
}

export default App;
