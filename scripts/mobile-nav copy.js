// Simple mobile nav toggle
(function(){
  var menuButton = document.querySelector('.menu3d6DYNDa3tk5');
  var sidebar = document.getElementById('hub-sidebar');
  var overlay = document.getElementById('mobile-overlay');
  if(!menuButton || !sidebar || !overlay){return;}

  function openNav(){
    sidebar.classList.add('is-open');
    overlay.hidden = false;
    menuButton.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav(){
    sidebar.classList.remove('is-open');
    overlay.hidden = true;
    menuButton.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }
  function toggleNav(){
    if(sidebar.classList.contains('is-open')){ closeNav(); } else { openNav(); }
  }

  menuButton.addEventListener('click', toggleNav);
  overlay.addEventListener('click', closeNav);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeNav(); }
  });
})();


