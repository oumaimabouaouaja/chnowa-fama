# Test Plan — CHNOWA FAMA

## 1. Informations générales

| Élément | Description |
|---|---|
| Projet | CHNOWA FAMA |
| Responsable | Membre 3 |
| Branche GitHub | feature/testing |
| Approche | Tests fonctionnels boîte noire |
| Référentiel | ISTQB |

## 2. Objectifs des tests

- Vérifier la conformité de l'application aux exigences fonctionnelles.
- Vérifier la communication entre le Frontend, le Backend et PostgreSQL.
- Identifier et documenter les anomalies.
- Vérifier la validation des données saisies.
- Vérifier les autorisations des différents rôles.
- Améliorer la qualité et la fiabilité de l'application.

## 3. Périmètre des tests

| Module | Fonctionnalités à tester |
|---|---|
| Authentification | Inscription, connexion et déconnexion |
| Utilisateurs | Consultation et modification du profil |
| Événements | Consultation, recherche et filtrage |
| Régions | Consultation des événements par région |
| Favoris | Ajout et suppression des favoris |
| Participants | Inscription aux événements |
| Candidatures | Soumission et gestion des candidatures |
| Organisateurs | Demande d'approbation et gestion des événements |
| Administration | Validation des organisateurs et contrôle des accès |
| API REST | Validation des requêtes et des réponses HTTP |

Les fonctionnalités et les règles métier seront confirmées à partir du cahier des charges et de l'application.

## 4. Hors périmètre

Les activités suivantes sont confiées au membre 4 :

- Tests unitaires avec Vitest.
- Tests d'intégration avec Supertest.
- Tests End-to-End avec Playwright.
- Configuration CI/CD avec GitHub Actions.

## 5. Techniques de test ISTQB

| Technique | Application |
|---|---|
| Classes d'équivalence | Données valides et invalides |
| Analyse des valeurs limites | Longueur des champs et capacité des événements |
| Tables de décision | Autorisations et règles métier |
| Transitions d'état | Statuts des organisateurs et des candidatures |

## 6. Types de tests

- Smoke Testing.
- Tests fonctionnels manuels.
- Tests positifs et négatifs.
- Tests API avec Postman.
- Tests de confirmation.
- Tests de régression.

## 7. Environnement de test

| Composant | Configuration |
|---|---|
| Système | Windows |
| Frontend | React.js et Vite |
| URL Frontend | http://localhost:5173 |
| Backend | Node.js et Express.js |
| URL Backend | http://localhost:4000 |
| SGBD | PostgreSQL 17 |
| Base de données | chnowa_fama_test |
| Navigateur | Google Chrome |
| Éditeur | Visual Studio Code |
| Tests API | Postman |
| Gestion de versions | Git et GitHub |

Les tests détaillés seront exécutés sur la copie Git du projet après vérification de la version utilisée par les deux serveurs.

## 8. Critères d'entrée

- Backend et Frontend intégrés.
- Serveurs opérationnels.
- Base de données de test initialisée.
- Exigences fonctionnelles identifiées.
- Données de test disponibles.
- Cas de test préparés.

## 9. Critères de sortie

- Tous les cas de test prioritaires exécutés.
- Résultats documentés.
- Anomalies critiques et bloquantes corrigées.
- Tests de confirmation et de régression effectués.
- Collection Postman exportée.
- Rapport final préparé.

## 10. Statuts des tests

| Statut | Description |
|---|---|
| PASSED | Le résultat obtenu correspond au résultat attendu |
| FAILED | Le résultat obtenu diffère du résultat attendu |
| BLOCKED | Le test ne peut pas être exécuté |
| NOT RUN | Le test n'a pas encore été exécuté |

## 11. Gestion des risques

| Risque | Mesure préventive |
|---|---|
| Perte de données | Utiliser une base dédiée aux tests |
| Conflits Git | Travailler sur feature/testing |
| Backend indisponible | Vérifier le fonctionnement du serveur |
| Données insuffisantes | Créer des données fictives |
| Modification du code | Effectuer des tests de régression |
| Exposition de données sensibles | Ne pas publier les mots de passe et les tokens |

## 12. Planning

| Phase | Activité |
|---|---|
| 1 | Préparation de l'environnement |
| 2 | Analyse des exigences |
| 3 | Conception des cas de test |
| 4 | Application des techniques ISTQB |
| 5 | Exécution des tests fonctionnels |
| 6 | Tests API avec Postman |
| 7 | Documentation des anomalies |
| 8 | Tests de confirmation et de régression |
| 9 | Rapport final et Pull Request |

## 13. Livrables

- Plan de test.
- Exigences fonctionnelles.
- Cas de test.
- Documentation des techniques ISTQB.
- Collection Postman.
- Captures d'écran.
- Rapport des anomalies.
- Rapport de régression.
- Test Summary Report.
- Pull Request vers main.