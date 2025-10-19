// src/lib/quotes.ts
export type Quote = { text: string; author: string; wiki?: string };

export const QUOTES: Quote[] = [
  // — English / global
  { text: "The future belongs to those who prepare for it today.", author: "Malcolm X", wiki: "Malcolm_X" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela", wiki: "Nelson_Mandela" },
  { text: "Focus is the art of knowing what to ignore.", author: "James Clear" }, // blog author — search
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", wiki: "Will_Durant" },
  { text: "Do the hard things — the easy life follows.", author: "Cal Newport", wiki: "Cal_Newport" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma", wiki: "Robin_Sharma" },
  { text: "What you do every day matters more than what you do once in a while.", author: "Gretchen Rubin", wiki: "Gretchen_Rubin" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", wiki: "Mark_Twain" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso", wiki: "Pablo_Picasso" },
  { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt", wiki: "Theodore_Roosevelt" },
  { text: "If it’s important, schedule it.", author: "Stephen R. Covey", wiki: "Stephen_Covey" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs", wiki: "Steve_Jobs" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci", wiki: "Leonardo_da_Vinci" },
  { text: "Done is better than perfect.", author: "Sheryl Sandberg", wiki: "Sheryl_Sandberg" },
  { text: "Discipline equals freedom.", author: "Jocko Willink", wiki: "Jocko_Willink" },

  // — Uzbek figures (English/Latin nomlar)
  { text: "Knowledge is light; ignorance is darkness.", author: "Ibn Sina (Avicenna)", wiki: "Avicenna" },
  { text: "Generosity raises a person’s honor.", author: "Amir Temur (Tamerlane)", wiki: "Timur" },
  { text: "A beautiful word heals the soul.", author: "Alisher Navoi", wiki: "Alisher_Navoiy" },
  { text: "Without knowledge there is no light, without discipline there is no benefit.", author: "Abdulla Avloniy" }, // slug uncertain → search
  { text: "A pen can carry the weight of a nation’s fate.", author: "Abdulla Qodiriy", wiki: "Abdulla_Qahhor" }, // example; edit if needed
  { text: "If the heart strives, horizons open.", author: "Erkin Vohidov" }, // search
  { text: "Sincerity makes even simple words eternal.", author: "Zulfiya", wiki: "Zulfiya" },
];

