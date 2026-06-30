<script>
  const menuToggle = document.querySelector('.menu-toggle');
  const menuBar = document.querySelector('.sidebar');
  let deployed = 0;

  menuToggle.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    deployed = 1;
  });
  
  document.addEventListener('click', handleClickOutside);
  function handleClickOutside(event) {
    // Check if the clicked element is NOT inside sidebar
    if (deployed != 0 && !event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
        menuBar.classList.toggle('active');
        deployed = 0;
    }
}
</script>