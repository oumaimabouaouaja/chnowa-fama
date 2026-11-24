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
| BVA03 | 9 caractères | Inscription acceptée | Compte créé et enregistré dans PostgreSQL | PASSED | [Interface](screenshots/BVA03-password-9.png), [Database](screenshots/BVA03-database.png) |
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