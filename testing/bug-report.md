# Bug Report — CHNOWA FAMA

## 1. Informations générales

| Élément | Description |
|---|---|
| Projet | CHNOWA FAMA |
| Responsable | Membre 3 |
| Branche | feature/testing |
| Version Git testée | 01d0d3f |
| Date de détection | 24/11/2026 |
| Environnement | Windows, Google Chrome |
| Frontend | React.js |
| Backend | Node.js / Express.js |
| Base de données | chnowa_fama_test |

## 2. Objectif

Ce document présente les anomalies et les problèmes d'ergonomie identifiés pendant la campagne de tests fonctionnels ISTQB.

Chaque anomalie contient une description, les étapes de reproduction, le résultat attendu, le résultat obtenu, la sévérité, la priorité et les preuves disponibles.

## 3. Classification de la sévérité

| Sévérité | Description |
|---|---|
| Critical | Anomalie critique affectant fortement le système ou la sécurité |
| Major | Fonctionnalité importante incorrecte ou indisponible |
| Minor | Problème limité ne bloquant pas les fonctionnalités principales |
| Trivial | Problème mineur de présentation ou de formulation |

## 4. Statuts des anomalies

| Statut | Description |
|---|---|
| OPEN | Anomalie identifiée et en attente de traitement |
| IN PROGRESS | Correction en cours |
| FIXED | Correction réalisée par le développeur |
| CLOSED | Correction vérifiée par le testeur |
| REOPENED | Anomalie toujours présente après correction |
| TO CONFIRM | Anomalie potentielle nécessitant une vérification |

## 5. BUG01 — Persistance du message d'erreur

### Informations

| Élément | Valeur |
|---|---|
| Bug ID | BUG01 |
| Module | Authentification |
| Cas de test associé | TC07 |
| Type | Interface utilisateur |
| Sévérité | Minor |
| Priorité | Medium |
| Statut | OPEN |

### Description

Le message d'erreur « Identifiants invalides » reste affiché sur la page d'inscription après une tentative de connexion échouée.

### Préconditions

- Application opérationnelle.
- Utilisateur non authentifié.

### Étapes de reproduction

1. Ouvrir CHNOWA FAMA.
2. Accéder à la page de connexion.
3. Saisir des identifiants incorrects.
4. Cliquer sur Se connecter.
5. Observer le message d'erreur.
6. Cliquer sur Créer un compte.
7. Observer la page d'inscription.

### Résultat attendu

Le message d'erreur de connexion doit disparaître lors du changement de formulaire.

### Résultat obtenu

Le message « Identifiants invalides » reste affiché sur la page d'inscription.

### Impact

L'utilisateur peut être induit en erreur par un message qui ne correspond pas à l'action actuelle.

### Preuve

[Capture BUG01 — TC07](screenshots/TC07-empty-fields.png)

### Correction recommandée

Réinitialiser les messages d'erreur lors du changement de page ou de formulaire.

## 6. BUG02 — Message d'erreur imprécis

### Informations

| Élément | Valeur |
|---|---|
| Bug ID | BUG02 |
| Module | Inscription |
| Cas de test associé | TC03 |
| Type | Ergonomie et messages d'erreur |
| Sévérité | Minor |
| Priorité | Low |
| Statut | OPEN |

### Description

Lorsqu'un utilisateur tente de créer un compte avec une adresse email déjà enregistrée, le système affiche le message « Ce dossier existe déjà ».

### Préconditions

Un compte utilisateur existe déjà dans PostgreSQL.

### Étapes de reproduction

1. Ouvrir la page d'inscription.
2. Saisir un nom valide.
3. Sélectionner une région.
4. Saisir une adresse email déjà utilisée.
5. Saisir un mot de passe valide.
6. Cliquer sur S'inscrire.

### Résultat attendu

L'inscription doit être refusée avec un message adapté et compréhensible.

### Résultat obtenu

L'inscription est correctement refusée, mais le message affiché manque de précision.

### Impact

L'utilisateur peut avoir des difficultés à comprendre la cause du refus.

### Preuve

[Capture BUG02 — TC03](screenshots/TC03-duplicate-email.png)

### Correction recommandée

Afficher un message adapté au contexte de l'inscription, en tenant compte de la politique de sécurité relative à la divulgation de l'existence des comptes.

## 7. BUG03 — Validation potentielle incorrecte de la longueur du mot de passe

### Informations

| Élément | Valeur |
|---|---|
| Bug ID | BUG03 |
| Module | Inscription |
| Cas de test associé | BVA01 |
| Exigence | RF02 |
| Technique | Boundary Value Analysis |
| Sévérité proposée | Major |
| Priorité proposée | High |
| Statut | TO CONFIRM |

### Description

Le formulaire d'inscription indique une longueur minimale de huit caractères pour le mot de passe.

Pendant le scénario BVA01, prévu avec un mot de passe de sept caractères, un compte a été enregistré dans PostgreSQL.

### Étapes de reproduction proposées

1. Ouvrir le formulaire d'inscription.
2. Saisir un nom valide.
3. Sélectionner une région.
4. Utiliser une nouvelle adresse email fictive.
5. Saisir exactement sept caractères dans le champ mot de passe.
6. Cliquer sur S'inscrire.
7. Vérifier si le compte est créé dans PostgreSQL.

### Résultat attendu

Le système doit refuser le mot de passe de sept caractères.

### Observation initiale

Le compte bva01@example.com a été retrouvé dans PostgreSQL avec l'identifiant 4.

La longueur du mot de passe réellement utilisé lors de cette inscription n'a pas encore été confirmée.

### Impact potentiel

Une incohérence entre les règles de validation et le comportement réel pourrait permettre la création de comptes avec des mots de passe non conformes.

### Preuve

[Capture BVA01](screenshots/BVA01-password-7.png)

### Vérifications complémentaires

- Reproduire le test avec une nouvelle adresse email.
- Vérifier la validation côté Frontend.
- Vérifier la validation côté Backend avec Postman.
- Confirmer ou rejeter l'anomalie avant de modifier son statut.

## 8. Synthèse des anomalies

| ID | Description | Sévérité | Priorité | Statut |
|---|---|---|---|---|
| BUG01 | Message d'erreur persistant | Minor | Medium | OPEN |
| BUG02 | Message d'erreur imprécis | Minor | Low | OPEN |
| BUG03 | Validation potentielle du mot de passe | Major, provisoire | High, provisoire | TO CONFIRM |

## 9. Indicateurs

| Indicateur | Nombre |
|---|---:|
| Observations documentées | 3 |
| Problèmes d'interface observés | 2 |
| Anomalies potentielles à confirmer | 1 |
| Corrections vérifiées | 0 |
| Anomalies clôturées | 0 |

## 10. Conclusion

La campagne de tests d'authentification a permis d'identifier des problèmes liés à la gestion des messages d'erreur ainsi qu'une anomalie potentielle concernant la validation du mot de passe.

Les anomalies seront communiquées aux développeurs. Les corrections feront ensuite l'objet de tests de confirmation et de régression.## BUG04 - Bouton Modifier non fonctionnel

- Cas de test : TC33
- Module : Organisateur
- Sévérité : Major
- Priorité : High
- Statut : Open

### Étapes de reproduction
1. Se connecter avec un compte organisateur approuvé.
2. Accéder à l'espace Organisateur.
3. Accéder à Mes publications.
4. Cliquer sur Modifier devant un événement.

### Résultat attendu
Le formulaire de modification s'ouvre.

### Résultat obtenu
Le clic sur Modifier ne déclenche aucune action.

### Cause
Non identifiée. Investigation nécessaire.

### Preuve
screenshots/TC33-event-update-failed.png