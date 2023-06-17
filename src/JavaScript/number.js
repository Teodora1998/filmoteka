const { reduceEachLeadingCommentRange } = require('typescript');

module.exports = () => {
  const renderPages = require('./body');

  let currentPage = 1;
  const numbersDiv = document.querySelector('.numbers');
  let currentHtmlElement = document.getElementById(`${currentPage}`);

  const rightBtn = document.querySelector('.right');
  const leftBtn = document.querySelector('.left');

  addRed();

  window.addEventListener('DOMContentLoaded', function () {
    renderPages(currentPage);
    renderNumbers();
  });

  function renderNumbers() {
    numbersDiv.innerHTML = '';

    for (let i = currentPage; i <= currentPage + 5; i++) {
      let numberDiv = document.createElement('div');
      numberDiv.classList.add('number');
      numberDiv.innerHTML = `${i}`;
      numberDiv.setAttribute('id', `${i}`);
      numbersDiv.appendChild(numberDiv);

      numberDiv.addEventListener('click', () => {
        currentPage = numberDiv.id;
        currentHtmlElement = document.getElementById(`${currentPage}`);
        renderPages(currentPage);
      });
    }
  }

  //   function toggleCurrentPage() {
  //     currentHtmlElement.classList.toggle('current-page');
  //   }

  function addRed() {
    currentHtmlElement.classList.add('current-page');
  }

  function deleteRed() {
    currentHtmlElement.classList.toggle('current-page');
  }

  rightBtn.addEventListener('click', () => {
    if (currentPage < 20) {
      console.log(currentPage);

      currentPage++;
      currentHtmlElement = document.getElementById(`${currentPage}`);
      renderPages(currentPage);
      renderNumbers();

      console.log(currentPage);
    }
  });

  leftBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      console.log(currentPage);
      currentPage--;
      currentHtmlElement = document.getElementById(`${currentPage}`);
      renderPages(currentPage);
      renderNumbers();
      console.log(currentPage);
    }
  });
};
