# Test Execution Report — CHNOWA FAMA

## 1. Informations générales

| Élément | Description |
|---|---|
| Projet | CHNOWA FAMA |
| Responsable | Membre 3 |
| Branche GitHub | feature/testing |
| Version Git testée | 01d0d3f |
| Date | 24/11/2026 |
| Frontend | http://localhost:5173 |
| Backend | http://localhost:4000 |
| Base de données | chnowa_fama_test |
| SGBD | PostgreSQL 17 |
| Navigateur | Google Chrome |
| Outils | Postman, pgAdmin, VS Code |

## 2. Objectifs

- Exécuter les cas de test fonctionnels.
- Appliquer les quatre techniques ISTQB.
- Comparer les résultats obtenus aux résultats attendus.
- Identifier et documenter les anomalies.
- Collecter les preuves d'exécution.

## 3. Statuts des tests

| Statut | Signification |
|---|---|
| PASSED | Résultat conforme |
| FAILED | Résultat non conforme |
| BLOCKED | Test bloqué |
| NOT RUN | Test non exécuté |
| N/A | Test non applicable |

## 4. Module Authentification

| ID | Cas de test | Résultat attendu | Résultat obtenu | Statut | Preuve |
|---|---|---|---|---|---|
| TC01 | Inscription valide | Compte créé | Compte créé dans PostgreSQL avec ID 2 | PASSED | screenshots/TC01-database.png |
| TC02 | Email invalide | Inscription refusée | Le navigateur refuse l'email sans arobase et affiche un message de validation | PASSED | [Preuve](screenshots/TC02-invalid-email.png) |
| TC03 | Email déjà utilisé | Doublon refusé | Inscription refusée avec le message « Ce dossier existe déjà » | PASSED | [Preuve](screenshots/TC03-duplicate-email.png) |
| TC04 | Connexion valide | Connexion réussie | Connexion réussie et redirection vers la page d'accueil | PASSED | [Preuve](screenshots/TC04-valid-login.png) |
| TC05 | Mot de passe incorrect | Connexion refusée | Le système refuse la connexion et affiche « Identifiants invalides » | PASSED | [Preuve](screenshots/TC05-invalid-password.png) |
| TC06 | Email inexistant | Connexion refusée | Le système refuse la connexion et affiche « Identifiants invalides » | PASSED | [Preuve](screenshots/TC06-unknown-email.png) |
| TC07 | Champs obligatoires vides | Erreur de validation | Le navigateur bloque la soumission et affiche « Veuillez renseigner ce champ » | PASSED | [Preuve](screenshots/TC07-empty-fields.png) |
| TC08 | Mot de passe non conforme | Inscription refusée | Le navigateur refuse le mot de passe de 3 caractères et exige au minimum 8 caractères | PASSED | [Preuve](screenshots/TC08-short-password.png) |
| TC09 | Déconnexion | Session terminée | Utilisateur déconnecté, bouton Connexion réapparu et menus personnels masqués | PASSED | [Preuve](screenshots/TC09-logout.png) |
### Tests complémentaires — Boundary Value Analysis

| ID | Longueur | Résultat attendu | Résultat obtenu | Statut | Preuve |
|---|---|---|---|---|---|
| BVA01 | 7 caractères | Inscription refusée | Compte créé avec ID 4, longueur du mot de passe à confirmer | À vérifier | [Preuve](screenshots/BVA01-password-7.png) |
| BVA02 | 8 caractères | Inscription acceptée | Compte créé dans PostgreSQL | PASSED | [Interface](screenshots/BVA02-password-8.png), [Database](screenshots/BVA02-database.png) |
| BVA03 | 9 caractères | Inscription acceptée | Compte créé et enregistré dans PostgreSQL | PASSED | [Interface](screenshots/BVA03-password-9.png), [Database](screenshots/BVA03-database.png) 
### Module Gestion du profil

| ID | Cas de test | Résultat attendu | Résultat obtenu | Statut | Preuve |
|---|---|---|---|---|---|
| TC10 | Consultation du profil | Informations du compte affichées | Nom, email et centres d'intérêt correctement affichés | PASSED | [Preuve](screenshots/TC10-view-profile.png) |
| TC11 | Modification du profil | Modification enregistrée | À compléter | NOT RUN | — |
| TC12 | Gestion des intérêts | Préférences enregistrées | Les trois centres d'intérêt sont enregistrés et conservés après actualisation | PASSED | [Enregistrement](screenshots/TC12-save-interests.png), [Persistance](screenshots/TC12-interests-persistence.png) |
### Module Gestion des organisateurs

| ID | Cas de test | Résultat attendu | Résultat obtenu | Statut | Preuve |
|---|---|---|---|---|---|
| TC29 | Demande organisateur | Demande enregistrée | Demande envoyée avec succès et statut en attente de validation | PASSED | [Preuve](screenshots/TC29-organizer-request.png) |
| TC30 | Consultation du statut | Statut correct affiché | Le statut en attente de validation reste affiché après actualisation | PASSED | [Preuve](screenshots/TC30-organizer-status.png) |
| TC31 | Publication non autorisée | Publication refusée | Le Backend refuse la création car le compte organisateur est en attente de validation | PASSED | [Preuve](screenshots/TC31-unauthorized-publication.png) |[Preuve](screenshots/TC30-organizer-status.png) |
| TC32 | Création événement | Événement créé | Hackathon ISTQB 2026 apparaît dans Mes publications | PASSED | [Preuve](screenshots/TC32-event-created.png) |
| TC33 | Modification événement | Événement modifié avec succès | Modification enregistrée et conservée après actualisation | PASSED | [Preuve](screenshots/TC33-event-updated.png) |
| TC34 | Suppression événement | Événement supprimé si autorisé | À compléter | NOT RUN | — |
| TC35 | Consultation des participants | Participants affichés | À compléter | NOT RUN | — |
### Module Administration

| ID | Cas de test | Résultat attendu | Résultat obtenu | Statut | Preuve |
|---|---|---|---|---|---|
| TC36 | Dashboard Admin | Dashboard accessible | Tableau de bord administrateur accessible | PASSED | [Preuve](screenshots/TC36-TC37-admin-dashboard.png) |
| TC37 | Demandes organisateurs | Demandes affichées | ISTQB Tech Club affiché avec le statut En attente | PASSED | [Preuve](screenshots/TC36-TC37-admin-dashboard.png) |
| TC38 | Approbation organisateur | Statut mis à jour | À compléter | NOT RUN | — |
| TC39 | Refus organisateur | Demande refusée | À compléter | NOT RUN | — |
## 5. Autres modules à tester

- Gestion du profil.
- Consultation et recherche des événements.
- Gestion des favoris.
- Participation et candidatures.
- Gestion des organisateurs.
- Administration.
- Sécurité et contrôle des accès.
- API REST avec Postman.

Les résultats seront ajoutés progressivement après exécution des cas de test.
### Module Tests API REST — Postman

| ID | Méthode | Endpoint | Résultat attendu | Résultat obtenu | Statut | Preuve |
|---|---|---|---|---|---|---|
| API01 | GET | /api/health | HTTP 200 | HTTP 200 et ok: true | PASSED | [Preuve](screenshots/API01-health-check.png) |
| API02 | POST | /api/auth/login | HTTP 200 + JWT | HTTP 200, utilisateur authentifié et JWT généré | PASSED | [Preuve](screenshots/API02-organizer-login.png) |
| API03 | GET | /api/organizers/me | HTTP 200 et approved: false | HTTP 200 et organisateur en attente de validation | PASSED | [Preuve](screenshots/API03-organizer-status.png) |
## 6. Preuves d'exécution

Les captures d'écran des tests seront enregistrées dans le dossier screenshots/.

Chaque capture sera identifiée par l'identifiant du cas de test correspondant.

## 7. Anomalies détectées

Les anomalies confirmées seront documentées dans bug-report.md et signalées aux développeurs via GitHub Issues.

## 8. Indicateurs de test

| Indicateur | Résultat actuel |
|---|---:|
| Cas de test principaux planifiés | 50 |
| Tests principaux exécutés | 9 |
| PASSED | 9 |
| FAILED | 0 |
| BLOCKED | 0 |
| NOT RUN | 41 |
| Taux de réussite des tests exécutés | 100 % |
| Taux d'exécution | 18 % |
| Problèmes d'interface observés | 2 |
| Anomalies potentielles à confirmer | 1 |

## 9. Conclusion

La campagne de tests fonctionnels est en cours. Les conclusions finales seront établies après l'exécution des tests applicables et la vérification des anomalies.