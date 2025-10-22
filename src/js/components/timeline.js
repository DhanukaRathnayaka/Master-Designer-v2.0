document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.see-more-btn').forEach(function(button) {
      button.addEventListener('click', function() {
        const description = this.previousElementSibling;
        if (description.style.display === 'none' || description.style.display === '') {
          description.style.display = 'block';
          this.textContent = 'See less';
        } else {
          description.style.display = 'none';
          this.textContent = 'See more';
        }
      });
    });
  });
  