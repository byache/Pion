console.log('Script wims_item_cliquables.js chargé');
document.querySelectorAll(
  '.wims_sheet_item, .wims_doc_item, .wims_vote_item, .wims_exam_item, .wims_exo_item, .wims_freework_item'
).forEach(function(div) {
  div.addEventListener('click', function(e) {
    // Évite le double-clic si l'utilisateur clique directement sur le lien
    if (e.target.tagName.toLowerCase() !== 'a') {
      var link = div.querySelector('a');
      if (link) window.location = link.href;
    }
  });
});