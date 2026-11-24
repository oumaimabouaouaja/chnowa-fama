# Equivalence Partitioning — CHNOWA FAMA

## 1. Objectif

Appliquer la technique de partitionnement en classes d'équivalence afin de réduire le nombre de données de test tout en vérifiant les comportements attendus de l'application pour les entrées valides et invalides.

## 2. Principe ISTQB

Le partitionnement en classes d'équivalence consiste à diviser les données d'entrée en partitions dont les valeurs sont supposées être traitées de manière similaire par le système.

Une ou plusieurs valeurs représentatives sont sélectionnées dans chaque partition.

Les partitions peuvent être valides ou invalides.

## 3. Identification des classes

Les classes présentées dans ce document sont des classes candidates. Les contraintes exactes seront confirmées à partir des exigences et des règles de validation du Backend.

## 4. Module Authentification

### 4.1. Validation de l'adresse email

Exigences associées : RF01, RF02, RF03.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP01 | Email valide et disponible | Valide | ep01@example.com | Inscription acceptée |
| EP02 | Email sans arobase | Invalide | testexample.com | Inscription refusée |
| EP03 | Email vide | Invalide | Chaîne vide | Erreur de validation |
| EP04 | Email déjà enregistré | Invalide | testuser01@example.com, si existant | Doublon refusé |

### 4.2. Validation du mot de passe

Exigences associées : RF01, RF02.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP05 | Mot de passe conforme | Valide | Test@2026, si conforme | Accepté |
| EP06 | Mot de passe trop court | Invalide | 123 | Refusé |
| EP07 | Mot de passe vide | Invalide | Chaîne vide | Refusé |

### 4.3. Validation du nom

Exigences associées : RF01, RF02.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP08 | Nom valide | Valide | Test User | Accepté |
| EP09 | Nom obligatoire vide | Invalide | Chaîne vide | Refusé |

### 4.4. Connexion

Exigences associées : RF04, RF05.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP10 | Identifiants corrects | Valide | Email existant et mot de passe correct | Connexion réussie |
| EP11 | Mot de passe incorrect | Invalide | Email existant et mauvais mot de passe | Connexion refusée |
| EP12 | Email inexistant | Invalide | unknown@example.com | Connexion refusée |
| EP13 | Identifiants vides | Invalide | Email et mot de passe vides | Erreur de validation |

## 5. Module Événements

### 5.1. Validation du titre

Exigence associée : RF28.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP14 | Titre valide | Valide | Hackathon Tunisia | Événement accepté |
| EP15 | Titre obligatoire vide | Invalide | Chaîne vide | Création refusée |

### 5.2. Validation de la capacité

Exigences associées : RF22, RF28.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP16 | Capacité entière autorisée | Valide | 50 | Acceptée |
| EP17 | Capacité négative | Invalide | -5 | Refusée |
| EP18 | Capacité non numérique | Invalide | abc | Refusée |

Les règles concernant la capacité nulle, minimale, maximale ou illimitée doivent être confirmées.

### 5.3. Validation de la date

Exigence associée : RF28.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP19 | Date valide et autorisée | Valide | Date future conforme | Acceptée |
| EP20 | Date mal formatée | Invalide | invalid-date | Refusée |

## 6. Module Recherche et filtrage

Exigences associées : RF11, RF12, RF13, RF15.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP21 | Région existante | Valide | Sousse, si présente dans la base | Résultats correspondants |
| EP22 | Identifiant de région inexistant | Invalide | Identifiant absent de la base | Aucun résultat ou erreur conforme au contrat |
| EP23 | Mot-clé correspondant | Valide | Hackathon | Événements correspondants |
| EP24 | Mot-clé sans correspondance | Valide | XYZUnknownEvent | Aucun résultat |
| EP25 | Catégorie existante | Valide | Catégorie disponible | Résultats correspondants |

Une recherche sans résultat reste une entrée valide. Elle ne constitue pas nécessairement une anomalie.

## 7. Module Authentification JWT

Exigences associées : RF36, RF39, RF45.

| ID | Classe d'équivalence | Type | Donnée représentative | Résultat attendu |
|---|---|---|---|---|
| EP26 | Token valide et autorisé | Valide | JWT d'un compte autorisé | Accès accordé |
| EP27 | Token invalide | Invalide | invalid-token | Accès refusé |
| EP28 | Token absent | Invalide | Aucun token | Accès refusé |
| EP29 | Token expiré | Invalide | JWT arrivé à expiration | Accès refusé |

## 8. Méthode d'exécution

1. Identifier la fonctionnalité et l'exigence associée.
2. Sélectionner une valeur représentative de chaque classe.
3. Préparer les autres champs avec des données valides.
4. Exécuter le test dans le navigateur ou avec Postman.
5. Comparer le résultat obtenu au résultat attendu.
6. Enregistrer le statut dans test-execution.md.
7. Documenter les anomalies éventuelles dans bug-report.md.

Les données de test doivent être isolées afin d'éviter qu'un test influence involontairement le résultat d'un autre test.

## 9. Synthèse

| Module | Nombre de scénarios candidats |
|---|---:|
| Authentification | 13 |
| Événements | 7 |
| Recherche et filtrage | 5 |
| Authentification JWT | 4 |
| Total | 29 |

## 10. Résultats

Les 29 scénarios sont initialement au statut NOT RUN.

Les résultats réels seront documentés pendant la campagne de tests.

## 11. Conclusion

Le partitionnement en classes d'équivalence permet de sélectionner des données représentatives, d'améliorer la couverture des classes identifiées et de réduire les tests redondants.

Cette technique contribue à vérifier la validation des données et le comportement fonctionnel de CHNOWA FAMA.