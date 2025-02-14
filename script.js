// This JavaScript will handle some basic interactions, like hover effects for the movies
document.querySelectorAll('.row__poster').forEach(poster => {
    poster.addEventListener('mouseenter', () => {
      poster.style.transform = 'scale(1.2)';
    });
    
    poster.addEventListener('mouseleave', () => {
      poster.style.transform = 'scale(1)';
    });
  });
  