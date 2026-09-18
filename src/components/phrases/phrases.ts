

export const phrases = [
    "I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion",
    "We are what we repeatedly do. Excellence then is not an act but a habit.",
    "The body achieves what the mind believes.",
    "The hard days are the best because that's when champions are made, so if you push through, you can push through anything.",
    "If you don't find the time, if you don't do the work, you don't get the results.",
    "Dead last finish is greater than did not finish, which trumps did not start.",
    "Push harder than yesterday if you want a different tomorrow.",
    "The real workout starts when you want to stop.",
    "Take care of your body. It's the only place you have to live.",
    "I've failed over and over again in my life and that is why I succeed.",
    "Once you are exercising regularly, the hardest thing is to stop it.",
    "The secret of getting ahead is getting started.",
    "Exercise should be regarded as tribute to the heart",
    "Most people fail, not because of lack of desire, but, because of lack of commitment.",
    "You miss one hundred percent of the shots you don't take.",
    "If something stands between you and your success, move it. Never be denied.",
    "All progress takes place outside the comfort zone.",
    "Just believe in yourself. Even if you don't, just pretend that you do and at some point, you will.",
    "It's hard to beat a person who never gives up.",
    "Do something today that your future self will thank you for.",
    "Success is usually the culmination of controlling failure.”",
    "Confidence comes from discipline and training.",
    "You must expect things of yourself before you can do them.",
    "Motivation is what gets you started. Habit is what keeps you going."
]

export function getPhrase() {
        const phrase = phrases[Math.floor(Math.random() * phrases.length)]

        return phrase
}