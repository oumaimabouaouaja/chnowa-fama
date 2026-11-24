# Test Cases — CHNOWA FAMA

## 1. Objectif

Ce document présente les cas de test fonctionnels et API conçus à partir des exigences fonctionnelles de CHNOWA FAMA, conformément aux principes ISTQB.

## 2. Informations générales

| Élément | Description |
|---|---|
| Projet | CHNOWA FAMA |
| Responsable | Membre 3 |
| Branche | feature/testing |
| Approche | Tests fonctionnels boîte noire |
| Frontend | http://localhost:5173 |
| Backend | http://localhost:4000 |
| Base de données | chnowa_fama_test |
| Outils | Chrome, Postman, pgAdmin |

## 3. Préconditions générales

- Backend et Frontend opérationnels.
- Base PostgreSQL de test initialisée.
- Version Git du projet identifiée.
- Comptes fictifs disponibles selon les besoins.
- Événements de test disponibles pour les scénarios concernés.
- Règles métier et exigences applicables confirmées.

## 4. Données de test

| Identifiant | Description |
|---|---|
| DATA01 | Utilisateur de test avec email valide |
| DATA02 | Email invalide : testexample.com |
| DATA03 | Mot de passe valide : Test@2026 |
| DATA04 | Mot de passe incorrect |
| DATA05 | Organisateur non approuvé |
| DATA06 | Organisateur approuvé |
| DATA07 | Administrateur de test |
| DATA08 | Événement disponible |
| DATA09 | Événement complet |
| DATA10 | Événement nécessitant une candidature |
| DATA11 | Token JWT valide |
| DATA12 | Token JWT invalide |

## 5. Tests d'authentification

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC01 | RF01 | Inscription valide | Remplir le formulaire avec des données valides et soumettre | Compte créé |
| TC02 | RF02 | Email invalide | Saisir testexample.com et soumettre | Inscription refusée |
| TC03 | RF03 | Email déjà utilisé | Réutiliser un email enregistré | Doublon refusé |
| TC04 | RF04 | Connexion valide | Saisir les identifiants d'un compte existant | Connexion réussie |
| TC05 | RF05 | Mot de passe incorrect | Saisir un email existant et un mauvais mot de passe | Connexion refusée |
| TC06 | RF05 | Email inexistant | Saisir un email non enregistré | Connexion refusée |
| TC07 | RF02 | Champs obligatoires vides | Soumettre un formulaire d'inscription incomplet | Erreur de validation |
| TC08 | RF02 | Mot de passe non conforme | Saisir un mot de passe ne respectant pas les règles | Inscription refusée |
| TC09 | RF06 | Déconnexion | Cliquer sur Quitter après connexion | Session terminée |

## 6. Tests de gestion du profil

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC10 | RF07 | Consultation du profil | Se connecter et ouvrir Profil | Informations du compte affichées |
| TC11 | RF08 | Modification du profil | Modifier un champ autorisé et enregistrer | Modification enregistrée |
| TC12 | RF09 | Gestion des intérêts | Sélectionner un centre d'intérêt et enregistrer | Préférence enregistrée si fonctionnalité disponible |

## 7. Tests de consultation des événements

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC13 | RF10 | Liste des événements | Ouvrir Explorer | Événements disponibles affichés |
| TC14 | RF11 | Recherche valide | Rechercher le titre d'un événement existant | Résultat correspondant affiché |
| TC15 | RF11, RF15 | Recherche sans résultat | Rechercher un mot-clé inexistant | Aucun résultat correspondant |
| TC16 | RF12 | Filtre par région | Sélectionner une région | Événements de la région affichés |
| TC17 | RF13 | Filtre par catégorie | Sélectionner une catégorie disponible | Résultats correspondants |
| TC18 | RF14 | Détails d'un événement | Ouvrir un événement existant | Informations détaillées affichées |
| TC19 | RF15 | Liste vide | Consulter une liste sans événement | Message approprié affiché |

## 8. Tests de gestion des favoris

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC20 | RF16 | Ajouter un favori | Se connecter et ajouter un événement aux favoris | Favori enregistré |
| TC21 | RF17 | Supprimer un favori | Retirer un événement déjà ajouté | Favori supprimé |
| TC22 | RF18 | Consulter les favoris | Ouvrir la page Favoris | Liste personnelle affichée |
| TC23 | RF19 | Favori en double | Répéter une demande d'ajout du même événement | Aucun doublon créé |

## 9. Tests de participation et candidatures

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC24 | RF20 | Participation valide | Rejoindre un événement disponible | Participation enregistrée |
| TC25 | RF21 | Participation en double | Répéter l'inscription au même événement | Doublon refusé |
| TC26 | RF22 | Événement complet | Essayer de participer à un événement ayant atteint sa capacité | Participation refusée |
| TC27 | RF23 | Soumettre une candidature | Remplir et envoyer le formulaire de candidature | Candidature enregistrée |
| TC28 | RF24 | Consulter ses événements | Ouvrir Mes événements | Participations et candidatures affichées selon les fonctionnalités prévues |

## 10. Tests de gestion des organisateurs

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC29 | RF25 | Demande organisateur | Remplir et soumettre une demande valide | Demande enregistrée |
| TC30 | RF26 | Consultation du statut | Ouvrir l'espace Organisateur après soumission | Statut correct affiché |
| TC31 | RF27 | Publication non autorisée | Essayer de publier avec un compte non approuvé | Publication refusée |
| TC32 | RF28 | Création événement | Créer un événement valide avec un compte approuvé | Événement enregistré |
| TC33 | RF29 | Modification événement | Modifier un événement appartenant à l'organisateur | Modification enregistrée |
| TC34 | RF30 | Suppression événement | Supprimer son propre événement | Suppression effectuée si autorisée |
| TC35 | RF31 | Consultation des participants | Consulter les participants de son événement | Liste correspondante affichée |

## 11. Tests d'administration

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC36 | RF32 | Dashboard Admin | Se connecter avec un administrateur | Dashboard accessible |
| TC37 | RF33 | Demandes organisateurs | Consulter les demandes en attente | Demandes affichées |
| TC38 | RF34 | Approbation organisateur | Approuver une demande en attente | Statut mis à jour |
| TC39 | RF35 | Refus organisateur | Refuser une demande en attente | Statut mis à jour si le refus est implémenté |

## 12. Tests de sécurité et autorisations

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC40 | RF36 | Accès sans authentification | Accéder directement à une ressource protégée | Accès refusé |
| TC41 | RF37 | Accès Admin non autorisé | Accéder aux fonctions Admin avec un compte simple | Accès refusé |
| TC42 | RF38 | Modification non autorisée | Essayer de modifier l'événement d'un autre organisateur | Modification refusée |
| TC43 | RF39 | Token JWT invalide | Envoyer une requête protégée avec un token invalide | Requête refusée |
| TC44 | RF39 | Token JWT expiré | Envoyer une requête avec un token expiré | Requête refusée |
| TC45 | RF40 | Stockage du mot de passe | Vérifier localement le stockage du compte de test | Mot de passe non stocké en clair |

## 13. Tests API REST

| ID | Exigence | Cas de test | Actions et données | Résultat attendu |
|---|---|---|---|---|
| TC46 | RF41 | Requête API valide | Envoyer une requête conforme au contrat API | Réponse correcte |
| TC47 | RF42 | Codes HTTP | Exécuter des requêtes positives et négatives | Codes HTTP conformes au contrat |
| TC48 | RF43 | Données JSON invalides | Envoyer des données invalides | Erreur appropriée |
| TC49 | RF44 | Persistance PostgreSQL | Créer une ressource et vérifier son enregistrement | Données enregistrées |
| TC50 | RF45 | Contrôle des rôles API | Envoyer une requête avec un rôle non autorisé | Accès refusé |

## 14. Exemple de cas de test détaillé

### TC04 — Connexion valide

- Exigence : RF04.
- Priorité : Haute.
- Précondition : un compte de test valide existe.
- Email : testuser01@example.com.
- Mot de passe : Test@2026, si utilisé lors de l'inscription.

### Étapes

1. Ouvrir CHNOWA FAMA.
2. Cliquer sur Connexion.
3. Saisir l'adresse email.
4. Saisir le mot de passe.
5. Cliquer sur Se connecter.

### Résultat attendu

- La connexion réussit.
- L'utilisateur accède à son espace authentifié.
- Les fonctionnalités réservées aux utilisateurs connectés deviennent accessibles.

### Résultat obtenu

À compléter après exécution.

### Statut

NOT RUN.

## 15. Synthèse des cas de test

| Module | Nombre |
|---|---:|
| Authentification | 9 |
| Profil | 3 |
| Événements | 7 |
| Favoris | 4 |
| Participation et candidatures | 5 |
| Organisateurs | 7 |
| Administration | 4 |
| Sécurité | 6 |
| API REST | 5 |
| Total | 50 |

## 16. Règles d'exécution

- Tous les cas de test détaillés sont initialement au statut NOT RUN.
- Chaque résultat obtenu sera enregistré dans test-execution.md.
- Une anomalie sera documentée lorsqu'un résultat diffère d'une exigence confirmée.
- Les preuves seront conservées dans screenshots/.
- Les requêtes API seront enregistrées dans la collection Postman.
- Les fonctionnalités non applicables seront identifiées et justifiées.
- Les cas de test génériques seront détaillés après vérification du contrat API et des règles métier.
- Aucune donnée confidentielle ne sera publiée sur GitHub.

## 17. Conclusion

Ces 50 cas de test candidats couvrent les 45 exigences fonctionnelles et techniques identifiées dans requirements.md. Ils constituent la base de la campagne de tests fonctionnels ISTQB et API de CHNOWA FAMA.