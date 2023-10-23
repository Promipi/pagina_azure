const newspapers = [
    "https://www.abc.com.py",
    "https://www.ultimahora.com",
    "https://www.bbc.com"
  ];
  
  let currentNewspaperIndex = 0;
  const newspaperFrame = document.getElementById("newspaperFrame");
  const previousBtn = document.getElementById("previousBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  function loadNewspaper(index) {
    newspaperFrame.src = newspapers[index];
  }
  
  previousBtn.addEventListener("click", () => {
    currentNewspaperIndex = (currentNewspaperIndex - 1 + newspapers.length) % newspapers.length;
    loadNewspaper(currentNewspaperIndex);
  });
  
  nextBtn.addEventListener("click", () => {
    currentNewspaperIndex = (currentNewspaperIndex + 1) % newspapers.length;
    loadNewspaper(currentNewspaperIndex);
  });
  
  loadNewspaper(currentNewspaperIndex);