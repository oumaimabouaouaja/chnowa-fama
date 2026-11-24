# Regression Testing – CHNOWA FAMA

## 1. Objectif

Vérifier que les modifications apportées à l'application CHNOWA FAMA n'introduisent pas de nouvelles anomalies dans les fonctionnalités existantes.

## 2. Environnement de test

- Frontend : React / Vite
- Backend : Node.js / Express
- Base de données : PostgreSQL
- Outils : Postman, navigateur web, VS Code
- Branche : feature/testing

## 3. Scénarios de régression

| ID | Fonctionnalité | Résultat attendu | Statut |
|---|---|---|---|
| REG01 | Inscription | Création correcte du compte | NOT RUN |
| REG02 | Connexion | Authentification réussie | NOT RUN |
| REG03 | Connexion invalide | Accès refusé | NOT RUN |
| REG04 | Consultation du profil | Informations correctes | NOT RUN |
| REG05 | Recherche d'événements | Résultats pertinents | NOT RUN |
| REG06 | Gestion des favoris | Ajout et suppression corrects | NOT RUN |
| REG07 | Création d'événement | Événement enregistré | NOT RUN |
| REG08 | Modification d'événement | Modification conservée | NOT RUN |
| REG09 | Autorisation organisateur | Respect des droits d'accès | NOT RUN |
| REG10 | API Health Check | HTTP 200 OK | NOT RUN |

## 4. Critères d'acceptation

- Aucune nouvelle anomalie critique.
- Fonctionnalités principales opérationnelles.
- Respect des autorisations.
- Conservation des données après actualisation.

## 5. Conclusion

Les résultats définitifs seront renseignés après l'exécution des scénarios de régression.