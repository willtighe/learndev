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
    ]
  },
  { id: "html",       title: "HTML",               icon: "🏗️", unlocked: false },
  { id: "css",        title: "CSS",                icon: "🎨", unlocked: false },
  { id: "javascript", title: "JavaScript",         icon: "⚡", unlocked: false },
  { id: "terminal",   title: "The Terminal",       icon: "💻", unlocked: false }
];
