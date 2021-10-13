
(()=>{
    let toggleButtons = document.querySelectorAll('.site-header, .sidebar__toggle-sidebar');
  
    function toggleSidebar(e){
      
      document.getElementById('sidebar').classList.toggle('active');
      document.getElementById('sidebar-overlay').classList.toggle('overlay--show');
    }
  
    toggleButtons.forEach(function (toggleButton) {
      toggleButton.addEventListener('click', toggleSidebar)
    })
  })();