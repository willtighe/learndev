/*
 * content.js
 *
 * Defines all learning content for the app:
 * - STAGES array containing every question, prompt, or exercise
 * - Each stage object describes its type, content, and expected answer
 * - No logic lives here — this file is pure data consumed by engine.js
 */

const STAGES = [
  { id: "web",        title: "How the Web Works", icon: "🌐", unlocked: true  },
  { id: "html",       title: "HTML",               icon: "🏗️", unlocked: false },
  { id: "css",        title: "CSS",                icon: "🎨", unlocked: false },
  { id: "javascript", title: "JavaScript",         icon: "⚡", unlocked: false },
  { id: "terminal",   title: "The Terminal",       icon: "💻", unlocked: false }
];
