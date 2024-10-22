idée : on met ce qu'on veut garder dans une variable
c'est géré dans widgets/menuhide.proc

ce qui affiche le menu, c'est menumodubox.phtml 
et la liste des menus à afficher est préparée dans un des menumodubox$i.proc

pour garder en mémoire n truc juste pendant la session, voir dans les scripts css de la page d'accueil.
Pour garder un truc en mémoire dans les préférences de la classe, voir useropts.proc dans modules/adm/light/proc...

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

à garder quand page d'accueil principale des classes  :

add_sheet,1,module=adm/class/sheet&sheet=31\
add_exam,1,module=adm/class/exam&exam=5\
participantview,1,style=student\
Score1,1,module=adm/class/userscore\
SE_config,1,module=adm/class/config\
classexo,1,module=classes/fr&special_parm=.nocache.\
modtool,1,module=adm/modtool

***************************
ci-dessous explication des différentes variables qui indiquent dans quelle genre de page d'accueil on se trouve...
*******************************

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
