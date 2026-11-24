
import { test, expect } from '@playwright/test';

test('E2E01 - Vérifier la page d’accueil CHNOWA FAMA', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await expect(
    page.getByText('CHNOWA FAMA').first()
  ).toBeVisible();

});

test('E2E02 - Navigation vers Explorer', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByRole('button', { name: 'Explorer' }).click();

  await expect(
    page.getByRole('heading', { name: 'Explorer les événements' })
  ).toBeVisible();
});

test('E2E03 - Navigation vers Connexion', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByRole('button', { name: 'Connexion' }).click();

  await expect(
    page.getByRole('heading', { name: 'Connexion' })
  ).toBeVisible();
});

test('E2E04 - Vérifier le formulaire d’inscription', async ({ page }) => {

  await page.goto('http://localhost:5173');

  // Ouvrir la page Connexion
  await page.getByRole('button', {
    name: 'Connexion'
  }).click();

  // Ouvrir le formulaire d'inscription
  await page.getByText('Créer un compte').click();

  // Vérifier le titre
  await expect(
    page.getByRole('heading', {
      name: 'Créer un compte'
    })
  ).toBeVisible();

  // Vérifier les champs
  await expect(
    page.getByText('Nom complet')
  ).toBeVisible();

  await expect(
    page.getByText('Email', { exact: true })
  ).toBeVisible();

  await expect(
    page.getByText('Mot de passe')
  ).toBeVisible();

  // Vérifier le bouton
  await expect(
    page.getByRole('button', {
      name: "S'inscrire"
    })
  ).toBeVisible();

});

test('E2E05 - Refuser une inscription avec des champs vides', async ({ page }) => {

  await page.goto('http://localhost:5173');

  // Ouvrir Connexion
  await page.getByRole('button', {
    name: 'Connexion'
  }).click();

  // Ouvrir Inscription
  await page.getByText('Créer un compte').click();

  // Cliquer sur S'inscrire sans remplir le formulaire
  await page.getByRole('button', {
    name: "S'inscrire"
  }).click();

  // Vérifier que le formulaire reste affiché
  await expect(
    page.getByRole('heading', {
      name: 'Créer un compte'
    })
  ).toBeVisible();

});

test('E2E06 - Refuser un email invalide', async ({ page }) => {

  await page.goto('http://localhost:5173');

  // Ouvrir la page Connexion
  await page.getByRole('button', {
    name: 'Connexion'
  }).click();

  // Ouvrir le formulaire d'inscription
  await page.getByText('Créer un compte').click();

  // Remplir les champs
  await page.getByLabel('Nom complet').fill('Test User');

  await page.getByLabel('Email').fill('email-invalide');

  await page.getByLabel('Mot de passe').fill('Test12345');

  // Soumettre le formulaire
  await page.getByRole('button', {
    name: "S'inscrire"
  }).click();

  // Vérifier que le formulaire reste affiché
  await expect(
    page.getByRole('heading', {
      name: 'Créer un compte'
    })
  ).toBeVisible();

});

test('E2E07 - Refuser un mot de passe trop court', async ({ page }) => {

  await page.goto('http://localhost:5173');

  // Ouvrir la page Connexion
  await page.getByRole('button', {
    name: 'Connexion'
  }).click();

  // Ouvrir le formulaire d'inscription
  await page.getByText('Créer un compte').click();

  // Remplir les champs
  await page.getByLabel('Nom complet').fill('Test User');

  await page.getByLabel('Email').fill('test@example.com');

  await page.getByLabel('Mot de passe').fill('123');

  // Soumettre le formulaire
  await page.getByRole('button', {
    name: "S'inscrire"
  }).click();

  // Vérifier que le formulaire reste affiché
  await expect(
    page.getByRole('heading', {
      name: 'Créer un compte'
    })
  ).toBeVisible();

});

test('E2E08 - Refuser une connexion avec des identifiants incorrects', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.getByRole('button', {
    name: 'Connexion'
  }).click();

  await page.getByLabel('Email').fill('inexistant@example.com');

  await page.getByLabel('Mot de passe').fill('WrongPassword123');

  await page.getByRole('button', {
    name: 'Se connecter'
  }).click();

  // Afficher le vrai message de l'application
  console.log('Texte affiché :', await page.locator('body').innerText());

  await page.screenshot({
    path: 'e2e08-erreur.png',
    fullPage: true
  });

});



test('E2E09 - Masquer les fonctionnalités privées sans connexion', async ({ page }) => {

  // Simuler un utilisateur non connecté
  await page.addInitScript(() => {
    localStorage.removeItem('chnowa_token');
  });

  await page.goto('http://localhost:5173');

  // Les fonctionnalités privées ne doivent pas être visibles
  await expect(
    page.getByRole('button', { name: 'Profil', exact: true })
  ).toHaveCount(0);

  await expect(
    page.getByRole('button', { name: 'Favoris', exact: true })
  ).toHaveCount(0);

  await expect(
    page.getByRole('button', { name: 'Organisateur', exact: true })
  ).toHaveCount(0);

  // Le bouton Connexion doit être visible
  await expect(
    page.getByRole('button', { name: 'Connexion' })
  ).toBeVisible();

});

test('E2E10 - Rechercher un événement', async ({ page }) => {

  // Ouvrir la page d'accueil
  await page.goto('http://localhost:5173');

  // Saisir un mot-clé
  await page.getByPlaceholder('Rechercher un événement...').fill('hackathon');

  // Cliquer sur Rechercher
  await page.getByRole('button', {
    name: 'Rechercher'
  }).click();

  // Vérifier que la page Explorer apparaît
  await expect(
    page.getByRole('heading', {
      name: 'Explorer les événements'
    })
  ).toBeVisible();

  // Vérifier que le mot-clé est conservé
  await expect(
    page.getByPlaceholder('Recherche...')
  ).toHaveValue('hackathon');

});

test('E2E11 - Filtrer les événements gratuits', async ({ page }) => {

  // Ouvrir la page d'accueil
  await page.goto('http://localhost:5173');

  // Aller à la page Explorer
  await page.getByRole('button', {
    name: 'Explorer',
    exact: true
  }).click();

  // Vérifier que la page Explorer est affichée
  await expect(
    page.getByRole('heading', {
      name: 'Explorer les événements'
    })
  ).toBeVisible();

  // Activer le filtre Gratuit uniquement
  const gratuit = page.getByRole('checkbox', {
    name: 'Gratuit uniquement'
  });

  await gratuit.check();

  // Vérifier que le filtre est activé
  await expect(gratuit).toBeChecked();

  // Appliquer le filtre
  await page.getByRole('button', {
    name: 'Filtrer'
  }).click();

  // Vérifier que la page Explorer reste affichée
  await expect(
    page.getByRole('heading', {
      name: 'Explorer les événements'
    })
  ).toBeVisible();

});

test('E2E12 - Filtrer les événements par région et catégorie', async ({ page }) => {

  await page.goto('http://localhost:5173');

  // Aller vers Explorer
  await page.getByRole('button', {
    name: 'Explorer',
    exact: true
  }).click();

  // Vérifier la page Explorer
  await expect(
    page.getByRole('heading', {
      name: 'Explorer les événements'
    })
  ).toBeVisible();

  // Récupérer les listes déroulantes
  const region = page.locator('select').filter({
    has: page.locator('option', { hasText: 'Toutes les régions' })
  });

  const categorie = page.locator('select').filter({
    has: page.locator('option', { hasText: 'Toutes catégories' })
  });

  // Attendre que les choix soient chargés depuis l'API
  await expect.poll(async () =>
    region.locator('option').count()
  ).toBeGreaterThan(1);

  await expect.poll(async () =>
    categorie.locator('option').count()
  ).toBeGreaterThan(1);

  // Choisir la première région et catégorie disponibles
  const regionId = await region.locator('option').nth(1).getAttribute('value');
  const categorieId = await categorie.locator('option').nth(1).getAttribute('value');

  await region.selectOption(regionId);
  await categorie.selectOption(categorieId);

  // Vérifier les choix
  await expect(region).toHaveValue(regionId);
  await expect(categorie).toHaveValue(categorieId);

  // Appliquer les filtres
  await page.getByRole('button', {
    name: 'Filtrer'
  }).click();

  // Vérifier que la page Explorer reste visible
  await expect(
    page.getByRole('heading', {
      name: 'Explorer les événements'
    })
  ).toBeVisible();

});

test('E2E13 - Vérifier la page Clubs et associations', async ({ page }) => {

  // Ouvrir la page d'accueil
  await page.goto('http://localhost:5173');

  // Cliquer sur Clubs
  await page.getByRole('button', {
    name: 'Clubs',
    exact: true
  }).click();

  // Vérifier le titre de la page
  await expect(
    page.getByRole('heading', {
      name: 'Clubs et associations'
    })
  ).toBeVisible();

  // Vérifier le texte de présentation
  await expect(
    page.getByText('Organisateurs approuvés sur CHNOWA FAMA')
  ).toBeVisible();

  // Vérifier que le nombre d'organisateurs est affiché
  await expect(
    page.getByText(/^\d+ organisateurs$/)
  ).toBeVisible();

});

test('E2E14 - Vérifier les 24 gouvernorats tunisiens', async ({ page }) => {

  // Ouvrir la page d'accueil
  await page.goto('http://localhost:5173');

  // Cliquer sur Régions
  await page.getByRole('button', {
    name: 'Régions',
    exact: true
  }).click();

  // Vérifier le titre de la page
  await expect(
    page.getByRole('heading', {
      name: 'Nos 24 gouvernorats'
    })
  ).toBeVisible();

  // Attendre le chargement des régions depuis l'API
  const gouvernorats = page.locator('main button').filter({
    has: page.locator('svg')
  });

  // Vérifier que 24 gouvernorats sont affichés
  await expect(gouvernorats).toHaveCount(24);

});

test('E2E15 - Sélectionner un gouvernorat et filtrer les événements', async ({ page }) => {

  // Ouvrir la page d'accueil
  await page.goto('http://localhost:5173');

  // Aller vers Régions
  await page.getByRole('button', {
    name: 'Régions',
    exact: true
  }).click();

  // Vérifier que la page Régions apparaît
  await expect(
    page.getByRole('heading', {
      name: 'Nos 24 gouvernorats'
    })
  ).toBeVisible();

  // Attendre que Sousse soit chargé depuis l'API
  const sousse = page.locator('main button').filter({
    hasText: /^Sousse$/
  });

  await expect(sousse).toBeVisible();

  // Cliquer sur Sousse
  const responsePromise = page.waitForResponse(
    response =>
      response.url().includes('/api/events?region_id=') &&
      response.request().method() === 'GET'
  );

  await sousse.click();

  // Vérifier que l'API a répondu correctement
  const response = await responsePromise;
  expect(response.status()).toBe(200);

  // Vérifier la navigation vers Explorer
  await expect(
    page.getByRole('heading', {
      name: 'Explorer les événements'
    })
  ).toBeVisible();

  // Vérifier que Sousse reste sélectionné dans le filtre
  await expect(
    page.locator('select').filter({
      has: page.locator('option', {
        hasText: 'Toutes les régions'
      })
    })
  ).toHaveValue(
    (await response.url().split('region_id=')[1].split('&')[0])
  );

});

test('E2E16 - Retourner à la page d’accueil', async ({ page }) => {

  // Ouvrir CHNOWA FAMA
  await page.goto('http://localhost:5173');

  // Aller à la page Explorer
  await page.getByRole('button', {
    name: 'Explorer',
    exact: true
  }).click();

  // Vérifier qu'on est sur Explorer
  await expect(
    page.getByRole('heading', {
      name: 'Explorer les événements'
    })
  ).toBeVisible();

  // Cliquer sur Accueil
  await page.getByRole('button', {
    name: 'Accueil',
    exact: true
  }).click();

  // Vérifier que la page d'accueil s'affiche
  await expect(
    page.getByRole('heading', {
      name: 'Tous les événements, au même endroit.'
    })
  ).toBeVisible();

  // Vérifier que la section événements apparaît
  await expect(
    page.getByRole('heading', {
      name: 'Événements à découvrir'
    })
  ).toBeVisible();

});

test('E2E17 - Déconnecter un utilisateur', async ({ page }) => {

  const email = process.env.E2E_EMAIL;
  const password = process.env.E2E_PASSWORD;

  if (!email || !password) {
    throw new Error('Définir E2E_EMAIL et E2E_PASSWORD');
  }

  // Ouvrir l'application
  await page.goto('http://localhost:5173');

  // Aller vers Connexion
  await page.getByRole('button', {
    name: 'Connexion'
  }).click();

  // Se connecter avec un compte de test
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Mot de passe').fill(password);

  await page.getByRole('button', {
    name: 'Se connecter'
  }).click();

  // Vérifier que l'utilisateur est connecté
  await expect(
    page.getByRole('button', { name: 'Quitter' })
  ).toBeVisible();

  // Cliquer sur Quitter
  await page.getByRole('button', {
    name: 'Quitter'
  }).click();

  // Vérifier le retour à l'accueil
  await expect(
    page.getByRole('heading', {
      name: 'Tous les événements, au même endroit.'
    })
  ).toBeVisible();

  // Vérifier que Connexion réapparaît
  await expect(
    page.getByRole('button', { name: 'Connexion' })
  ).toBeVisible();

  // Vérifier la suppression du token
  const token = await page.evaluate(
    () => localStorage.getItem('chnowa_token')
  );

  expect(token).toBeNull();

});

test('E2E18 - Masquer les favoris après déconnexion', async ({ page }) => {

  // Simuler un utilisateur non connecté
  await page.addInitScript(() => {
    localStorage.removeItem('chnowa_token');
  });

  // Ouvrir l'application
  await page.goto('http://localhost:5173');

  // Vérifier que le bouton Favoris est absent
  await expect(
    page.getByRole('button', {
      name: 'Favoris',
      exact: true
    })
  ).toHaveCount(0);

  // Vérifier que le bouton Connexion est présent
  await expect(
    page.getByRole('button', {
      name: 'Connexion'
    })
  ).toBeVisible();

});







