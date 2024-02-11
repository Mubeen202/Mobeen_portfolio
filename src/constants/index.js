import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  react,
  node,
  angular_js,
  python_django,
  django,
  mongo_db,
  mysql,
  troon,
  ncri,
  it_routes,
  bopayment,
  fortra,
  metaverse,
  bamboo,
  lagravate,
  time_tables,
  mysql_image,
  sql,
  drf,
  postman,
  haqana,
  near,
  flow,
  docker,
  kubernetes,
  aws,
  jenkins
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "React JS",
    icon: react,
  },
  {
    title: "Angular JS",
    icon: angular_js,
  },
  {
    title: "Node JS",
    icon: node,
  },
  {
    title: "Python Django",
    icon: python_django,
  },
  {
    title: "Mongo DB",
    icon: mongo_db,
  },
  {
    title: "MYSQL",
    icon: mysql,
  },
  {
    title: "Docker",
    icon: docker,
  },
  {
    title: "Kubernetes",
    icon: kubernetes,
  },
  {
    title: "Jenkins",
    icon: jenkins,
  },
  {
    title: "AWS Lambda",
    icon: aws,
  },
 
];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python Django",
    icon: django,
  },
  {
    name: "Django REST framework(DRF)",
    icon: drf,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  

  {
    name: "MYSQL",
    icon: mysql_image,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Git",
    icon: git,
  },

  

  {
    name: "Postman",
    icon: postman,
  },
  // {
  //   name: "NEAR Blockchain",
  //   icon: near,
  // },
  // {
  //   name: "FLOW Blockchain",
  //   icon: flow,
  // },


 
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Haqana Corporate Sector Est.",
    icon: haqana,
    link:"https://www.haqanacsp.ae/",
    iconBg: "#383E56",
    date: "October 2023 - January 2024",
    points: [
      "Full Stack Developer with expertise in Node.js and microservices architecture.",
      "Proficient in deploying applications on AWS Lambda",
      "Developing dynamic and responsive frontend using React.js",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "Troon Technologies",
    icon: troon,
    link:"https://troontechnologies.com/",
    iconBg: "#383E56",
    date: "July 2022 - August 2023",
    points: [
      "Working as a MERN developer at position with technologies Node js , React js , Express JS and Web3.0. FLow and NEAR blockchain integrate in application to get data and send transaction to the blockchain. Use Redux saga, Redux thunk and context api's for state management in applications.",
      "Use Node mailer and twillo for sending mail and SMS. Use Pinata, Cloudinary cloud storage in application. Use Multer for local storge in application",
      "Use JWT and Passport(JWT) authentication. Use Cookies session for store session of user in application. Use Postman for test Api's. Create and Use swagger for test Api's",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NCRI Inc.",
    icon: ncri,
    link:"https://ncri.com/",
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2022",
    points: [
      "As a Full Stack Developer. My expertise included AngularJS for the front-end and Python Django, along with Django Rest Framework, for the back-end and MYSQL for the database management.",
      "Implemented secure user authentication using JWT and Passport (JWT). My proficiency extends to using cookies for session management, conducting API testing with Postman and Swagger for API documentation.",
      "Used Locust for Load testing.",
      "Utilizing FTP and SFTP for cloud file management, and imposing Amazon Web Services(AWS) S3 bucket for efficient storage.",
      "Deployment on Heroku server as well as Linux Server."
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "IT Routes, UK(Remote)",
    icon: it_routes,
    link:"https://www.haqanacsp.ae/",
    iconBg: "#383E56",
    date: "Nov 2020 - Apr 2021",
    points: [
      " Worked on JavaScript,TypeScript, React, JWT, Redux, NPM, Node JS, MongoDB. Learnt Agile methodologies in Software Development. Implemented Code first approach to design Databases. Built Restful services at backend and with WebAPIs and accessed it using React Js",
      "Familiarity using Postman for API's development and reference. Use Cloudinary to cloud storage in application. Use Express Validator for validations and bank integration paypal",
      " Use JWT Authentication and Authorization. Optimize images using Gimp and Inkscape. Use Azure and JIRA for teams to share code, track work, and ship software",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bopayment",
    description:
      "BoPayment( Mini bank) Bo payment work on Front end React js nature of project is based NIUM and MSWIPE nature of project is leading global financial technology platform redefining the way consumers and businesses send, spend, and receive funds globally",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mySql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: ".Net Core",
        color: "blue-text-gradient",
      },
    ],
    image: bopayment,
    source_code_link: " https://bopayments.com/",
  },
  {
    name: "Fortra",
    description:
      "Fortra project work on backend in Node.js  and Web3.0 wallet integration with crypto ecosystem. Nature of project is connects buyers with sellers and tenants with landlords for highly user-friendly real estate experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongo_db",
        color: "green-text-gradient",
      },
      {
        name: "Flow_block_chain",
        color: "orange-text-gradient",
      },
    ],
    image: fortra,
    source_code_link: "https://fortra.io/",
  },
  {
    name: "Metaverse",
    description:
      " Meta verse is am Nft reward platform where user can play the game and get the Nfts In reward also can earn points and change it to nfts.  In this project we integrate the NEAR blockchain Web3.0 wallet Integration with our project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NEAR_blockchain",
        color: "orange-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://playtoearngames.com/",
  },
  {
    name: "Bamboo Hr",
    description:
      "BambooHR is a human resources information system (HRIS) that bundles HR features such as payroll, time tracking, employee engagement, an applicant tracking system (ATS) and more into one system. My contribution is just provide services on both front-end using AngularJs as well as back-end using Python-Django.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "python_dango",
        color: "green-text-gradient",
      },
      {
        name: "mySql",
        color: "blue-text-gradient",
      },

    ],
    image: bamboo,
    source_code_link: " https://www.bamboohr.com/b1/",
  },
  {
    name: "Lagravate",
    description:
      "Lagravate project where I was involved in both front-end development using AngularJS while back-end in Python Django. This project focused on entire recruitment process, from candidate discovery and screening to the final on boarding of qualified applicants."
    , tags: [
      {
        name: "Under Development to indicate that it's not live yet",
        color: "red-text-gradient",
      },
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "python_dango",
        color: "green-text-gradient",
      },
      {
        name: "mySql",
        color: "blue-text-gradient",
      },

    ],
    image: lagravate,
  },
  {
    name: "Times Tables",
    description:
    "Developed an interactive math application for children's using React.js and Node.js. The project aims to reinforce fundamental arithmetic concepts while sparking a love for learning among children's through engaging exercises and interactive modules, the app creates an enjoyable learning experience, making math fun for young learners"
    , tags: [
     
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },

    ],
    image: time_tables,
    source_code_link: "https://www.timestables.co.uk/6-times-table.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
