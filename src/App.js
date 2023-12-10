import React from 'react';
import './styles/App.css';
import Footer from './Footer.js'; // Import the Footer component
import GridCardLayout from './GridCardLayout';
import 'font-awesome/css/font-awesome.min.css';

import sideSmileImage from './backgrounds/sidesmile.JPG';
import serioussmile from './backgrounds/serioussmile.JPG'
import whiteshadow from './backgrounds/whiteshadow.jpg'
import food from './backgrounds/food.jpg'
import forestfire from './backgrounds/forestfire.jpg'
import threading from './backgrounds/threading.png'

function App() {
  const projects = [
    { 
      title: 'Hi👋 I\'m Gautham Pandian',
      description: 'I am a dedicated programmer currently a Junior studying Computer Science and Engineering at UC Davis. I am always keen on staying up-to-date with the latest technological advancements to ensure I bring the most current and innovative approaches to my work. Below are some of my projects.',
      theme: 'dark',
      gridClass: 'card-2x1',
      backgroundColor: 'bg-color-black',
      textPosition: 'bottom-left', // Added this
    },
    { 
      gridClass: 'card-2x2',
      backgroundImage: sideSmileImage,
      textPosition: 'bottom-left', // Added this
    },

    { 
      theme: 'light',
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-offwhite', // or 'path/to/image.jpg' or another color class
      textPosition: 'center-middle', // Added this
      socialLinks: {
        linkedin: 'https://linkedin.com/in/gautham-pandian/',
        github: 'https://github.com/Gauthampdn/',
        website: '/files/GPResume.pdf'
      }
    },
    { 
      title: 'AI Study Planner',
      description: 'An AI study plan creator where students can input a topic and the amount of time they plan to study. The application then generates a detailed study plan for the user based on this input.',
      theme: 'light',
      tags: ['REACT.JS','OPENAI API'],
      link: 'https://github.com/Gauthampdn/AIStudyPlan',
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-blue', // or 'path/to/image.jpg' or another color class
      textPosition: 'top-left', // Added this
    },
    { 
      title: 'SafeGrub',
      description: 'A web app to aid visually impaired individuals with food allergies. The app enables users to scan food wrappers using their webcam, then parses through a database of ingredients to identify any common allergens associated with the serial number, and reads the list of ingredients aloud.',
      tags: ['PYTHON', 'HTML/CSS', 'JAVASCRIPT', 'REST API'],
      link: 'https://github.com/Gauthampdn/hackdavis2023',
      gridClass: 'card-3x1',
      theme: 'dark',
      backgroundImage: food,
      textPosition: 'bottom-left', // Added this
    },
    { 
      title: 'Pergi.app',
      gridClass: 'card-1x2',
      description: 'I am the Founder of pergi.app: Your Ultimate ChatGPT Prompt Assistant. Recognizing the inconvenience of constantly retyping ChatGPT prompts, I embarked on a mission to streamline this process to help with prompt engineering.',
      link: 'https://pergi.app/',
      tags: ['ASTRO', 'APPSCRIPT', 'EXCEL'],
      backgroundColor: 'bg-color-green',
      textPosition: 'top-left', // Added this
    },
    { 
      title: 'Aggieworks: Clubly',
      description: 'Designed and developed the landing page for the club finder app created by Aggieworks. Clubly, is a convenient and efficient solution for discovering, organizing, and managing club information on campus.',
      tags: ['ASTRO','FIGMA'],
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-yellow',
      textPosition: 'top-left', // Added this
    },
    
    { 
      title: 'SparkDefense ',
      description: 'A system to detect the fires of an area, inform nearby servers and devices in that area of those fires, and ensure the safety of the residents in the community.',
      tags: ['PYTHON', 'RASPBERRY PI', 'TWILIO API'],
      link: 'https://devpost.com/software/spark-defense',
      gridClass: 'card-2x1',
      theme: 'dark',
      backgroundImage: forestfire,
      textPosition: 'top-left', // Added this
    },
    { 
      title: 'Mulithreading System ',
      description: 'In this project I implemented a queue, a basic user-level thread library, a semaphore library, and preemption using C.',
      tags: ['C (PROGRAMMING LANGUAGE'],
      link: 'https://github.com/Gauthampdn/ECS150P2',
      gridClass: 'card-2x1',
      theme: 'dark',
      backgroundImage: threading,
      textPosition: 'bottom-left', // Added this
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
