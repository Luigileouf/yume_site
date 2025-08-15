# YUME Site

## Objectif
YUME est une plateforme solidaire dédiée à la vente d’objets de seconde main afin de financer des athlètes peu médiatisés et de soutenir les associations sportives locales.

## Pages principales
- `index.html` : page d’introduction qui présente le concept et renvoie vers l’aperçu du site.
- `accueil.html` : page d’accueil détaillée pour découvrir la future plateforme.
- `media.html` : page dédiée au podcast et aux contenus médias.
- `newsletter.html` : formulaire d’inscription à la newsletter.
- `template-ui/` : maquettes et prototypes de l’interface utilisateur pour les futures fonctionnalités (recherche, panier, etc.).

## Structure des répertoires
La racine contient les pages HTML et les dossiers de ressources :

```
/          – pages principales et fichiers racine
├── audio/ – extraits audio du site
├── img/   – images et illustrations
├── js/    – scripts JavaScript (ex. `header.js`)
└── template-ui/ – prototypes et ressources de l’interface
```

## Prévisualisation
Le site est purement statique. Pour le prévisualiser :

```bash
# depuis la racine du dépôt
python -m http.server 8000
```

Ouvrez ensuite votre navigateur sur [http://localhost:8000](http://localhost:8000) et naviguez vers les pages souhaitées (par exemple `index.html`).

## Dépendances externes
- **Bootstrap 5** pour la mise en page et les composants : chargé depuis le CDN `cdn.jsdelivr.net`.
- **Google Fonts** (familles Inter et Playfair Display) pour la typographie.
Ces ressources sont utilisées directement via des balises `<link>` dans les fichiers HTML, aucune installation locale n’est requise.

