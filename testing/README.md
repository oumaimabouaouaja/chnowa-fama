# CHNOWA FAMA — Functional Testing & API Testing

## 1. Présentation

CHNOWA FAMA est une plateforme web permettant la découverte, la gestion et la participation aux événements dans les différentes régions de Tunisie.

## 2. Objectif

Cette phase de test vise à vérifier la conformité de l'application aux exigences fonctionnelles, à identifier les anomalies et à améliorer la qualité du logiciel en appliquant les principes ISTQB.

## 3. Responsable

- Membre 3 : Tests fonctionnels et tests API.
- Branche GitHub : `feature/testing`.

## 4. Environnement de test

- Frontend : React.js — localhost:5173.
- Backend : Node.js / Express.js — localhost:4000.
- Base de données : PostgreSQL 17 — chnowa_fama_test.
- Système d'exploitation : Windows.

## 5. Outils utilisés

- Visual Studio Code
- Postman
- pgAdmin 4
- Google Chrome
- Git et GitHub

## 6. Techniques de test ISTQB

- Smoke Testing
- Partitionnement en classes d'équivalence
- Analyse des valeurs limites
- Tables de décision
- Tests de transition d'état
- Tests fonctionnels
- Tests API
- Tests de confirmation et de régression

## 7. Structure de la documentation

| Fichier | Description |
|---|---|
| test-plan.md | Plan de test |
| requirements.md | Exigences fonctionnelles |
| test-cases.md | Cas de test |
| equivalence-partitioning.md | Classes d'équivalence |
| boundary-value-analysis.md | Analyse des valeurs limites |
| decision-tables.md | Tables de décision |
| state-transition.md | Transitions d'état |
| test-execution.md | Résultats des tests |
| bug-report.md | Rapport des anomalies |
| regression-testing.md | Tests de régression |
| test-summary-report.md | Rapport final |
| postman/ | Collections des tests API |
| screenshots/ | Preuves des tests |

## 8. Livrables attendus

- Documentation des tests fonctionnels.
- Collection Postman.
- Captures d'écran des résultats.
- Rapports des anomalies.
- Rapport final ISTQB.
- Pull Request vers la branche main.