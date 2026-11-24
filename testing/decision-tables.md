# Decision Table Testing — CHNOWA FAMA

## 1. Objectif

Appliquer la technique des tables de décision afin de vérifier les fonctionnalités de CHNOWA FAMA dont le comportement dépend de plusieurs conditions et règles métier.

## 2. Principe ISTQB

Une table de décision représente les combinaisons de conditions et les actions attendues du système.

Chaque colonne correspond à une règle de décision pouvant être associée à un cas de test.

Notation utilisée :

- O : Oui, condition satisfaite.
- N : Non, condition non satisfaite.
- — : Condition non déterminante.
- X : Action attendue.

Les règles présentées sont des règles candidates à confirmer avec les spécifications et le Backend avant leur exécution.

## 3. Table de décision 1 — Authentification

Exigences associées : RF04 et RF05.

Cas de test associés : TC04, TC05 et TC06.

### Conditions et actions

| Conditions / Actions | R1 | R2 | R3 | R4 |
|---|---|---|---|---|
| Champs obligatoires renseignés | O | O | O | N |
| Email existant | O | O | N | — |
| Mot de passe correct | O | N | — | — |
| Connexion autorisée | X | — | — | — |
| Identifiants refusés | — | X | X | — |
| Erreur de validation | — | — | — | X |

### Cas de test

| ID | Règle | Scénario | Résultat attendu |
|---|---|---|---|
| DT01 | R1 | Email existant et mot de passe correct | Connexion réussie |
| DT02 | R2 | Email existant et mot de passe incorrect | Connexion refusée |
| DT03 | R3 | Email inexistant | Connexion refusée |
| DT04 | R4 | Champs obligatoires vides | Erreur de validation |

## 4. Table de décision 2 — Inscription utilisateur

Exigences associées : RF01, RF02 et RF03.

Cas de test associés : TC01, TC02, TC03, TC07 et TC08.

### Conditions et actions

| Conditions / Actions | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| Champs obligatoires renseignés | O | O | O | O | N |
| Format email valide | O | O | O | N | — |
| Email disponible | O | O | N | — | — |
| Mot de passe conforme | O | N | — | — | — |
| Compte créé | X | — | — | — | — |
| Inscription refusée | — | X | X | X | X |

### Cas de test

| ID | Règle | Scénario | Résultat attendu |
|---|---|---|---|
| DT05 | R1 | Toutes les données sont valides | Compte créé |
| DT06 | R2 | Mot de passe non conforme | Inscription refusée |
| DT07 | R3 | Email déjà utilisé | Inscription refusée |
| DT08 | R4 | Format email invalide | Inscription refusée |
| DT09 | R5 | Champ obligatoire vide | Erreur de validation |

## 5. Table de décision 3 — Publication d'un événement

Exigences associées : RF27, RF28 et RF36.

Cas de test associés : TC31, TC32 et TC40.

### Conditions et actions

| Conditions / Actions | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| Utilisateur authentifié | O | O | O | O | N |
| Rôle organisateur | O | O | O | N | — |
| Organisateur approuvé | O | O | N | — | — |
| Données événement valides | O | N | — | — | — |
| Événement créé | X | — | — | — | — |
| Erreur de validation | — | X | — | — | — |
| Accès refusé | — | — | X | X | X |

### Cas de test

| ID | Règle | Scénario | Résultat attendu |
|---|---|---|---|
| DT10 | R1 | Organisateur approuvé et événement valide | Événement créé |
| DT11 | R2 | Organisateur approuvé et données invalides | Création refusée |
| DT12 | R3 | Organisateur non approuvé | Publication interdite |
| DT13 | R4 | Utilisateur sans rôle organisateur | Publication interdite |
| DT14 | R5 | Visiteur non authentifié | Accès refusé |

## 6. Table de décision 4 — Approbation d'un organisateur

Exigences associées : RF32, RF33, RF34 et RF37.

Cas de test associés : TC36, TC37, TC38 et TC41.

### Conditions et actions

|