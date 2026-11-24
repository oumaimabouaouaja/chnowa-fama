# Test Summary Report – CHNOWA FAMA

## 1. Présentation du projet

CHNOWA FAMA est une application web permettant aux utilisateurs de découvrir des événements, de gérer leurs favoris et de soumettre des candidatures. Elle permet également aux organisateurs de publier des événements et aux administrateurs de gérer les demandes d'approbation.

## 2. Objectifs des tests

- Vérifier les exigences fonctionnelles.
- Identifier les anomalies.
- Vérifier les mécanismes d'authentification et d'autorisation.
- Contrôler le fonctionnement des API REST.
- Évaluer la stabilité de l'application.

## 3. Techniques de test utilisées

| Technique | Objectif |
|---|---|
| Equivalence Partitioning | Tester les classes de données valides et invalides |
| Boundary Value Analysis | Vérifier les valeurs limites |
| Decision Table Testing | Tester les combinaisons de conditions |
| State Transition Testing | Vérifier les changements d'état |
| API Testing | Vérifier les réponses du Backend |
| Regression Testing | Détecter les régressions |

## 4. Outils utilisés

- VS Code
- Postman
- PostgreSQL et pgAdmin
- Git et GitHub
- Navigateur web

## 5. Résultats des tests

| Indicateur | Résultat |
|---|---|
| Cas de test principaux conçus | 50 |
| Tests exécutés | À consolider |
| Tests réussis | À consolider |
| Tests échoués | À consolider |
| Tests non exécutés | À consolider |
| Taux de réussite | À calculer |

## 6. Anomalies identifiées

| ID | Description | Statut |
|---|---|---|
| BUG01 | Persistance du message d'erreur lors du changement de formulaire | Open |
| BUG02 | Message d'erreur peu explicite lors d'une inscription avec un email existant | Open |
| BUG03 | Acceptation potentielle d'un mot de passe trop court | À confirmer |

## 7. Recommandations

- Améliorer les messages d'erreur.
- Renforcer la validation des données.
- Vérifier la politique de sécurité des mots de passe.
- Automatiser les tests de régression.
- Intégrer les tests dans le pipeline CI/CD.

## 8. Conclusion

La campagne de tests a permis de vérifier plusieurs fonctionnalités principales de CHNOWA FAMA et d'identifier des pistes d'amélioration. La décision finale de validation dépend de la consolidation des résultats et du traitement des anomalies restantes.