TODO : 

[ ] lien "fermer cette fenetre" en haut page exercice dans examen : changer la couleur pour avoir la couleur des autres liens du bandeau du haut + idem pour les lien "accueil et deconnexion" en vue élève.
[ ] refaire que le bandeau du haut reste fixe quand on descend dans la page (pourquoi cela a-t-il disparu ?)
[ ] remettre les liens de l'accueil de la zone prof (mais en bas où alors seulement sur grands écrans) c'est un appel de "widgets/menuprof.phtml"
[ ] css : revoir les tabs des sequences en utilisant https://get.foundation/sites/docs/responsive-accordion-tabs.html#
[ ] css : logo wims accueil mal centré sur grand ecran
[ ] css : voir modif class show-for-medium dans choix_enseignant_eleve.phtml (cf email)
[ ] ajouter choix langue dans title bar au moins sur grands ecrans
[ ] vue eleve : enlever le fil d'ariane, le menu hamburger (mettre "contacter mon enseignant en pied de page" ?), aligner le nom à gauche, verifier que tout va bien dans la vue prof
[ ] css : pour le fil d'ariane et la liste des zones de travail accueil prof : faire une classe css qui tronque le texte quand un texte dépasse une certaine longueur (25% largeur fenêtre ?) voir exemple ici : https://blog.logrocket.com/ux-design/designing-mobile-breadcrumbs/#truncate-labels
[ ] fichiers ariane.phtml et ariane.proc : mieux comprendre comment s'affiche le texte en français des intitulés de menus et faire un truc propre parce que pour le moment c'est très bricolé.
[ ] dans une feuille de travail, le message avec la note et si elle est activée ou pas a disparu ?
[ ] vérifier les menus dans etabl / groupements / classe pour élève (ils ne sont pas les mêmes menus que pour le thème nikaia)(ou vérifier par rapport à Pion2)
[ ] vérifier le chrono à page accueil examen sur mobile
[ ] menus : où sont passés tous les menus de l'entrée dans zone enseignant ? (voir pion2) 
[ ] appliquer la classe css "show-for-medium" à de nombreux éléments
[ ] verifier sur mobile le carroussel
[ ] vérifier sur mobile les informations
[ ] prendre en compte le favicon
[ ] tester le menu sandwich sur un vrai téléphone
[ ] améliorer affichage des "onglets" sur téléphone (onglets à la page d'accueil élève et prof)
[ ] enlever le widget de logout si on n'est pas connecté
[ ] mettre le widget de logout partout
[ ] le bouton d'aide a disparu par rapport à nikaia, en tant qu'élève
[ ] ajouter certains menus dans certaines pages (par ex dans "séquences" -> raccourci vers vue eleve...)
[ ] 


FAIT : 

[X] Pion/_widget/ariane.phtml : correction à faire car 1° dans un portail, le file d'ariane affiche parfois "BACKGATEWAY [nom de niveau] 1" (quand on fait gestion de structure) et 2° il affiche parfois des guillemets "" autour de "CONFIGURATION ET MAINTENANCE DE LA CLASSE" (ce qui est bizarre car le texte devrait avoir changé)
[x] renommé en "Pion"
[x] changement de couleur 
[x] créé classe test
[x] configuré le serveur en local
[x] créé le favicon
[x] mis des commentaires "start" et "end" de partout
[x] envoyer sur github
[x] revoir largeur des trois boites page accueil principale
[x] utiliser la classe css "show-for-medium" de foundation pour cacher des éléments sur les petits écrans
[x] menu simplifié à gauche
[x] menu simplifié en pied de page
[x] faire le bouton "menu simplifié"
[x] raccourcir le fil d'Ariane (enlever le "page d'accueil" devant chaque lien)
[x] mettre un menu sandwich
[x] vérifier côté élève : le menu n'est pas bon
[x] appeler sandwich/sandwich2 au lieu de menumodubox dans supervisor.phtml
[x] vérifier les menus dans etabl / groupements + vérifier avec un autre thème si tous les menus sont ok -> fait pour prof
[x] revoir css du menu : changer qqch pour harmoniser les listes d'une page à l'autre
[x] css : changer la largeur du menu sandwich (pour que le bouton de fermeture soit plus à droite)
[x] css : mettre la taille de la div "class=menu" en css (actuellement elle est codée en dur dans sandwich et sandwich2)
[x] css : taille du texte dans les menus
[x] css : taille du bouton du menu sandwich : min-width: 20px;
[x] revoir le fil d'ariane
[x] remettre un truc pour quitter la vue élève depuis page accueil prof
[x] ne pas afficher le menu s'il est vide...
[x] remettre les menus d'aide, à propos et retour à la liste des exercices dans un examen... (wims_hm dans themes/_widgets/headmenu.phtml)
[x] verifier l'affichage du div menu2 et menu2bis


