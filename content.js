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
  {
    id: "html",
    title: "HTML",
    icon: "🏗️",
    unlocked: false,
    slides: [
      {
        type: "text",
        headline: "HTML is the skeleton of every webpage",
        body: "HTML stands for HyperText Markup Language. It is the first file a browser reads when you visit a website. It tells the browser what exists on the page — the words, images, headings, buttons, and links. Without HTML there is no page at all."
      },
      {
        type: "fact",
        text: "HTML was invented in 1991 by Tim Berners-Lee — the same person who invented the World Wide Web."
      },
      {
        type: "text",
        headline: "HTML uses tags to define elements",
        body: "Everything in HTML is wrapped in tags. A tag is a label inside angle brackets. Most elements have an opening tag and a closing tag. The content goes between them. For example: <h1>Hello World</h1> creates a large heading that says Hello World."
      },
      {
        type: "analogy",
        headline: "Tags are like labels on boxes",
        visual: "📦",
        body: "Imagine every piece of content on a page is inside a labeled box. The label tells the browser what kind of content it is — a heading, a paragraph, an image, a button. The browser reads the labels and decides how to display each box."
      },
      {
        type: "image",
        headline: "What an HTML tag looks like",
        src: "assets/html-tag.svg",
        caption: "Every HTML element has an opening tag, content, and a closing tag. The closing tag has a forward slash."
      },
      {
        type: "text",
        headline: "Elements can nest inside each other",
        body: "HTML elements can contain other elements. A div is a container that holds other elements. A ul (unordered list) contains li (list item) elements inside it. This nesting creates the structure of the page — some things are inside other things, just like folders inside folders on your computer."
      },
      {
        type: "fact",
        text: "There are over 100 HTML elements, but you can build almost anything with just 10: html, head, body, h1-h6, p, a, img, div, ul, li, and button."
      },
      {
        type: "text",
        headline: "The browser reads HTML top to bottom",
        body: "When your browser receives an HTML file it reads it from the first line to the last, building the page as it goes. The first things in the file appear at the top of the page. The structure of your HTML file directly controls the structure of what the user sees."
      },
      {
        type: "text",
        headline: "HTML is not a programming language",
        body: "HTML does not have logic, loops, or conditions. It cannot make decisions or respond to user actions. It is a markup language — its only job is to describe what content exists and what type it is. JavaScript handles behavior. CSS handles appearance. HTML just defines structure."
      }
    ],
    reference: [
      { term: "HTML",       definition: "HyperText Markup Language — the standard language for creating the structure of web pages." },
      { term: "Tag",        definition: "A label in angle brackets that defines an element. Most tags come in pairs: <p> opens, </p> closes." },
      { term: "Element",    definition: "A complete unit of HTML — the opening tag, the content inside, and the closing tag together." },
      { term: "Attribute",  definition: "Extra information added inside an opening tag. For example: <a href='google.com'> — href is an attribute." },
      { term: "<h1> to <h6>", definition: "Heading tags. h1 is the largest and most important. h6 is the smallest. Use one h1 per page." },
      { term: "<p>",        definition: "Paragraph tag. Wraps a block of text into a paragraph with spacing above and below." },
      { term: "<a>",        definition: "Anchor tag — creates a hyperlink. The href attribute sets where the link goes." },
      { term: "<div>",      definition: "A generic container with no meaning of its own. Used to group and organize other elements." },
      { term: "<img>",      definition: "Embeds an image. Uses a src attribute for the image path and alt for a text description." },
      { term: "Nesting",    definition: "Placing elements inside other elements. The inner element must be closed before the outer one." }
    ],
    matching: [
      {
        round: 1,
        pairs: [
          { term: "<h1>",  match: "Creates a large heading on the page" },
          { term: "<p>",   match: "Wraps a block of text into a paragraph" },
          { term: "<a>",   match: "Creates a clickable hyperlink" }
        ]
      },
      {
        round: 2,
        pairs: [
          { term: "<div>",    match: "A generic container for grouping elements" },
          { term: "<img>",    match: "Embeds an image into the page" },
          { term: "Attribute", match: "Extra information added inside an opening tag" },
          { term: "Nesting",  match: "Placing elements inside other elements" }
        ]
      }
    ],
    quiz: [
      { type: "multiple-choice", question: "You want to add a large title at the top of your page. Which HTML tag do you use?", options: ["<title>", "<h1>", "<header>", "<p>"], answer: "<h1>", explanation: "h1 is the main heading tag — it creates the largest, most prominent text on the page. Every page should have exactly one h1." },
      { type: "true-false", question: "HTML is a programming language that can make decisions and respond to user actions.", answer: "false", explanation: "HTML is a markup language, not a programming language. It describes structure and content but has no logic. JavaScript handles behavior." },
      { type: "fill-blank", question: "Every HTML element has an opening tag, ___, and a closing tag.", options: ["content", "a style", "a script", "an address"], answer: "content", explanation: "The three parts of an HTML element are the opening tag, the content inside, and the closing tag. The closing tag is the same as the opening tag but with a forward slash." },
      { type: "multiple-choice", question: "You want to make some text into a clickable link. Which tag do you use?", options: ["<link>", "<button>", "<a>", "<p>"], answer: "<a>", explanation: "The anchor tag <a> creates hyperlinks. You set where it goes using the href attribute: <a href='url'>link text</a>." },
      { type: "true-false", question: "A browser reads an HTML file from top to bottom, building the page as it goes.", answer: "true", explanation: "The browser processes HTML sequentially. Elements at the top of the file appear at the top of the page. Order in your file = order on screen." },
      { type: "fill-blank", question: "The ___ attribute on an <a> tag sets where the link goes when clicked.", options: ["href", "src", "class", "type"], answer: "href", explanation: "href stands for Hypertext Reference. It is the attribute that tells the browser which URL to navigate to when the link is clicked." },
      { type: "multiple-choice", question: "You want to group several elements together so you can style them as a unit. Which tag is best for this?", options: ["<group>", "<section>", "<div>", "<span>"], answer: "<div>", explanation: "div is a generic container with no built-in meaning. It is the most common way to group and organize elements for styling and layout." },
      { type: "true-false", question: "You can have multiple h1 tags on the same page without any issues.", answer: "false", explanation: "Best practice is one h1 per page — it represents the main topic of the page and is important for accessibility and search engines." },
      { type: "fill-blank", question: "The <img> tag uses the ___ attribute to specify the path to the image file.", options: ["src", "href", "url", "path"], answer: "src", explanation: "src stands for source. It tells the browser where to find the image file. Without it the image cannot load." },
      { type: "multiple-choice", question: "Which of these correctly shows an HTML element with an attribute?", options: ["<p class>paragraph</p>", "<p class='intro'>paragraph</p>", "<p .intro>paragraph</p>", "<p (class=intro)>paragraph</p>"], answer: "<p class='intro'>paragraph</p>", explanation: "Attributes are written inside the opening tag as name='value' pairs. The attribute name comes first, then an equals sign, then the value in quotes." },
      { type: "true-false", question: "HTML elements can be nested inside other HTML elements.", answer: "true", explanation: "Nesting is fundamental to HTML. A ul contains li elements. A div contains paragraphs. This nesting creates the hierarchy and structure of the page." },
      { type: "fill-blank", question: "HTML stands for HyperText ___ Language.", options: ["Markup", "Making", "Machine", "Module"], answer: "Markup", explanation: "HTML = HyperText Markup Language. Markup means annotating content with tags that describe its meaning and structure." },
      { type: "multiple-choice", question: "A page loads but all the text appears as one block with no spacing or visual hierarchy. What is most likely missing?", options: ["JavaScript", "Proper HTML tags", "A server", "DNS"], answer: "Proper HTML tags", explanation: "HTML tags define structure and hierarchy. Without proper tags like h1, p, and ul, the browser has no guidance on how to organize the content." },
      { type: "true-false", question: "The <img> tag requires both an opening and closing tag.", answer: "false", explanation: "img is a self-closing tag — it does not wrap content so it does not need a closing tag. You just write <img src='path' alt='description'>." },
      { type: "fill-blank", question: "The closing tag for a paragraph element is ___.", options: ["</p>", "<p/>", "</paragraph>", "<-p>"], answer: "</p>", explanation: "Closing tags are written with a forward slash before the tag name: </p>. They signal to the browser that the element has ended." },
      { type: "multiple-choice", question: "Which tag would you use to create a bulleted list?", options: ["<list>", "<ol>", "<ul>", "<bl>"], answer: "<ul>", explanation: "ul stands for unordered list — it creates a bulleted list. Each item inside is wrapped in an li tag. ol creates a numbered list." },
      { type: "true-false", question: "HTML was invented in the 1990s.", answer: "true", explanation: "Tim Berners-Lee invented HTML in 1991 as part of creating the World Wide Web. The first website ever was built with HTML." },
      { type: "fill-blank", question: "A ___ is a generic HTML container used to group elements for styling and layout.", options: ["div", "span", "section", "article"], answer: "div", explanation: "div is the most common generic container in HTML. It has no visual meaning on its own but is used everywhere to create layout structure." },
      { type: "multiple-choice", question: "What does the alt attribute on an img tag do?", options: ["Sets the image size", "Provides a text description of the image", "Links to another page", "Sets the image color"], answer: "Provides a text description of the image", explanation: "alt text describes the image for screen readers and appears when the image fails to load. It is essential for accessibility." },
      { type: "true-false", question: "CSS and JavaScript are written directly inside HTML tags.", answer: "false", explanation: "CSS and JavaScript are separate files that are linked to the HTML file. CSS is linked with a <link> tag in the head. JavaScript is loaded with a <script> tag." }
    ]
  },
  {
    id: "css",
    title: "CSS",
    icon: "🎨",
    unlocked: false,
    slides: [
      {
        type: "text",
        headline: "CSS makes the web beautiful",
        body: "CSS stands for Cascading Style Sheets. It is the language that controls how HTML elements look — their colors, fonts, spacing, size, and layout. Without CSS every website would look like a plain document: black text on a white background with no design at all."
      },
      {
        type: "fact",
        text: "The first version of CSS was proposed in 1994 by Håkon Wium Lie, who wanted a way to separate the design of a page from its content."
      },
      {
        type: "text",
        headline: "CSS works by selecting elements and applying rules",
        body: "A CSS rule has two parts: a selector and a declaration. The selector targets which HTML element to style. The declaration says what to change and what to change it to. For example: p { color: blue; } selects all paragraph elements and makes their text blue."
      },
      {
        type: "analogy",
        headline: "CSS is like an interior designer",
        visual: "🎨",
        body: "HTML builds the rooms in a house. CSS is the interior designer who comes in afterward and decides the paint color, furniture style, lighting, and layout. The structure stays the same — the designer just controls how everything looks and feels."
      },
      {
        type: "image",
        headline: "Anatomy of a CSS rule",
        src: "assets/css-rule.svg",
        caption: "A CSS rule has a selector that targets elements, and declarations that define the styles to apply."
      },
      {
        type: "text",
        headline: "The cascade — order matters",
        body: "The C in CSS stands for Cascading. This means styles flow down and can override each other. If two rules target the same element, the one that comes later in the file wins. More specific selectors also beat less specific ones. Understanding the cascade is one of the most important CSS skills."
      },
      {
        type: "text",
        headline: "CSS classes let you style groups of elements",
        body: "You can give any HTML element a class attribute, then write CSS that targets that class. For example: <p class='intro'> in HTML, then .intro { font-size: 20px; } in CSS. Classes are reusable — you can apply the same class to multiple elements and style them all at once."
      },
      {
        type: "fact",
        text: "CSS can now do things that used to require JavaScript — animations, transitions, hover effects, and even basic interactivity — all with just a few lines of style rules."
      },
      {
        type: "text",
        headline: "Box model — everything is a rectangle",
        body: "Every HTML element is treated as a box by CSS. That box has four layers: the content in the center, padding around the content, a border around the padding, and margin outside the border. Understanding the box model explains why elements are sized and spaced the way they are."
      }
    ],
    reference: [
      { term: "CSS",          definition: "Cascading Style Sheets — the language that controls the visual appearance of HTML elements." },
      { term: "Selector",     definition: "The part of a CSS rule that targets which HTML element to style. Examples: p, .classname, #id." },
      { term: "Declaration",  definition: "A property and value pair inside a CSS rule. Example: color: blue; sets the text color to blue." },
      { term: "Property",     definition: "What you want to change — color, font-size, margin, padding, background, etc." },
      { term: "Value",        definition: "What you want to set the property to — blue, 16px, 24px, #FF0000, etc." },
      { term: "Class",        definition: "A reusable label added to HTML elements with class='name', targeted in CSS with .name." },
      { term: "The Cascade",  definition: "The rule that determines which CSS wins when multiple rules target the same element. Later rules and more specific selectors win." },
      { term: "Box Model",    definition: "The idea that every element is a box with content, padding, border, and margin layers." },
      { term: "Padding",      definition: "Space between the content and the border of an element. Adds space inside the element." },
      { term: "Margin",       definition: "Space outside the border of an element. Pushes other elements away." }
    ],
    matching: [
      {
        round: 1,
        pairs: [
          { term: "Selector", match: "Targets which HTML element to style" },
          { term: "Property", match: "What aspect of an element you want to change" },
          { term: "Value",    match: "What you want to set the property to" }
        ]
      },
      {
        round: 2,
        pairs: [
          { term: "Class",       match: "A reusable label for targeting groups of elements" },
          { term: "Padding",     match: "Space between content and the border" },
          { term: "Margin",      match: "Space outside the border pushing elements apart" },
          { term: "The Cascade", match: "The rule that decides which style wins when rules conflict" }
        ]
      }
    ],
    quiz: [
      { type: "multiple-choice", question: "You want all paragraphs on your page to have blue text. What do you write?", options: ["p = color: blue", "p { color: blue; }", "paragraph { text: blue; }", "p.color(blue)"], answer: "p { color: blue; }", explanation: "A CSS rule is written as: selector { property: value; }. The selector targets the element, and the declaration sets the style." },
      { type: "true-false", question: "Without CSS, a webpage would still display but would look completely unstyled.", answer: "true", explanation: "HTML alone produces a readable but unstyled page — black text on white background. CSS is what adds all visual design." },
      { type: "fill-blank", question: "The ___ in CSS stands for Cascading, meaning styles can override each other based on order and specificity.", options: ["C", "S", "second S", "first S"], answer: "C", explanation: "C = Cascading. The cascade determines which rule wins when multiple rules target the same element." },
      { type: "multiple-choice", question: "You have a paragraph with class='highlight'. How do you target it in CSS?", options: ["paragraph.highlight", "p#highlight", ".highlight", "#highlight"], answer: ".highlight", explanation: "Classes are targeted with a dot prefix in CSS. .highlight selects any element with class='highlight'." },
      { type: "true-false", question: "CSS can only change text colors and font sizes.", answer: "false", explanation: "CSS controls nearly every visual aspect of a page — layout, spacing, animations, colors, borders, shadows, backgrounds, and much more." },
      { type: "fill-blank", question: "Every HTML element in CSS is treated as a ___ with content, padding, border, and margin.", options: ["box", "circle", "grid", "layer"], answer: "box", explanation: "The box model is fundamental to CSS layout. Understanding that everything is a box helps you control spacing and sizing." },
      { type: "multiple-choice", question: "Two CSS rules target the same element. Which one wins?", options: ["The first one in the file", "The one with more properties", "The later one in the file", "They cancel each other out"], answer: "The later one in the file", explanation: "In the cascade, when two rules have equal specificity, the later one wins. This is why the order of your CSS matters." },
      { type: "true-false", question: "Padding adds space outside the border of an element.", answer: "false", explanation: "Padding adds space inside the element, between the content and the border. Margin adds space outside the border." },
      { type: "fill-blank", question: "The ___ is the space outside an element's border that pushes other elements away.", options: ["margin", "padding", "border", "gap"], answer: "margin", explanation: "Margin is the outermost layer of the box model. It creates space between elements." },
      { type: "multiple-choice", question: "CSS was invented to solve what problem?", options: ["Making HTML load faster", "Separating design from content", "Adding interactivity to pages", "Creating databases"], answer: "Separating design from content", explanation: "Before CSS, design instructions were mixed into HTML. CSS was created so content and presentation could be managed separately." },
      { type: "true-false", question: "A CSS class can be applied to multiple HTML elements at once.", answer: "true", explanation: "Classes are reusable. You can add class='btn' to 50 different elements and style them all by writing one .btn rule in CSS." },
      { type: "fill-blank", question: "In CSS, a ___ targets which HTML element to apply styles to.", options: ["selector", "property", "value", "declaration"], answer: "selector", explanation: "The selector is the first part of a CSS rule. It tells the browser which elements to apply the following styles to." },
      { type: "multiple-choice", question: "What does this CSS do? h1 { font-size: 48px; }", options: ["Makes all h1 text 48 pixels tall", "Creates a new h1 element", "Deletes all h1 elements", "Hides all h1 elements"], answer: "Makes all h1 text 48 pixels tall", explanation: "This rule selects all h1 elements and sets their font-size property to 48px — making the text 48 pixels tall." },
      { type: "true-false", question: "CSS animations and transitions require JavaScript to work.", answer: "false", explanation: "Modern CSS has built-in animation and transition properties. You can create smooth effects, hover states, and keyframe animations entirely in CSS." },
      { type: "fill-blank", question: "Space between the content of an element and its border is called ___.", options: ["padding", "margin", "spacing", "gap"], answer: "padding", explanation: "Padding is inside the border. It adds breathing room between the content and the edge of the element." },
      { type: "multiple-choice", question: "Which selector targets an element with id='header'?", options: [".header", "#header", "header", "*header"], answer: "#header", explanation: "IDs are targeted with a hash prefix in CSS. #header selects the element with id='header'. IDs should be unique — only one per page." },
      { type: "true-false", question: "The order of CSS rules in your file can affect which styles are applied.", answer: "true", explanation: "Because of the cascade, later rules override earlier ones when specificity is equal. The order of your CSS rules absolutely matters." },
      { type: "fill-blank", question: "CSS stands for Cascading Style ___.", options: ["Sheets", "Scripts", "Systems", "Structures"], answer: "Sheets", explanation: "CSS = Cascading Style Sheets. Style sheets are documents that contain styling rules separate from the HTML content." },
      { type: "multiple-choice", question: "You want to add space inside a button so the text is not touching the edges. Which property do you use?", options: ["margin", "spacing", "padding", "border"], answer: "padding", explanation: "Padding adds space between the content and the border — perfect for making buttons feel less cramped." },
      { type: "true-false", question: "CSS files are linked to HTML files using a script tag.", answer: "false", explanation: "CSS files are linked using a <link> tag inside the HTML <head>: <link rel='stylesheet' href='style.css'>. Script tags are for JavaScript." }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "⚡",
    unlocked: false,
    slides: [
      {
        type: "text",
        headline: "JavaScript makes the web come alive",
        body: "JavaScript is the only programming language that runs natively in every web browser. It is what makes webpages interactive — responding to clicks, updating content without reloading, validating forms, fetching new data, and animating elements. If HTML is the structure and CSS is the style, JavaScript is the behavior."
      },
      {
        type: "fact",
        text: "JavaScript was created in just 10 days in 1995 by Brendan Eich at Netscape. Despite the name, it has nothing to do with Java — the similarity was a marketing decision."
      },
      {
        type: "text",
        headline: "JavaScript responds to events",
        body: "Everything in JavaScript is triggered by events — a user clicking a button, moving their mouse, typing in a field, or the page finishing loading. You write code that listens for these events and runs when they happen. This is called event-driven programming and it is the core of how JavaScript works."
      },
      {
        type: "analogy",
        headline: "JavaScript is like the staff in a building",
        visual: "⚡",
        body: "HTML built the building. CSS decorated it. JavaScript is the staff — they respond when you press a button, open a door when you approach, turn lights on and off, and update the display boards in real time. Without them the building is beautiful but nothing actually happens when you interact with it."
      },
      {
        type: "image",
        headline: "How JavaScript connects to a webpage",
        src: "assets/js-flow.svg",
        caption: "JavaScript listens for events, runs code in response, and updates the page — all without reloading."
      },
      {
        type: "text",
        headline: "Variables store information",
        body: "A variable is a named container for storing a value. In JavaScript you create variables with let or const. Let allows the value to change. Const means the value stays fixed. For example: let score = 0; creates a variable called score with a starting value of zero. You can then update it, read it, and use it throughout your code."
      },
      {
        type: "text",
        headline: "Functions are reusable blocks of code",
        body: "A function is a named block of code that does a specific job. You define it once and can run it as many times as you need. For example: function sayHello() { alert('Hello!'); } defines a function. Calling sayHello() runs it. Functions are how you organize code so it is readable and reusable."
      },
      {
        type: "fact",
        text: "JavaScript now runs everywhere — not just in browsers. It powers servers, mobile apps, desktop apps, and even smart devices. It is the most widely used programming language in the world."
      },
      {
        type: "text",
        headline: "JavaScript can update the page without reloading",
        body: "One of JavaScript's most powerful features is the ability to change what you see on screen without loading a new page. It can add new elements, remove old ones, change text, update images, and fetch fresh data from a server — all while you stay on the same page. This is how apps like Gmail and Twitter feel instant."
      }
    ],
    reference: [
      { term: "JavaScript",      definition: "The programming language of the web. It runs in browsers and makes pages interactive and dynamic." },
      { term: "Variable",        definition: "A named container for storing a value. Created with let (changeable) or const (fixed)." },
      { term: "Function",        definition: "A named reusable block of code that performs a specific task when called." },
      { term: "Event",           definition: "Something that happens in the browser — a click, keypress, page load — that JavaScript can respond to." },
      { term: "Event Listener",  definition: "Code that waits for a specific event and runs a function when that event occurs." },
      { term: "DOM",             definition: "Document Object Model — the browser's representation of the HTML page that JavaScript can read and modify." },
      { term: "console.log()",   definition: "A built-in function that prints a value to the browser's developer console. Used for testing and debugging." },
      { term: "let",             definition: "A keyword for creating a variable whose value can be changed later." },
      { term: "const",           definition: "A keyword for creating a variable whose value cannot be changed once set." },
      { term: "String",          definition: "A piece of text in JavaScript, written inside quotes. Example: 'Hello World'." }
    ],
    matching: [
      {
        round: 1,
        pairs: [
          { term: "Variable", match: "A named container for storing a value" },
          { term: "Function", match: "A reusable block of code that runs when called" },
          { term: "Event",    match: "A user action the browser can detect and respond to" }
        ]
      },
      {
        round: 2,
        pairs: [
          { term: "let",           match: "Creates a variable whose value can change" },
          { term: "const",         match: "Creates a variable whose value stays fixed" },
          { term: "DOM",           match: "The browser's version of the HTML page that JS can modify" },
          { term: "console.log()", match: "Prints a value to the developer console for debugging" }
        ]
      }
    ],
    quiz: [
      { type: "multiple-choice", question: "A button on your page does nothing when clicked. Which language handles making it respond?", options: ["HTML", "CSS", "JavaScript", "DNS"], answer: "JavaScript", explanation: "JavaScript handles all interactivity. HTML creates the button, CSS styles it, but JavaScript makes it actually do something when clicked." },
      { type: "true-false", question: "JavaScript has nothing to do with the Java programming language.", answer: "true", explanation: "Despite the similar name, JavaScript and Java are completely different languages. The name similarity was a marketing decision in 1995 — nothing more." },
      { type: "fill-blank", question: "A ___ is a named container for storing a value in JavaScript.", options: ["variable", "selector", "function", "tag"], answer: "variable", explanation: "Variables store values so you can use them throughout your code. You create them with let or const." },
      { type: "multiple-choice", question: "What is the difference between let and const?", options: ["let is faster, const is slower", "let can be changed, const cannot", "const is older, let is newer", "There is no difference"], answer: "let can be changed, const cannot", explanation: "let creates a variable you can update later. const creates a variable that stays fixed. Use const by default and let when you need to change the value." },
      { type: "true-false", question: "JavaScript can update what you see on a webpage without reloading the page.", answer: "true", explanation: "This is one of JavaScript's most important features. It can add, remove, and change elements on the page in real time without a full page reload." },
      { type: "fill-blank", question: "A ___ is a named reusable block of code that performs a specific task.", options: ["function", "variable", "event", "string"], answer: "function", explanation: "Functions let you write code once and run it many times. They are the building blocks of organized, readable JavaScript." },
      { type: "multiple-choice", question: "What is the DOM?", options: ["A type of CSS selector", "The browser's representation of the HTML page", "A JavaScript framework", "A type of server"], answer: "The browser's representation of the HTML page", explanation: "The DOM (Document Object Model) is how the browser represents your HTML as a structure JavaScript can read and modify. Changing the DOM changes what the user sees." },
      { type: "true-false", question: "JavaScript was created over several years by a large team at Microsoft.", answer: "false", explanation: "JavaScript was created by Brendan Eich at Netscape in just 10 days in 1995. Microsoft had nothing to do with its creation." },
      { type: "fill-blank", question: "JavaScript responds to user actions called ___, such as clicks and keypresses.", options: ["events", "selectors", "variables", "tags"], answer: "events", explanation: "Event-driven programming is core to JavaScript. You write code that listens for events and runs when they occur." },
      { type: "multiple-choice", question: "You want to test what value a variable holds. What do you use?", options: ["alert.show()", "console.log()", "print()", "debug.value()"], answer: "console.log()", explanation: "console.log() prints values to the browser's developer console. It is the most common debugging tool in JavaScript." },
      { type: "true-false", question: "JavaScript only runs in web browsers — it cannot be used anywhere else.", answer: "false", explanation: "JavaScript now runs on servers (Node.js), in mobile apps, desktop apps, and smart devices. It is the world's most widely used programming language." },
      { type: "fill-blank", question: "An event ___ waits for a specific event and runs a function when it occurs.", options: ["listener", "selector", "variable", "handler"], answer: "listener", explanation: "Event listeners are how JavaScript knows when to run code. You attach a listener to an element and specify which event to watch for." },
      { type: "multiple-choice", question: "Which of these is a valid JavaScript variable declaration?", options: ["variable score = 0", "let score = 0", "set score to 0", "score := 0"], answer: "let score = 0", explanation: "JavaScript variables are declared with let or const followed by the name, an equals sign, and the value. let score = 0 is correct syntax." },
      { type: "true-false", question: "A function must be defined before it can be used in JavaScript.", answer: "false", explanation: "Function declarations are hoisted in JavaScript — the browser processes them before running the code, so you can call a function before it appears in the file. Function expressions are different." },
      { type: "fill-blank", question: "In JavaScript, text values like 'Hello World' are called ___.", options: ["strings", "arrays", "objects", "booleans"], answer: "strings", explanation: "A string is any piece of text in JavaScript. Strings are written inside single or double quotes and can be stored in variables, passed to functions, and manipulated." },
      { type: "multiple-choice", question: "What was JavaScript originally created to do?", options: ["Build mobile apps", "Make web pages interactive in browsers", "Run server-side code", "Style HTML elements"], answer: "Make web pages interactive in browsers", explanation: "JavaScript was created in 1995 specifically to add interactivity to web pages in the Netscape browser. Everything else it does today came later." },
      { type: "true-false", question: "CSS and JavaScript can both create animations on a webpage.", answer: "true", explanation: "CSS handles simple transitions and keyframe animations. JavaScript handles more complex, logic-driven animations and can control CSS animations programmatically." },
      { type: "fill-blank", question: "JavaScript can change what is on screen by modifying the ___.", options: ["DOM", "CSS", "HTML file", "server"], answer: "DOM", explanation: "The DOM is the live representation of the page in the browser. JavaScript modifies the DOM to add, remove, or change elements — which instantly updates what the user sees." },
      { type: "multiple-choice", question: "Which keyword creates a variable that cannot be reassigned?", options: ["let", "var", "const", "fixed"], answer: "const", explanation: "const stands for constant. Once you assign a value to a const variable, you cannot reassign it. Use const by default — it makes your code safer and easier to reason about." },
      { type: "true-false", question: "Every web browser in the world can run JavaScript natively without any plugins.", answer: "true", explanation: "JavaScript is the only programming language built into every browser. No installation or plugins needed — every browser runs JavaScript out of the box." }
    ]
  },
  {
    id: "terminal",
    title: "The Terminal",
    icon: "💻",
    unlocked: false,
    slides: [
      {
        type: "text",
        headline: "The terminal is a direct line to your computer",
        body: "The terminal is a text-based interface where you type commands to control your computer. Instead of clicking through folders and menus, you type instructions and your computer executes them instantly. It looks intimidating at first but it is just a different way of talking to your machine — more precise and much faster than clicking."
      },
      {
        type: "fact",
        text: "Every professional developer uses the terminal daily. It is not optional — it is the environment where almost all real software development happens."
      },
      {
        type: "analogy",
        headline: "The terminal is like texting your computer",
        visual: "💬",
        body: "Using a regular interface is like walking up to someone and pointing at what you want. Using the terminal is like texting them exact instructions. It takes more thought but you can say precisely what you mean, do multiple things at once, and automate tasks that would take forever if you did them by clicking."
      },
      {
        type: "text",
        headline: "You are always somewhere in the terminal",
        body: "The terminal always has a current location — a folder you are inside. This is called your working directory. Every command you run happens relative to where you are. Before doing anything, it is good practice to know where you are. The pwd command prints your current location. The ls command lists what is in the current folder."
      },
      {
        type: "image",
        headline: "Essential terminal commands",
        src: "assets/terminal-commands.svg",
        caption: "These six commands are enough to navigate any Unix-based system — Mac, Linux, and most servers."
      },
      {
        type: "text",
        headline: "Navigating with cd",
        body: "cd stands for change directory. It is how you move between folders. cd projects moves you into a folder called projects. cd .. moves you up one level to the parent folder. cd ~ takes you all the way back to your home directory. You will type cd hundreds of times every day as a developer."
      },
      {
        type: "text",
        headline: "Creating and deleting things",
        body: "touch creates a new empty file. mkdir creates a new folder. rm deletes a file — permanently, with no Trash. rm -rf deletes a folder and everything inside it. Be careful with rm — there is no undo. These commands are fast and powerful, which is exactly why developers use them instead of clicking."
      },
      {
        type: "fact",
        text: "The terminal on your Mac runs a shell called zsh. On Linux it is usually bash. They work almost identically for everyday commands."
      },
      {
        type: "text",
        headline: "The terminal is where you run programs",
        body: "Beyond navigating files, the terminal is where you run programs, install tools, start servers, and execute scripts. When you type claude in the terminal, you are running a program. When you type git push, you are running a program. The terminal is the control panel for everything you build."
      }
    ],
    reference: [
      { term: "Terminal",          definition: "A text-based interface for controlling your computer by typing commands." },
      { term: "Shell",             definition: "The program running inside your terminal that interprets your commands. Mac uses zsh, Linux uses bash." },
      { term: "pwd",               definition: "Print Working Directory — shows you the full path of the folder you are currently in." },
      { term: "ls",                definition: "List — shows all files and folders in your current directory. ls -a shows hidden files too." },
      { term: "cd",                definition: "Change Directory — moves you into a different folder. cd .. goes up one level. cd ~ goes home." },
      { term: "touch",             definition: "Creates a new empty file. Example: touch index.html creates a blank HTML file." },
      { term: "mkdir",             definition: "Make Directory — creates a new folder. Example: mkdir my-project creates a folder called my-project." },
      { term: "rm",                definition: "Remove — permanently deletes a file. rm -rf deletes a folder and all its contents. No undo." },
      { term: "Working Directory", definition: "The folder you are currently inside in the terminal. All commands run relative to this location." },
      { term: "Path",              definition: "The address of a file or folder on your computer. Example: /Users/will/Desktop/project." }
    ],
    matching: [
      {
        round: 1,
        pairs: [
          { term: "pwd",   match: "Shows your current location in the file system" },
          { term: "ls",    match: "Lists files and folders in the current directory" },
          { term: "cd",    match: "Moves you into a different folder" }
        ]
      },
      {
        round: 2,
        pairs: [
          { term: "touch", match: "Creates a new empty file" },
          { term: "mkdir", match: "Creates a new folder" },
          { term: "rm",    match: "Permanently deletes a file with no undo" },
          { term: "Shell", match: "The program that interprets your terminal commands" }
        ]
      }
    ],
    quiz: [
      { type: "multiple-choice", question: "You open a new terminal window and want to know what folder you are in. What do you type?", options: ["ls", "pwd", "cd", "whoami"], answer: "pwd", explanation: "pwd stands for Print Working Directory. It shows you the full path of your current location in the file system." },
      { type: "true-false", question: "The terminal is just for advanced users — most developers rarely use it.", answer: "false", explanation: "Every professional developer uses the terminal daily. It is the primary environment for running code, managing files, using Git, and installing tools." },
      { type: "fill-blank", question: "The ___ command lists all files and folders in your current directory.", options: ["ls", "pwd", "cd", "dir"], answer: "ls", explanation: "ls stands for list. It shows you what is in the current folder. ls -a shows hidden files too (files that start with a dot)." },
      { type: "multiple-choice", question: "You are in your home directory and want to move into a folder called projects. What do you type?", options: ["open projects", "go projects", "cd projects", "ls projects"], answer: "cd projects", explanation: "cd stands for change directory. cd projects moves you into the projects folder inside your current location." },
      { type: "true-false", question: "Deleting a file with rm sends it to the Trash where you can recover it.", answer: "false", explanation: "rm permanently deletes files immediately — there is no Trash, no undo. Always double-check before using rm, especially rm -rf." },
      { type: "fill-blank", question: "To go up one level to the parent folder in the terminal you type cd ___.", options: ["..", "up", "back", "~"], answer: "..", explanation: "cd .. moves you up one directory level. cd ~ takes you all the way back to your home directory." },
      { type: "multiple-choice", question: "You want to create a new empty file called style.css in the terminal. What do you type?", options: ["new style.css", "create style.css", "touch style.css", "make style.css"], answer: "touch style.css", explanation: "touch creates a new empty file with the name you specify. If the file already exists, touch just updates its timestamp." },
      { type: "true-false", question: "The terminal on a Mac runs a shell called zsh.", answer: "true", explanation: "macOS uses zsh as its default shell. Linux systems typically use bash. They work almost identically for everyday commands." },
      { type: "fill-blank", question: "The ___ command creates a new folder in the terminal.", options: ["mkdir", "touch", "cd", "rm"], answer: "mkdir", explanation: "mkdir stands for make directory. mkdir my-project creates a new folder called my-project in your current location." },
      { type: "multiple-choice", question: "What is the working directory?", options: ["A special folder for work files", "The folder you are currently inside in the terminal", "The folder where your terminal is installed", "Your desktop"], answer: "The folder you are currently inside in the terminal", explanation: "The working directory is your current location. All commands you run happen relative to this folder. Use pwd to see where you are." },
      { type: "true-false", question: "You can only run one command at a time in the terminal.", answer: "false", explanation: "You can chain commands, run commands in the background, and open multiple terminal windows or tabs. The terminal is highly flexible." },
      { type: "fill-blank", question: "rm -rf deletes a ___ and everything inside it permanently.", options: ["folder", "file", "terminal", "shell"], answer: "folder", explanation: "rm -rf is the most powerful delete command — it removes a directory and all its contents recursively and forcefully. Use it with great care." },
      { type: "multiple-choice", question: "You want to see hidden files in your current folder. What do you type?", options: ["ls", "ls -a", "ls --hidden", "show all"], answer: "ls -a", explanation: "ls -a shows all files including hidden ones. Hidden files start with a dot — like .gitignore and .env. The -a flag means 'all'." },
      { type: "true-false", question: "The terminal and the shell are exactly the same thing.", answer: "false", explanation: "The terminal is the window you see. The shell is the program running inside it that interprets your commands. Terminal = the interface. Shell = the interpreter." },
      { type: "fill-blank", question: "cd ___ takes you back to your home directory from anywhere.", options: ["~", "..", "/", "home"], answer: "~", explanation: "~ is a shortcut for your home directory. cd ~ always takes you back to /Users/yourname no matter where you are." },
      { type: "multiple-choice", question: "What does the terminal allow you to do that clicking through folders does not?", options: ["See file colors", "Automate repetitive tasks with scripts", "Open files in apps", "Create folders"], answer: "Automate repetitive tasks with scripts", explanation: "The terminal's biggest advantage is automation. You can write scripts that perform dozens of actions instantly — things that would take minutes of clicking." },
      { type: "true-false", question: "touch creates a new folder in the terminal.", answer: "false", explanation: "touch creates a new empty file. mkdir creates a new folder. It is easy to mix these up — remember: touch = file, mkdir = directory." },
      { type: "fill-blank", question: "A ___ is the address of a file or folder showing its location on your computer.", options: ["path", "url", "command", "shell"], answer: "path", explanation: "A path is the full address of a file or folder. Example: /Users/will/Desktop/project/index.html. Absolute paths start from the root. Relative paths start from your current location." },
      { type: "multiple-choice", question: "You are in ~/Desktop/project and type cd .. — where are you now?", options: ["Your home directory", "~/Desktop", "The root of your computer", "Inside the project folder"], answer: "~/Desktop", explanation: "cd .. moves you up exactly one level. From ~/Desktop/project, going up one level takes you to ~/Desktop." },
      { type: "true-false", question: "Running claude in the terminal launches the Claude Code program.", answer: "true", explanation: "When you type a program name in the terminal and press enter, the shell finds and runs that program. claude launches Claude Code, git runs Git, node runs Node.js, and so on." }
    ]
  }
];
