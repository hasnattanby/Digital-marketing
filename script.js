function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function searchTopics(query) {
  const list = document.getElementById("topicList").getElementsByTagName("li");
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    item.style.display = item.textContent.toLowerCase().includes(query.toLowerCase()) ? "" : "none";
  }
}

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
