# Functional Requirements — CHNOWA FAMA

## 1. Objectif

Ce document identifie les exigences fonctionnelles de la plateforme CHNOWA FAMA afin de préparer les cas de test conformément aux principes ISTQB.

Les exigences constituent la base de référence pour la conception et l'exécution des tests fonctionnels et des tests API.

Cette liste préliminaire doit être validée avec les spécifications et les fonctionnalités réellement implémentées.

## 2. Acteurs du système

| Acteur | Description |
|---|---|
| Visiteur | Personne non authentifiée |
| Utilisateur | Personne possédant un compte |
| Organisateur | Responsable de la publication et de la gestion des événements |
| Administrateur | Responsable de la validation des organisateurs et de l'administration |

## 3. Authentification

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF01 | L'utilisateur doit pouvoir créer un compte avec des données valides. | Haute |
| RF02 | Le système doit refuser les données d'inscription invalides. | Haute |
| RF03 | Le système doit empêcher la création de comptes avec un email déjà utilisé. | Haute |
| RF04 | L'utilisateur doit pouvoir se connecter avec des identifiants valides. | Haute |
| RF05 | Le système doit refuser les identifiants incorrects. | Haute |
| RF06 | L'utilisateur doit pouvoir se déconnecter. | Haute |

## 4. Gestion du profil

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF07 | L'utilisateur doit pouvoir consulter son profil. | Moyenne |
| RF08 | L'utilisateur doit pouvoir modifier les informations autorisées de son profil. | Moyenne |
| RF09 | L'utilisateur doit pouvoir gérer ses centres d'intérêt, si cette fonctionnalité est implémentée. | Moyenne |

## 5. Consultation et recherche des événements

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF10 | Le visiteur doit pouvoir consulter les événements disponibles. | Haute |
| RF11 | L'utilisateur doit pouvoir rechercher un événement par mot-clé. | Haute |
| RF12 | L'utilisateur doit pouvoir filtrer les événements par région. | Haute |
| RF13 | L'utilisateur doit pouvoir filtrer les événements par catégorie, si ce filtre est disponible. | Moyenne |
| RF14 | L'utilisateur doit pouvoir consulter les détails d'un événement. | Haute |
| RF15 | Le système doit afficher un message approprié lorsqu'aucun événement n'est disponible. | Moyenne |

## 6. Gestion des favoris

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF16 | L'utilisateur connecté doit pouvoir ajouter un événement aux favoris. | Moyenne |
| RF17 | L'utilisateur doit pouvoir supprimer un événement de ses favoris. | Moyenne |
| RF18 | L'utilisateur doit pouvoir consulter sa liste de favoris. | Moyenne |
| RF19 | Le système doit éviter les doublons dans les favoris. | Moyenne |

## 7. Participation et candidatures

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF20 | L'utilisateur connecté doit pouvoir participer à un événement éligible. | Haute |
| RF21 | Le système doit empêcher les participations en double. | Haute |
| RF22 | Le système doit respecter la capacité maximale d'un événement, lorsque celle-ci est définie. | Haute |
| RF23 | L'utilisateur doit pouvoir soumettre une candidature à un événement nécessitant une candidature. | Haute |
| RF24 | L'utilisateur doit pouvoir consulter ses événements et candidatures. | Haute |

## 8. Gestion des organisateurs

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF25 | L'utilisateur doit pouvoir soumettre une demande pour devenir organisateur. | Haute |
| RF26 | Le système doit conserver le statut de la demande d'approbation. | Haute |
| RF27 | Un organisateur non approuvé ne doit pas pouvoir publier un événement. | Haute |
| RF28 | Un organisateur approuvé doit pouvoir créer un événement. | Haute |
| RF29 | L'organisateur doit pouvoir modifier ses propres événements. | Haute |
| RF30 | L'organisateur doit pouvoir supprimer ses propres événements, si cette action est autorisée. | Haute |
| RF31 | L'organisateur doit pouvoir consulter les participants et candidatures de ses événements. | Moyenne |

## 9. Administration

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF32 | L'administrateur doit pouvoir accéder au tableau de bord administratif. | Haute |
| RF33 | L'administrateur doit pouvoir consulter les demandes des organisateurs. | Haute |
| RF34 | L'administrateur doit pouvoir approuver un organisateur. | Haute |
| RF35 | L'administrateur doit pouvoir refuser une demande, si ce statut est prévu. | Haute |

## 10. Sécurité et contrôle des accès

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF36 | Les routes protégées doivent nécessiter une authentification valide. | Haute |
| RF37 | Un utilisateur simple ne doit pas pouvoir accéder aux fonctionnalités administratives. | Haute |
| RF38 | Un organisateur ne doit pas pouvoir modifier les événements appartenant à un autre organisateur. | Haute |
| RF39 | Le système doit refuser les tokens JWT invalides ou expirés. | Haute |
| RF40 | Les mots de passe ne doivent pas être stockés en clair dans la base de données. | Haute |

## 11. API REST

| ID | Exigence fonctionnelle | Priorité |
|---|---|---|
| RF41 | L'API doit accepter les requêtes valides conformément à son contrat. | Haute |
| RF42 | L'API doit retourner des codes HTTP appropriés. | Haute |
| RF43 | L'API doit retourner des messages d'erreur appropriés pour les données invalides. | Haute |
| RF44 | Les données créées avec succès doivent être enregistrées dans PostgreSQL. | Haute |
| RF45 | L'API doit contrôler les autorisations sur les ressources protégées. | Haute |

## 12. Traçabilité des exigences

Chaque exigence applicable doit être associée à un ou plusieurs cas de test dans le fichier test-cases.md.

Les résultats d'exécution seront enregistrés dans test-execution.md.

Les anomalies identifiées seront documentées dans bug-report.md et pourront faire l'objet de GitHub Issues.

## 13. Synthèse

| Module | Nombre d'exigences candidates |
|---|---:|
| Authentification | 6 |
| Gestion du profil | 3 |
| Consultation des événements | 6 |
| Favoris | 4 |
| Participation et candidatures | 5 |
| Organisateurs | 7 |
| Administration | 4 |
| Sécurité et contrôle des accès | 5 |
| API REST | 5 |
| Total | 45 |

## 14. Conclusion

Les 45 exigences candidates constituent une base de travail pour la conception des tests fonctionnels et des tests API de CHNOWA FAMA.

Les exigences non applicables ou non confirmées seront identifiées avant l'exécution des tests. Aucun résultat de réussite ne sera attribué sans vérification effective.