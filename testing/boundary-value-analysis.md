# Boundary Value Analysis — CHNOWA FAMA

## 1. Objectif

Appliquer la technique d'analyse des valeurs limites afin de détecter les anomalies susceptibles d'apparaître aux frontières des valeurs autorisées par l'application CHNOWA FAMA.

## 2. Principe ISTQB

L'analyse des valeurs limites est une technique de test boîte noire basée sur les frontières des partitions d'équivalence ordonnées.

Pour une limite donnée, l'analyse à trois valeurs consiste à sélectionner :

- La valeur située immédiatement avant la limite.
- La valeur située sur la limite.
- La valeur située immédiatement après la limite.

Pour un intervalle comportant une valeur minimale et une valeur maximale, les valeurs candidates sont :

- Min - 1
- Min
- Min + 1
- Max - 1
- Max
- Max + 1

## 3. Hypothèses de conception

Les contraintes numériques utilisées dans ce document sont provisoires.

Les valeurs minimales et maximales doivent être confirmées à partir des spécifications, des règles de validation du Backend et des contraintes PostgreSQL avant l'exécution.

## 4. Module Authentification

### 4.1. Longueur du mot de passe

Exigences associées : RF01 et RF02.

Hypothèse : longueur minimale de 8 caractères.

| ID | Longueur | Donnée de test | Résultat attendu |
|---|---:|---|---|
| BVA01 | 7 | Test@12 | Inscription refusée |
| BVA02 | 8 | Test@123 | Inscription acceptée |
| BVA03 | 9 | Test@1234 | Inscription acceptée |

Les autres contraintes éventuelles du mot de passe doivent également être respectées.

### 4.2. Longueur du nom utilisateur

Exigences associées : RF01 et RF02.

Hypothèse : nom obligatoire contenant au minimum un caractère.

| ID | Longueur | Donnée de test | Résultat attendu |
|---|---:|---|---|
| BVA04 | 0 | Chaîne vide | Refusé |
| BVA05 | 1 | A | Accepté |
| BVA06 | 2 | AB | Accepté |

Si une autre longueur minimale est définie dans les spécifications, les valeurs seront adaptées.

## 5. Module Événements

### 5.1. Capacité minimale

Exigences associées : RF22 et RF28.

Hypothèse : capacité minimale égale à un participant pour un événement à capacité limitée.

| ID | Capacité | Position | Résultat attendu |
|---|---:|---|---|
| BVA07 | 0 | Min - 1 | Création refusée |
| BVA08 | 1 | Min | Création acceptée |
| BVA09 | 2 | Min + 1 | Création acceptée |

La signification d'une capacité nulle doit être confirmée. Une valeur nulle ou égale à zéro pourrait représenter une capacité illimitée selon les règles métier.

### 5.2. Longueur du titre

Exigence associée : RF28.

Hypothèse illustrative : longueur maximale du titre égale à 100 caractères.

| ID | Longueur | Position | Résultat attendu |
|---|---:|---|---|
| BVA10 | 99 | Max - 1 | Accepté |
| BVA11 | 100 | Max | Accepté |
| BVA12 | 101 | Max + 1 | Refusé |

La longueur maximale doit être vérifiée avant l'exécution de ces tests.

### 5.3. Date de début d'un événement

Exigence associée : RF28.

Hypothèse : seuls les événements dont la date est supérieure ou égale à la date actuelle peuvent être créés.

| ID | Date proposée | Position | Résultat attendu |
|---|---|---|---|
| BVA13 | Hier | Limite - 1 jour | Refusée |
| BVA14 | Aujourd'hui | Limite | Acceptée |
| BVA15 | Demain | Limite + 1 jour | Acceptée |

La règle exacte concernant les dates et les heures doit être confirmée.

## 6. Module Participation

### 6.1. Nombre maximal de participants

Exigences associées : RF20 et RF22.

Précondition : un événement possède une capacité maximale de 50 participants.

| ID | Participants avant inscription | Participants après tentative | Résultat attendu |
|---|---:|---:|---|
| BVA16 | 48 | 49 | Participation acceptée |
| BVA17 | 49 | 50 | Participation acceptée |
| BVA18 | 50 | 50 | Participation supplémentaire refusée |

Le système doit empêcher le dépassement de la capacité maximale si cette règle est prévue.

## 7. Module Candidatures

### 7.1. Date limite de candidature

Exigence associée : RF23.

Scénarios applicables uniquement si une date limite de candidature est définie dans l'application.

Hypothèse : la date limite est inclusive.

| ID | Date de candidature | Résultat attendu |
|---|---|---|
| BVA19 | Un jour avant la date limite | Candidature acceptée |
| BVA20 | Le jour de la date limite | Candidature acceptée |
| BVA21 | Un jour après la date limite | Candidature refusée |

La précision temporelle et l'inclusivité de la date limite doivent être confirmées.

## 8. Gestion des données de test

Pour chaque scénario :

1. Préparer les préconditions nécessaires.
2. Utiliser des données fictives.
3. Modifier uniquement la valeur à tester.
4. Conserver les autres données valides.
5. Exécuter le test dans le navigateur ou avec Postman.
6. Comparer le résultat obtenu au résultat attendu.
7. Documenter le résultat réel.
8. Signaler les anomalies éventuelles.

## 9. Synthèse des scénarios

| Module | Nombre de scénarios candidats |
|---|---:|
| Authentification | 6 |
| Gestion des événements | 9 |
| Participation | 3 |
| Candidatures | 3 |
| Total | 21 |

## 10. Résultats d'exécution

| Identifiants | Statut initial |
|---|---|
| BVA01 à BVA06 | NOT RUN |
| BVA07 à BVA15 | NOT RUN |
| BVA16 à BVA18 | NOT RUN |
| BVA19 à BVA21 | NOT RUN |

Les résultats réels seront enregistrés dans test-execution.md.

Les scénarios non applicables seront identifiés et justifiés. Les limites non confirmées devront être validées avant l'exécution.

## 11. Conclusion

L'analyse des valeurs limites permet de vérifier le comportement de CHNOWA FAMA aux frontières des domaines de validation.

Cette technique complète le partitionnement en classes d'équivalence et permet notamment de détecter les erreurs liées aux longueurs des champs, aux capacités des événements