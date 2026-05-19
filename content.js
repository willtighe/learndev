/*
 * content.js
 *
 * Defines all learning content for the app:
 * - STAGES array containing every question, prompt, or exercise
 * - Each stage object describes its type, content, and expected answer
 * - No logic lives here — this file is pure data consumed by engine.js
 */

const STAGES = [
  {
    id: "web",
    title: "How the Web Works",
    icon: "🌐",
    unlocked: true,
    slides: [
      {
        type: "text",
        headline: "The internet is older than you think",
        body: "The web was invented in 1989 by a British scientist named Tim Berners-Lee. He was working at CERN — the physics lab in Switzerland — and needed a way for researchers around the world to share documents instantly. What he built became the foundation of everything you use online today."
      },
      {
        type: "analogy",
        headline: "Think of it like a postal system",
        visual: "📬",
        body: "When you type a URL and hit enter, your browser is like someone writing a letter and sending it to an address. The server at that address reads the request, finds the right files, and sends them back. Your browser receives those files and draws the page you see."
      },
      {
        type: "fact",
        text: "Every website you have ever visited — Google, Instagram, YouTube — is just files sitting on a computer somewhere, waiting to be requested."
      },
      {
        type: "text",
        headline: "Three files run the entire web",
        body: "Almost every webpage is built from exactly three types of files. HTML defines what exists on the page — the words, images, and buttons. CSS controls how everything looks — the colors, fonts, and layout. JavaScript makes things interactive — the clicks, animations, and live updates. Together they are called the front end."
      },
      {
        type: "analogy",
        headline: "HTML, CSS, and JavaScript are like a building",
        visual: "🏗️",
        body: "HTML is the structure — the walls, floors, and rooms. CSS is the interior design — the paint, furniture, and lighting. JavaScript is the electricity — it makes the lights turn on, the doors open, and the elevator move. Remove any one of them and something important breaks."
      },
      {
        type: "image",
        headline: "See how it all connects",
        src: "assets/how-web-works.svg",
        caption: "Your browser requests a page, the server sends back three files, and your browser combines them into what you see."
      },
      {
        type: "fact",
        text: "When you visit a website, your browser downloads these three types of files and uses them to draw the page — all in under a second."
      },
      {
        type: "text",
        headline: "Servers and browsers are in constant conversation",
        body: "A server is just a computer that is always on and connected to the internet, waiting for requests. A browser is software that makes those requests and knows how to read the files that come back. Every time you click a link, your browser asks a server for files. The server responds. The browser draws the result."
      },
      {
        type: "text",
        headline: "Your files need an address",
        body: "A URL is just an address. The domain (like google.com) tells the internet which server to talk to. The path (like /search) tells that server which specific file or page you want. DNS — the Domain Name System — is like a phone book that translates domain names into the actual numeric addresses of servers."
      },
      {
        type: "fact",
        text: "You now understand the foundation that every developer builds on. HTML, CSS, JavaScript, servers, browsers, and URLs — this is the whole web in six concepts."
      }
    ],
    reference: [
      { term: "Browser",    definition: "Software that requests and displays web pages. Chrome, Safari, and Firefox are browsers." },
      { term: "Server",     definition: "A computer that is always on and connected to the internet, storing and sending files when requested." },
      { term: "URL",        definition: "The address of a page on the web. Like a street address, but for files on a server." },
      { term: "HTML",       definition: "The structure of a webpage. It defines what exists — headings, paragraphs, buttons, images." },
      { term: "CSS",        definition: "The style of a webpage. It controls colors, fonts, spacing, and layout." },
      { term: "JavaScript", definition: "The behavior of a webpage. It makes things interactive — clicks, animations, live updates." },
      { term: "DNS",        definition: "The system that translates a domain name like google.com into the actual address of a server." }
    ],
    matching: [
      {
        round: 1,
        pairs: [
          { term: "Browser", match: "Software that requests and displays web pages" },
          { term: "Server",  match: "A computer always on, storing and sending files" },
          { term: "URL",     match: "The address of a specific page on the web" }
        ]
      },
      {
        round: 2,
        pairs: [
          { term: "HTML",       match: "Defines the structure of a webpage" },
          { term: "CSS",        match: "Controls the visual style of a webpage" },
          { term: "JavaScript", match: "Makes a webpage interactive and dynamic" },
          { term: "DNS",        match: "Translates domain names into server addresses" }
        ]
      }
    ],
    quiz: [
      {
        type: "multiple-choice",
        question: "You open Chrome and type google.com. What is Chrome in this situation?",
        options: ["A server", "A browser", "A URL", "An HTML file"],
        answer: "A browser",
        explanation: "Chrome is a browser — software that requests pages and renders the files a server sends back."
      },
      {
        type: "true-false",
        question: "A server is just another name for a browser.",
        answer: "false",
        explanation: "A server stores and sends files. A browser requests and displays them. They do opposite jobs."
      },
      {
        type: "fill-blank",
        question: "When you type google.com and hit enter, your browser sends a request to a ___.",
        options: ["server", "stylesheet", "pixel", "folder"],
        answer: "server",
        explanation: "The request goes to a server — a computer that stores files and sends them back to your browser."
      },
      {
        type: "multiple-choice",
        question: "A webpage looks completely unstyled — plain black text on white. Which file is most likely missing?",
        options: ["The HTML file", "The CSS file", "The JavaScript file", "The server"],
        answer: "The CSS file",
        explanation: "CSS controls all visual styling. Without it, the page still loads but has no colors, fonts, or layout."
      },
      {
        type: "true-false",
        question: "Every website you visit is made up of files stored on a computer somewhere.",
        answer: "true",
        explanation: "Every website is just files — HTML, CSS, and JavaScript — sitting on a server waiting to be requested."
      },
      {
        type: "fill-blank",
        question: "HTML defines the ___ of a webpage, CSS defines the style, and JavaScript defines the behavior.",
        options: ["structure", "color", "speed", "address"],
        answer: "structure",
        explanation: "HTML is the structure — it defines what exists on the page. CSS and JavaScript handle how it looks and acts."
      },
      {
        type: "multiple-choice",
        question: "You click a link and nothing happens — the page loads but buttons do not work. Which file is most likely broken?",
        options: ["HTML", "CSS", "JavaScript", "DNS"],
        answer: "JavaScript",
        explanation: "JavaScript handles interactivity. If it is broken or missing, the page loads but nothing responds to clicks."
      },
      {
        type: "true-false",
        question: "DNS translates a domain name like google.com into the actual address of a server.",
        answer: "true",
        explanation: "DNS is like a phone book for the internet. It looks up domain names and returns the numeric address of the server."
      },
      {
        type: "multiple-choice",
        question: "What does URL stand for in plain terms?",
        options: ["The file type of a webpage", "The address of a specific page on the web", "The language a browser speaks", "The speed of a server"],
        answer: "The address of a specific page on the web",
        explanation: "URL stands for Uniform Resource Locator — it is simply the address that tells your browser where to find a specific file on a server."
      },
      {
        type: "fill-blank",
        question: "The ___ is responsible for making a webpage interactive — handling clicks, animations, and live updates.",
        options: ["JavaScript file", "HTML file", "CSS file", "DNS record"],
        answer: "JavaScript file",
        explanation: "JavaScript is the behavior layer. It listens for user actions and responds dynamically without reloading the page."
      },
      {
        type: "true-false",
        question: "When you visit a website, your browser downloads HTML, CSS, and JavaScript files and uses them to draw the page.",
        answer: "true",
        explanation: "This is exactly what happens. The browser requests the files, receives them from the server, and renders them into the page you see."
      },
      {
        type: "multiple-choice",
        question: "Which analogy best describes the relationship between HTML, CSS, and JavaScript?",
        options: [
          "Blueprint, paint, electricity",
          "Address, server, browser",
          "Request, response, render",
          "Domain, path, file"
        ],
        answer: "Blueprint, paint, electricity",
        explanation: "HTML is the blueprint (structure), CSS is the paint and furniture (style), and JavaScript is the electricity (behavior). Together they build the page."
      },
      {
        type: "fill-blank",
        question: "A ___ is a computer that is always on and connected to the internet, waiting to send files when requested.",
        options: ["server", "browser", "router", "compiler"],
        answer: "server",
        explanation: "Servers are always-on computers that store websites and respond to requests from browsers around the world."
      },
      {
        type: "true-false",
        question: "You need special software to build a website — plain text files cannot make a webpage.",
        answer: "false",
        explanation: "A webpage is just a plain text file saved with a .html extension. Any text editor can create one. No special software required."
      },
      {
        type: "multiple-choice",
        question: "Your friend in another country types your website URL and sees your page. Where did your files come from?",
        options: [
          "They were copied to your friend's computer",
          "They were sent from a server to your friend's browser",
          "They were generated by your friend's browser",
          "They came from your computer directly"
        ],
        answer: "They were sent from a server to your friend's browser",
        explanation: "Your files live on a server. When your friend requests your URL, the server sends the files to their browser, which renders the page."
      },
      {
        type: "fill-blank",
        question: "When a browser receives HTML, CSS, and JavaScript files, it ___ them into the visual page you see.",
        options: ["renders", "deletes", "compresses", "encrypts"],
        answer: "renders",
        explanation: "Rendering is the process of reading the three files and drawing the visual result on screen. It happens in milliseconds."
      },
      {
        type: "true-false",
        question: "CSS can make a button change color when you hover over it.",
        answer: "true",
        explanation: "CSS handles all visual states including hover effects. You can change color, size, border, and more just with CSS — no JavaScript needed for basic hover effects."
      },
      {
        type: "multiple-choice",
        question: "What is the job of DNS?",
        options: [
          "To store your website files",
          "To translate domain names into server addresses",
          "To render HTML into a visual page",
          "To write JavaScript automatically"
        ],
        answer: "To translate domain names into server addresses",
        explanation: "DNS — Domain Name System — is like a phone book. It converts a human-readable domain like google.com into the numeric IP address of the server that hosts it."
      },
      {
        type: "fill-blank",
        question: "The three file types that make up almost every webpage are HTML, CSS, and ___.",
        options: ["JavaScript", "Python", "SQL", "XML"],
        answer: "JavaScript",
        explanation: "HTML, CSS, and JavaScript are the three languages of the web. Every browser in the world understands these three and only these three natively."
      },
      {
        type: "true-false",
        question: "A webpage can exist and be viewable without a CSS file.",
        answer: "true",
        explanation: "HTML alone is enough to create a viewable webpage — it just has no styling. The browser will display the content with default styles. CSS is what makes it look designed."
      }
    ]
  },
  { id: "html",       title: "HTML",               icon: "🏗️", unlocked: false },
  { id: "css",        title: "CSS",                icon: "🎨", unlocked: false },
  { id: "javascript", title: "JavaScript",         icon: "⚡", unlocked: false },
  { id: "terminal",   title: "The Terminal",       icon: "💻", unlocked: false }
];
