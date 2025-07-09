Attention : deux modifs à faire dans public_html/modules/home 

1) dans var.def

#ajouté pour le thème pion
any: menusimpl

2) Dans var.init

#pour le theme pion
!if $menusimpl=$empty
  !set menusimpl=1
!endif


------------ structure générale sur les menus : -----------------------
template prof : supervisor.phtml
	si class_type=4 ou class_type=3 et class_typename=level :
			!read themes/_procs/menumodubox3.proc 
			!read themes/$wims_theme/widgets/sandwich2.phtml 
	
	je ne sais pas quand : il est appelé dans html/... des dossiers qui ne sont pas dans le dossier themes
		fichier header.phtml
			fichier widgets/topbox.phtml
				_widgets/site_title.phtml
				_widgets/ariane.phtml
				widgets/sandwich.phtml
					si $module=home, 
						création du menu sandwich
						_widgets/user_links.phtml
					sinon ne fait rien
					
	je ne sais pas quand (apparemment tout le temps sauf si le module est home), ni par qui il est appelé :
		fichier tail.phtml
			widgets/sandwich2.phtml -> création du menu sandwich
	
	dans tous les cas, pour le menu de pied de page :
		!read themes/_procs/supervisormenubox.proc
		!if $menusimpl=1 
		   !read themes/$wims_theme/widgets/menuhide.proc
		!endif
		!read themes/_widgets/menubox.phtml 

template eleve OU prof dans portail OU prof dans groupement de classes : user.phtml
	je ne sais pas quand : il est appelé dans html/... des dossiers qui ne sont pas dans le dossier themes
		fichier header.phtml ETC : voir dans le template prof ci-dessus, mais finit par arriver à la création du menu sandwich

-----------------------------------
idée : on met ce qu'on veut garder dans une variable
c'est géré dans widgets/menuhide.proc

ce qui affiche le menu, c'est menumodubox.phtml 
et la liste des menus à afficher est préparée grâce à la liste wims_rm_0 dans un des menumodubox$i.proc

ce qui affiche le menu de pied de page est dans supervisor.phtml puis dans menubox.phtml
ce qui crée la liste wims_rm_1 est dans supervisormenubox.proc puis dans supervisor.phtml

pour garder en mémoire n truc juste pendant la session, voir dans les scripts css de la page d'accueil.
Pour garder un truc en mémoire dans les préférences de la classe, voir useropts.proc dans modules/adm/light/proc...

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
si le hamburger ne marche pas, vérifier : ligne 7 de widget/footer_foundation :
  <script src="html/themes/$wims_theme/_inc/foundation/foundation.js"></script>

Il y a deux comportements concernant le menu : la page d'accueil où le menu est construit dans Pion/topbox.phtml 
et les autres pages où le menu est construit dans Pion/tail.phtml...

%%%%%%%%%%%%%%%%%%%%%%%%%%

à garder quand page d'accueil principale des classes  :

MENU DE GAUCHE :

add_sheet,1,module=adm/class/sheet&sheet=31\
add_exam,1,module=adm/class/exam&exam=5\
participantview,1,style=student\
Score1,1,module=adm/class/userscore\
SE_config,1,module=adm/class/config\
classexo,1,module=classes/fr&special_parm=.nocache.\
modtool,1,module=adm/modtool

MENU PIED DE PAGE : 
text_icon mail,01,<a class="text_icon mail" href="mailto:paul@byache.fr?subject=">Nous contacter</a>
stat,1,module=adm/stat/stat
mod_new,1,module=adm/new
SE_mod,1,module=adm/class/motd

***************************
ci-dessous explication des différentes variables qui indiquent dans quelle genre de page d'accueil on se trouve...
*******************************

!! class_type=0 -> accueil classe individuelle
!! class_type=1 -> accueil classe dans un groupement ou accueil cours dans portail
!! class_type=2 -> accueil groupement
!! class_type=3 -> accueil niveau ou programme ou classe dans portail
!! class_type=4 -> accueil portail

DETAILS :

accueil portail en gestion de structure :

wims_typename : portal
wims_supertype : 4
wims_class : 6482201
class_type : 4
class_typename : portal
class_ent_n0 : 0 

accueil portail :

wims_typename : portal
wims_supertype : 4
wims_class : 6482201
class_type : 4
class_typename : portal
class_ent_n0 : 0 

accueil niveau en gestion de structure :

wims_typename : portal
wims_supertype : 4
wims_class : 6482201
class_type : 3
class_typename : level
class_ent_n0 : 

accueil niveau :

wims_typename : level
wims_supertype : 4
wims_class : 6482201/1
class_type : 3
class_typename : level
class_ent_n0 : 0 

accueil programme dans portail en gestion de structure :

wims_typename : portal
wims_supertype : 4
wims_class : 6482201
class_type : 3
class_typename : program
class_ent_n0 : 

accueil programme dans portail:

wims_typename : program
wims_supertype : 4
wims_class : 6482201/1/201
class_type : 3
class_typename : program
class_ent_n0 : 0 

accueil classe dans portail en gestion de structure :

wims_typename : portal
wims_supertype : 4
wims_class : 6482201
class_type : 3
class_typename : class
class_ent_n0 : 

accueil classe dans portail :

wims_typename : class
wims_supertype : 4
wims_class : 6482201/1/101
class_type : 3
class_typename : class
class_ent_n0 : 0 

accueil cours dans portail en gestion de structure:

wims_typename : portal
wims_supertype : 4
wims_class : 6482201
class_type : 1
class_typename : course
class_ent_n0 : 

accueil cours dans portail

wims_typename : course
wims_supertype : 4
wims_class : 6482201/1/101/201
class_type : 1
class_typename : course
class_ent_n0 : 0 

accueil groupement : 

wims_typename : group
wims_supertype : 2
wims_class : 4935619
class_type : 2
class_typename : group 

accueil classe dans un groupement :

wims_typename : class
wims_supertype : 2
wims_class : 4935619/1
class_type : 1
class_typename : class
class_ent_n0 : 0 

accueil classe indiv :

wims_typename : class
wims_supertype : 0
wims_class : 7573131
class_type : 0
class_typename : class
class_ent_n0 : 0 

***************************
ce qui est dans wims_rm_0 : 
******************0***********
itemsep,0,Ajout d'activités
add_sheet,1,module=adm/class/sheet&sheet=31
add_exam,1,module=adm/class/exam&exam=5
reorder,1,module=adm/class/sequence
participantview,1,style=student
itemsep,0,Gestion
usermanage,1,module=adm/class/usermanage
csv,1,module=adm/class/userscore&+job=csv
itemsep,0,Bilan des évaluations
Score1,1,module=adm/class/userscore
activity,1,module=adm/class/activity
swork,1,module=adm/class/swork
class_stat,1,module=adm/class/stat
itemsep,0,Communication
sendmail,1,module=adm/class/sendmail
itemsep,0,Configuration
SE_config,1,module=adm/class/config
itemsep,0,Liens externes
U_oclass,1,module=adm/class/classes&type=supervisor&class=
itemsep,0,Documentation
itemsep,0,Création de ressources
classexo,1,module=classes/fr&special_parm=.nocache.
modtool,1,module=adm/modtool

******************************
ce qui est dans wims_rm_1 :
*******************************
text_icon mail,01,<a class="text_icon mail" href="mailto:paul@byache.fr?subject=">Nous contacter</a>
stat,1,module=adm/stat/stat
mod_new,1,module=adm/new
menublock,0,
participantview,1,style=student
SE_mod,1,module=adm/class/motd
menublock,0,
cdt,1,module=adm/class/cdt
forum ,1,module=adm/forum/mboard
menublock,0,
SE_config,1,module=adm/class/config


# Fonctionnement du fil d'Ariane et adaptations :

Pour raccourcir les liens du fil d'Ariane, j'ai supprimé le texte "page d'accueil" de chaque mini-lien.

Tout se passe dans themes/_widgets/ariane.phtml, qui utilise scripts/adm/oneitem.phtml pour ajouter les éléments du fil d'Ariane un par un.
Il existe une variable wims_name_class_home qui contient la chaîne de caractères "Page d'accueil", elle est initialisée par html/name.ptml.fr (l. 237).
On surcharge cette variable avec le fichier de langue du thème Pion/lang/home_name.fr en $empty (appelé dans Pion/header.phtml)

Enfin, petite modif à ariane.phtml : aucun mot ne s'affichant pour la racine du fil d'ariane, l'élément n'était pas généré.
J'ai donc ajouté un test : si aucun mot n'est à afficher, on affiche alors "Accueil".
Ces modifications faites, j'ai placé le nouveau ariane.ptml dans themes/Pion/_widgets et j'ai modifié en conséquence le document themes/Pion/widget/topbox.phtml pour lui dire de chercher la version modifiée.

# Pour donner l'autofocus au moment du login : impossible de faire les modifs en local, il faut toucher deux fichiers de modules/adm/class/classes/ :

# dans [public_html/modules/adm/class/classes/authsupervisor.phtml] :
## autofocus sur le champ du mot de passe (puisque pas de nom d'utilisateur demandé)
ligne 18 
     <input class="noicon" type="password" size="20" name="auth_password" id="password" required="required" placeholder="$name_sup">
remplacée par
     <input class="noicon" type="password" size="20" name="auth_password" id="password" required="required" placeholder="$name_sup" autofocus>

# dans [public_html/modules/adm/class/classes/authsparticipant.phtml] :
## autofocus sur le champ du nom d'utilisateur
ligne 34
     <input class="noicon" type="text" size="20" name="auth_user" value="$auth_user" id="login" required="required" placeholder="$wims_name_Login">
remplacée par
     <input class="noicon" type="text" size="20" name="auth_user" value="$auth_user" id="login" required="required" placeholder="$wims_name_Login" autofocus>


# Hack javascript pour déplacer le chrono depuis le menu -> dans la barre de titre

J'ai ajouté un hack javascript pour déplacer le chrono des exercices :
Ce script (dans header.phtml) sélectionne le chrono (li.chrono) puis change son parent.
Le même script sélectionne aussi l'horloge de l'examen (exam_clock), mais au lieu de le déplacer, il le duplique : un exemplaire est ajouté à la suite du titre (euler_wims_title)
Des modifs CSS (dans _css/pion.css) sont apportées pour bien placer / mettre en forme ces chronos.
