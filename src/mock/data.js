import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'William Shi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my coding portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'William Shi',
  subtitle: 'I am a rising junior studying computer science and Plan II liberal arts at UT Austin',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'willie.jpg',
  paragraphOne:
    'Ever since I joined my highschool robotics team, I knew I wanted to work in technology in a collaborative environment. There was just something about debugging past midnight with the team while eating IHOP pancakes that convinced me that software engineering was for me.',
  paragraphTwo:
    "Today, I'm still pursuing my computer science studies with a specific interest in applied data science and machine learning, along with a personal side passion in game design. In addition, I'm also studying liberal arts because I feel it gives me a broader understanding of people and society that allows me to be a more conscious designer and communicator.",
  paragraphThree:
    'In my free time I like to dabble in film and animation, play the piano, and read webnovels(I recommend The Wandering Inn).',
  resume: 'https://drive.google.com/file/d/1FQCPrfmBKYPB0Vwb6SzSnYu6nnAS-_4D/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'book.PNG',
    title: 'Bookipedia',
    info: 'Full Stack React Website that draws from 2 API sources and webscraped library data to form a relational database between books, authors, and libraries.',
    info2:
      'Data can be accessed through Postman designed API endpoints; Backend content is handled with an AWS PostGres SQL instance.',
    url: 'https://www.bookipedia.me/',
    repo: 'https://gitlab.com/mayankdaruka/bookipedia.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ARFaceTrack.PNG',
    title: 'CNN AR Glasses Face Filter',
    info: 'Created a convolutional neural network that predicts key facial points for a given input for AR tracking and paired it with the Google Media Pipe Face tracking API.',
    info2:
      'Based off the predicted points you can attach a variety of filters that will move along with your face for a given video input.',
    url: 'https://media.giphy.com/media/DjdCP70gTr2Hf9XHnS/giphy.gif',
    repo: 'https://github.com/HuyDTran121/cs354-final-project.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'captionsproj.PNG',
    title: 'Youtube Captions Checker',
    info: 'Utilizes the Youtube API in order to generated a auto generated captions transcript from videos',
    info2:
      "The script then scans the transcript for key words based on a predefined word bank and returns timestamps for any hits, allowing content creators to make sure the youtube algorithm won't flag or shadowban based on unintentional problematic phrases.",
    url: '',
    repo: 'https://github.com/WillieShi/YoutubeCaptionChecker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to contact me! Currently looking for internship opportunities.',
  btn: '',
  email: 'williamlongshi@utexas.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Shiguy_Blank',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/shiguy',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/william-shi-905697136/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WillieShi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
