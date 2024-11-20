# Base de donnée

- mysql:
    'USER': 'root', <!--à configurer selon le votre dans le settings.py -->
    'PASSWORD': '',<!--à configurer selon le votre dans le settings.py -->
    'HOST': '127.0.0.1',<!--à configurer selon le votre dans le settings.py -->
    'PORT': '3306',<!--à configurer selon le votre dans le settings.py -->
    gestiondestaches_db <!--Anarany base de donnée, créer-na tanana avela vide fa tsy asiana table -->

# Command Pour lancer le BACKEND

$
cd backend %Miditra ao aminy coté serveur
pip install -r requirement.txt %Rehefa hi-installer dépendances
py manage.py createsuperuser %Rehefa hi-créer ADMIN hi-gerer Utilisateurs
py manage.py runserver >> http://127.0.0.1:8000
$

# Command Pour lancer le FRONTEND

$
cd frontend %Miditra ao aminy coté client
npm install %Rehefa hi-installer dépendances
npm run dev >> localhost:5173
$

# Test technique dev python : création d’une application simple de liste de tâches utilisant Django

- Authentification d’utilisateur (inscription et connexion des utilisateurs) -Vita
- Listes de tâches spécifiques à l’utilisateur -Vita
- Gestion de la liste de tâches -Vita
- Créer, lire, mettre à jour et supprimer des éléments de tâche (CRUD) -Vita
- Marquer les tâches à accomplir comme terminées -Vita
- Filtrer les tâches à effectuer par statut (terminé, incomplet) -Vita
