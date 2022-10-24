const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');

const navToggleBtn = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.navbar-links');
const navLink = document.querySelectorAll('.nav-link');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active');
    });
    target.classList.add('active');
  });
});

navToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
