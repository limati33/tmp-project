let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = 2;

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const container = document.querySelector('.carousel-container');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function submitRSVP() {
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    const message = document.getElementById('rsvp-message');

    if (name.trim() === '') {
        message.textContent = 'Аты-жөніңізді енгізіңіз!';
        return;
    }

    message.textContent = attendance === 'yes' 
        ? `${name}, сіздің келетініңізді растадық! Тойда күтеміз!`
        : `${name}, өкінішке орай, келмейтніңізді білдік.`;

    document.getElementById('name').value = '';
    document.getElementById('attendance').value = 'yes';
}

function generateCalendar() {
    const calendarDates = document.getElementById('calendar-dates');
    const eventDate = new Date(2025, 5, 20); // 20 июня 2025
    const firstDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(eventDate.getFullYear(), eventDate.getMonth() + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date';
        calendarDates.appendChild(emptyCell);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'calendar-date';
        dateCell.textContent = i;
        
        if (i === eventDate.getDate()) {
            dateCell.classList.add('event-day');
        }
        
        calendarDates.appendChild(dateCell);
    }
}

window.onload = generateCalendar;

const pauseButton = document.getElementById('pauseButton');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = true;

pauseButton.addEventListener('click', function() {
  if (isPlaying) {
    backgroundMusic.pause();
    pauseButton.textContent = 'Продолжить';
    isPlaying = false;
  } else {
    backgroundMusic.play();
    pauseButton.textContent = 'Пауза';
    isPlaying = true;
  }
});