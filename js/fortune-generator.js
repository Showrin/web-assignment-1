const fortuneList = [
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail."
];
const fortuneIndex = Math.round(Math.random() * 10) % 10;
const fortune = fortuneList[fortuneIndex];
const fortuneContainer = document.getElementById("js-fortune-box");

fortuneContainer.innerText = fortune;
