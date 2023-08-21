import React from 'react';
import './App.css';
import Footer from './Footer.js'; // Import the Footer component
import GridCardLayout from './GridCardLayout';
import 'font-awesome/css/font-awesome.min.css';

import sideSmileImage from './backgrounds/sidesmile.JPG';



function App() {
  const projects = [
    { 
      title: 'Hi! My name is Gautham Pandian',
      description: 'Description for project 2',
      theme: 'light',
      gridClass: 'card-2x1',
      backgroundColor: 'bg-color-offwhite',
      textPosition: 'top-left', // Added this
    },
    { 
      gridClass: 'card-2x2',
      backgroundImage: sideSmileImage,
      textPosition: 'bottom-left', // Added this
    },
    { 
      title: 'Project 1',
      subtitle: 'hi',
      theme: 'light',
      arrow: 'www.google.com',
      tags: ['REACT','REACT', 'JAVASCRIPT'],
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-blue', // or 'path/to/image.jpg' or another color class
      textPosition: 'top-left', // Added this
    },

    { 
      description: 'Description for project 1',
      gridClass: 'card-1x3',
      backgroundColor: 'bg-color-offwhite',
      textPosition: 'top-left', // Added this
    },
    { 
      description: 'Description for project 2',
      gridClass: 'card-1x1',
      backgroundColor: 'bg-color-offwhite',
      textPosition: 'top-left', // Added this
    },
    { 
      description: 'Description for project 2',
      gridClass: 'card-1x2',
      backgroundColor: 'bg-color-offwhite',
      textPosition: 'top-left', // Added this
    },
    { 
      description: 'Description for project 2',
      gridClass: 'card-2x1',
      backgroundColor: 'bg-color-offwhite',
      textPosition: 'top-left', // Added this
    },
    { 
      description: 'Description for project 2',
      gridClass: 'card-2x1',
      backgroundColor: 'bg-color-offwhite',
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
