jQuery(document).ready(function($) {
  // V�rifier qu'on est bien sur la page des scores
  if (window.location.href.indexOf('module=adm/class/userscore') !== -1) {
    
    // Trouver l'�l�ment table-scroll
    var $tableScroll = $('.table-scroll');
    
    if ($tableScroll.length > 0) {
      // Charger le contenu HTML depuis le fichier
      $.ajax({
        url: 'themes/Pion/badges.html',
        dataType: 'html',
        success: function(html) {
          // Ins�rer le HTML AVANT table-scroll
          $tableScroll.before(html);
        },
        error: function() {
          console.log('Impossible de charger badges.html');
        }
      });
    }
  }
});