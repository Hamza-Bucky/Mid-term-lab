const cups = document.querySelectorAll('.cup-small'),
  litersremaining = document.getElementById('liters'),
  percentage = document.getElementById('percentage'),
  remainedliters = document.getElementById('remained');

updateCups();

cups.forEach((cup, idx) => cup.addEventListener('click', () => selectCup(idx)));

function selectCup(idx) {
  if (idx === 7 && cups[idx].classList.contains('full')) idx--;
  else if (cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')) idx--;

  cups.forEach((cup, idx2) => {
    idx2 <= idx ? cup.classList.add('full') : cup.classList.remove('full');
  });

  updateCups();
}

function updateCups() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = cups.length;
    const maxLiters = 2;
  
    const percentageHeight = (fullCups / totalCups) * 100;
    const remainingLiters = (maxLiters - (maxLiters * percentageHeight / 100)).toFixed(2);
  
    percentage.style.visibility = fullCups === 0 ? 'hidden' : 'visible';
    percentage.style.height = fullCups === 0 ? 0 : `${percentageHeight}%`;
    percentage.innerText = fullCups === 0 ? '0%' : `${percentageHeight}%`;
  
    remained.style.visibility = fullCups === totalCups ? 'hidden' : 'visible';
    remained.style.height = fullCups === totalCups ? 0 : 'auto';
    litersremaining.innerText = fullCups === totalCups ? '' : `${remainingLiters}L`;
  }
