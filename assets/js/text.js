window.onload = function () {
  // 👀 Funny auto-refresh quotes
  const quotes = [
    "Crushes are like Wi-Fi signals… strong until you’re too scared to connect. Just confess already! 🥰",
    "Love is like a fart — if you force it, it’s probably poop. But if it’s real, let it out! 🤢",
    "Confess your love before they become someone else’s ‘good morning’ text! 🥱",
    "Do it now. Your future couple photos are waiting. 💏",
    "Love is in the air — and so is your awkward silence. Say something! 💖",
    "What's the worst that could happen? You die of embarrassment? At least it’s a romantic death. 💀",
    "You’ve rehearsed it 100 times in the shower. It’s time for opening night! 💪",
    "You miss 100% of the chances you don’t take — and 100% of the hugs you don’t ask for. 🤗",
    "Crushes don’t last forever — but regret might. Shoot your shot! 🔫",
    "Your heart already knows. Your brain is just being dramatic. 🧠",
    "Flirting is like fishing. If you don’t cast your line, you’ll never catch a soulmate. 👻",
    "Stop writing love letters in your head. Say it out loud before someone else does! 📢",
    "Even Google doesn’t have all the answers. Sometimes, the only way to know is to ask. 🙋🏻‍♂️",
    "The only thing more painful than rejection… is never knowing what could’ve been. 😁",
    "Your love life can’t start if your feelings are stuck in 'drafts'. 📑",
    "Confessing love is like jumping into a pool. It’s scary at first… but refreshing once you do it! 🏊‍♀️"
  ];

  const loveQuoteEl = document.getElementById('love-quote');
  function showRandomQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    loveQuoteEl.textContent = random;
  }

  showRandomQuote(); // show once immediately
  setInterval(showRandomQuote, 5000); // then every 5 sec

  // ✍️ Typewriter effect for famous love quotes
  const loveQuotes = [
    "I wish I had done everything on Earth with you. – F. Scott Fitzgerald",
    "You had me at hello. – Jerry Maguire",
    "Whatever our souls are made of, his and mine are the same. – Emily Brontë",
    "I would rather spend one lifetime with you than face all the ages of this world alone. – J.R.R. Tolkien",
    "Love is composed of a single soul inhabiting two bodies. – Aristotle"
  ];

  const typewriterEl = document.getElementById("typewriter");
  let quoteIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentQuote = loveQuotes[quoteIndex];
    const visibleText = currentQuote.substring(0, charIndex);
    typewriterEl.textContent = visibleText;

    if (!isDeleting && charIndex < currentQuote.length) {
      charIndex++;
      setTimeout(type, 50);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 25);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        quoteIndex = (quoteIndex + 1) % loveQuotes.length;
      }
      setTimeout(type, 1000);
    }
  }

  type(); // start typing
};
