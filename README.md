# PROJET WEB SERVICE : Workout Helper
## Mathis COCO & Jules DUPUIS

**Le but de ce Service est de proposer des exercices de musculation qui seront liés au muscles disponible sur les applications de nos clients.** Avec notre API, chaque client peut:
- chercher un muscle et voir la liste des exercices qui font travailler ce muscle
- chercher un exercice et voir la liste des muscles qu'il fait travailler

Il y a aussi une fonctionnalité d'authentification qui permettra aux administrateurs de CREATE, UPDATE, DELETE (voir paragraphe Authentification)

### Installation

Pour faire fonctionner ce projet, veuillez tout d'abord l'importer sur votre ordinateur en local. Ensuite démarrez le logiciel **Docker Desktop**, si vous ne l'avez pas, vous pouvez l'installer. 

Vous pouvez démarrer un terminal situé dans le dossier racine du projet et commencer par bien installer tous les paquets du projet:

```
$ npm install
```
Vous allez pouvoir ensuite démarrer notre projet à l'aide de Docker avec la commande suivante:
```
$ docker compose up --build
```
Cette commande va créer des containers au sein de Docker et faire fonctionner notre projet.
Lorsque vous avez le message suivant sur votre terminal c'est que le service a bien démarré:

![Service bien démarré](https://cdn.discordapp.com/attachments/1161282688553062553/1202909230324260904/image.png?ex=65cf2b85&is=65bcb685&hm=78e053141b9ca03c4f46b9fc3fa06b7df4cb5d4fd440799749ad901f556a3683&)

Vous pouvez donc démarrer votre navigateur et accéder au service en localhost:
```
http://localhost:3000/api
```
Ici vous pouvez jouer avec l'api, si vous êtes authentifié vous pouvez "Post", "Update" et "Delete" 

![Aperçu de la fenetre API](https://cdn.discordapp.com/attachments/1161282688553062553/1202910696967376906/image.png?ex=65cf2ce3&is=65bcb7e3&hm=6acd313c59690fa5dbee5b5d131f65aa5a15e177dd74a86ec6539a89fec5e1ea&)

### Authentification

La méthode d'authentification est simple, vous pouvez développer la méthode POST "/auth/login" , cliquer sur le bouton "Try it out" puis directement le bouton "Execute". Cette commande vous donne un "access_token" que vous devez copier et mettre dans le champ en cliquant (en haut de la page) sur le bouton "Authorize". Après cela vous avez les droits pour POST, UPDATE et DELETE, donc le création de muscle, d'exercice, leur modification et leur suppression.

### Outils 

Certains outils sont disponibles avec notre programme, vous pouvez accéder à:
- Grafana (localhost:3001)
- Prometheus (localhost:9090)