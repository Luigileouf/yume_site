# 🎨 YUME Design System

> Système de design cohérent pour l'ensemble de la plateforme solidaire YUME

## 📋 Table des matières

- [Introduction](#introduction)
- [Installation](#installation)
- [Structure](#structure)
- [Tokens de design](#tokens-de-design)
- [Composants](#composants)
- [Utilisation](#utilisation)
- [Guidelines](#guidelines)

---

## 🎯 Introduction

Le Design System YUME est une collection complète de :
- ✅ **Variables CSS (Design Tokens)** pour une cohérence visuelle
- ✅ **Composants réutilisables** (cards, boutons, forms, etc.)
- ✅ **Classes utilitaires** pour un développement rapide
- ✅ **Animations et transitions** élégantes
- ✅ **Système de grille responsive**

### Philosophie de design

- **Luxe minimaliste** : Noir & blanc avec accents dorés
- **Typographie élégante** : Playfair Display + Inter
- **Espacements généreux** : Respiration et lisibilité
- **Animations subtiles** : Fluidité sans distraction
- **Responsive-first** : Mobile → Desktop

---

## 📦 Installation

### 1. Inclure le fichier CSS

```html
<link rel="stylesheet" href="yume-design-system.css">
```

### 2. Inclure les fonts Google

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

---

## 📁 Structure

```
yume_site/
├── yume-design-system.css      # Fichier principal du design system
├── design-system-doc.html      # Documentation interactive
└── DESIGN_SYSTEM_README.md     # Ce fichier
```

---

## 🎨 Tokens de design

### Couleurs

| Token | Valeur | Usage |
|-------|--------|-------|
| `--yume-bg` | #ffffff | Fond principal |
| `--yume-fg` | #111111 | Texte principal |
| `--yume-muted` | #666666 | Texte secondaire |
| `--yume-border` | rgba(0,0,0,.14) | Bordures |
| `--yume-gold-100` | #fbf3d2 | Or clair |
| `--yume-gold-400` | #d9c571 | Or moyen |
| `--yume-gold-600` | #b39545 | Or foncé |

### Typographie

| Token | Valeur | Usage |
|-------|--------|-------|
| `--yume-font-serif` | Playfair Display | Titres, marque |
| `--yume-font-sans` | Inter | Corps de texte, UI |

### Espacements

| Token | Valeur | Usage |
|-------|--------|-------|
| `--yume-space-xs` | 0.5rem (8px) | Minimal |
| `--yume-space-sm` | 0.75rem (12px) | Petit |
| `--yume-space-md` | 1rem (16px) | Standard |
| `--yume-space-lg` | 1.5rem (24px) | Grand |
| `--yume-space-xl` | 2rem (32px) | Très grand |
| `--yume-space-2xl` | 3rem (48px) | Section |
| `--yume-space-3xl` | 4rem (64px) | Large section |

### Bordures

| Token | Valeur |
|-------|--------|
| `--yume-radius-sm` | 10px |
| `--yume-radius-md` | 16px |
| `--yume-radius` | 22px |
| `--yume-radius-lg` | 28px |
| `--yume-radius-pill` | 999px |

### Ombres

| Token | Valeur |
|-------|--------|
| `--yume-shadow-sm` | 0 4px 12px rgba(0,0,0,.05) |
| `--yume-shadow` | 0 8px 24px rgba(0,0,0,.08) |
| `--yume-shadow-md` | 0 12px 32px rgba(0,0,0,.12) |
| `--yume-shadow-lg` | 0 20px 40px rgba(0,0,0,.15) |

---

## 🧩 Composants

### Header & Navigation

```html
<header class="yume-header">
  <nav class="yume-nav">
    <div class="yume-brand">YUME</div>
    <a href="#" class="yume-nav-link">Lien</a>
  </nav>
</header>
```

### Hero Section

```html
<section class="yume-hero">
  <div class="yume-hero-content">
    <div class="yume-eyebrow yume-mb">
      <span class="yume-rule"></span>
      Label
    </div>
    <h1 class="yume-title yume-title-xl yume-mb">Titre principal</h1>
    <p class="yume-lead yume-mx-auto">Texte d'introduction</p>
  </div>
</section>
```

### Boutons

```html
<!-- Primary button -->
<button class="yume-btn yume-btn-primary yume-btn-pill">Action</button>

<!-- Dark button -->
<button class="yume-btn yume-btn-dark yume-btn-pill">Action</button>

<!-- Outline button -->
<button class="yume-btn yume-btn-outline yume-btn-pill">Action</button>

<!-- Tailles -->
<button class="yume-btn yume-btn-primary yume-btn-pill yume-btn-sm">Small</button>
<button class="yume-btn yume-btn-primary yume-btn-pill">Default</button>
<button class="yume-btn yume-btn-primary yume-btn-pill yume-btn-lg">Large</button>
```

### Cards

```html
<!-- Card simple -->
<div class="yume-card yume-card-padding">
  <h3 class="yume-title yume-title-sm yume-mb">Titre</h3>
  <p class="yume-body yume-muted">Contenu</p>
</div>

<!-- Card avec hover -->
<div class="yume-card yume-card-hover yume-card-padding">
  <h3 class="yume-title yume-title-sm yume-mb">Titre</h3>
  <p class="yume-body yume-muted">Contenu</p>
</div>
```

### Formulaires

```html
<div class="yume-form-group">
  <label class="yume-label">Label</label>
  <input type="text" class="yume-input yume-input-pill" placeholder="Placeholder">
  <span class="yume-form-hint">Texte d'aide</span>
</div>
```

### Grilles

```html
<!-- 2 colonnes -->
<div class="yume-grid-2">
  <div>Colonne 1</div>
  <div>Colonne 2</div>
</div>

<!-- 3 colonnes -->
<div class="yume-grid-3">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- 4 colonnes -->
<div class="yume-grid-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

---

## 💡 Utilisation

### Classes de typographie

```html
<!-- Titres -->
<h1 class="yume-title yume-title-xl">Très grand titre</h1>
<h2 class="yume-title yume-title-lg">Grand titre</h2>
<h3 class="yume-title yume-title-md">Titre moyen</h3>
<h4 class="yume-title yume-title-sm">Petit titre</h4>

<!-- Paragraphes -->
<p class="yume-lead">Texte d'introduction</p>
<p class="yume-body">Texte standard</p>
<p class="yume-text-sm yume-muted">Petit texte secondaire</p>

<!-- Eyebrow -->
<div class="yume-eyebrow">
  <span class="yume-rule"></span>
  Label de section
</div>

<!-- Highlight doré -->
<span class="yume-highlight">Texte en dégradé doré</span>
```

### Classes utilitaires

```html
<!-- Alignement -->
<p class="yume-text-left">Gauche</p>
<p class="yume-text-center">Centre</p>
<p class="yume-text-right">Droite</p>

<!-- Couleurs -->
<p class="yume-text-primary">Primaire</p>
<p class="yume-text-muted">Atténué</p>
<p class="yume-text-gold">Doré</p>

<!-- Marges -->
<div class="yume-mt-sm">Marge top small</div>
<div class="yume-mt">Marge top</div>
<div class="yume-mt-lg">Marge top large</div>
<div class="yume-mt-xl">Marge top extra-large</div>

<div class="yume-mb-sm">Marge bottom small</div>
<div class="yume-mb">Marge bottom</div>
<div class="yume-mb-lg">Marge bottom large</div>
<div class="yume-mx-auto">Centré horizontalement</div>

<!-- Bordures -->
<div class="yume-rounded">Arrondi standard</div>
<div class="yume-rounded-pill">Arrondi pill</div>
<div class="yume-border">Bordure</div>

<!-- Ombres -->
<div class="yume-shadow">Ombre standard</div>
<div class="yume-shadow-md">Ombre moyenne</div>
<div class="yume-shadow-lg">Grande ombre</div>

<!-- Display & Flex -->
<div class="yume-flex yume-gap">Flex avec gap</div>
<div class="yume-flex-center">Flex centré</div>
<div class="yume-flex-between">Flex space-between</div>

<!-- Largeurs maximales -->
<div class="yume-max-w-text">Max largeur texte</div>
<div class="yume-max-w-form">Max largeur form</div>
<div class="yume-max-w-full">Max largeur contenu</div>
```

### Animations

```html
<!-- Reveal on scroll -->
<div class="yume-reveal">
  Apparaît au scroll
</div>

<script>
  // Activer le reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('.yume-reveal').forEach(el => io.observe(el));
</script>

<!-- Fade in immédiat -->
<div class="yume-fade-in">Apparaît en fade</div>

<!-- Curseur clignotant -->
<span class="yume-blink">|</span>
```

---

## 📐 Guidelines

### 1. Hiérarchie typographique

- **Titre XL** : Hero sections, pages principales
- **Titre LG** : Sections principales
- **Titre MD** : Sous-sections
- **Titre SM** : Titres de cards, éléments UI
- **Lead** : Introduction de sections
- **Body** : Contenu standard
- **Small** : Informations secondaires

### 2. Espacements

- Utilisez les tokens d'espacement pour la cohérence
- Préférez les marges top pour les espacements verticaux
- Utilisez `yume-space-xl` et plus pour séparer les sections
- Utilisez `yume-space-md` pour les éléments de contenu

### 3. Couleurs

- **Fond blanc** : Clarté et lisibilité
- **Texte noir** : Contraste maximal
- **Or** : Accents, CTA, éléments importants
- **Gris** : Texte secondaire, bordures

### 4. Composants

- Toujours utiliser `.yume-card` pour les conteneurs de contenu
- Ajouter `.yume-card-hover` pour les éléments interactifs
- Utiliser `.yume-btn-pill` pour des boutons modernes
- Préférer les grilles responsive (`.yume-grid-2`, `.yume-grid-3`, etc.)

### 5. Responsive

- Le design system est **mobile-first**
- Tous les composants sont responsive par défaut
- Les grilles s'adaptent automatiquement
- Les tailles de police sont fluides avec `clamp()`

### 6. Accessibilité

- Toujours utiliser des labels pour les formulaires
- Respecter les contrastes de couleurs
- Utiliser `prefers-reduced-motion` pour les animations
- Textes alternatifs pour les images

---

## 🚀 Exemples de pages complètes

### Landing page simple

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ma page YUME</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="yume-design-system.css">
</head>
<body>
  <!-- Header -->
  <header class="yume-header">
    <nav class="yume-nav">
      <div class="yume-brand">YUME</div>
    </nav>
  </header>

  <!-- Hero -->
  <section class="yume-hero">
    <div class="yume-hero-content">
      <div class="yume-eyebrow yume-mb">
        <span class="yume-rule"></span>
        Label
      </div>
      <h1 class="yume-title yume-title-xl yume-mb">
        Mon titre <span class="yume-highlight">impactant</span>
      </h1>
      <p class="yume-lead yume-mx-auto yume-mb-xl">
        Texte d'introduction captivant
      </p>
      <button class="yume-btn yume-btn-primary yume-btn-pill yume-btn-lg">
        Call to action
      </button>
    </div>
  </section>

  <!-- Section contenu -->
  <section class="yume-section">
    <div class="yume-container">
      <h2 class="yume-title yume-title-md yume-text-center yume-mb-xl">
        Section titre
      </h2>
      <div class="yume-grid-3">
        <div class="yume-card yume-card-hover yume-card-padding">
          <h3 class="yume-title yume-title-sm yume-mb">Card 1</h3>
          <p class="yume-body yume-muted">Contenu</p>
        </div>
        <div class="yume-card yume-card-hover yume-card-padding">
          <h3 class="yume-title yume-title-sm yume-mb">Card 2</h3>
          <p class="yume-body yume-muted">Contenu</p>
        </div>
        <div class="yume-card yume-card-hover yume-card-padding">
          <h3 class="yume-title yume-title-sm yume-mb">Card 3</h3>
          <p class="yume-body yume-muted">Contenu</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="yume-footer">
    <div class="yume-footer-content yume-text-center">
      <div class="yume-footer-brand yume-mb">YUME</div>
      <p class="yume-footer-text">
        Objets vendus, athlètes soutenus
      </p>
    </div>
  </footer>
</body>
</html>
```

---

## 📚 Ressources

- **Documentation interactive** : Ouvrez `design-system-doc.html` dans votre navigateur
- **Fichier CSS principal** : `yume-design-system.css`
- **Exemples** : Consultez les fichiers existants du projet

---

## 🤝 Contribution

Pour ajouter de nouveaux composants ou modifier le design system :

1. Modifiez `yume-design-system.css`
2. Documentez les changements dans `design-system-doc.html`
3. Mettez à jour ce README si nécessaire
4. Testez la compatibilité avec les pages existantes

---

## 📝 Changelog

### Version 1.0 (2025-10-23)
- ✅ Création du design system complet
- ✅ Tokens de design (couleurs, typographie, espacements)
- ✅ Composants de base (header, hero, cards, boutons, forms)
- ✅ Système de grille responsive
- ✅ Classes utilitaires
- ✅ Animations et transitions
- ✅ Documentation interactive

---

**YUME Design System** — Objets vendus, athlètes soutenus 💛


