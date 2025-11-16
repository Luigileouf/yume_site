# 📊 Configuration Google Sheet pour les Bêta-testeurs YUME

## 🎯 Objectif
Collecter automatiquement les inscriptions des bêta-testeurs dans un Google Sheet avec confirmation visuelle.

---

## 📋 ÉTAPE 1 : Créer le Google Sheet

1. Allez sur https://sheets.google.com
2. Créez un nouveau document
3. Nommez-le : **"YUME - Inscriptions Bêta-testeurs"**
4. Dans la première ligne (en-têtes), ajoutez :
   - **A1** : `Date`
   - **B1** : `Nom`
   - **C1** : `Email`

---

## 📝 ÉTAPE 2 : Créer le Google Apps Script

1. Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**
2. Supprimez tout le code par défaut
3. Copiez-collez ce code :

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Ajouter une nouvelle ligne avec : Date, Nom, Email
    sheet.appendRow([
      new Date(),
      data.name,
      data.email
    ]);
    
    // Réponse de succès
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'Script actif',
      message: 'Formulaire bêta-testeurs YUME'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Nommez le projet : **"YUME Beta Testeurs"**
5. Cliquez sur **💾 Enregistrer** (icône disquette)

---

## 🚀 ÉTAPE 3 : Déployer le script

1. Cliquez sur **Déployer** > **Nouveau déploiement**
2. Cliquez sur l'icône ⚙️ **Sélectionner le type** > **Application Web**
3. Configurez :
   - **Description** : `Collecte bêta-testeurs YUME`
   - **Exécuter en tant que** : **Moi**
   - **Qui a accès** : **Tout le monde**
4. Cliquez sur **Déployer**
5. **Autorisez** l'application (Google vous demandera de confirmer les autorisations)
6. **📋 COPIEZ L'URL** du déploiement (elle ressemble à ceci) :
   ```
   https://script.google.com/macros/s/AKfycby...VOTRE_ID.../exec
   ```

---

## 🔧 ÉTAPE 4 : Mettre à jour le fichier HTML

1. Ouvrez le fichier `Test_landing_page_betatesteur.html`
2. Trouvez cette ligne (vers la ligne 576) :
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/VOTRE_ID_SCRIPT_ICI/exec';
   ```
3. **Remplacez** `VOTRE_ID_SCRIPT_ICI` par l'URL complète que vous avez copiée à l'étape 3

**Exemple :**
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxhrMHEBvVcKANQT-9_hYtmJig_f26kVfaGf3QE5VMru60OHx8JQ54RDbCSaOJPDBvR/exec';
```

---

## ✅ ÉTAPE 5 : Tester

1. Sauvegardez le fichier `Test_landing_page_betatesteur.html`
2. Ouvrez-le dans votre navigateur
3. Remplissez le formulaire avec un nom et un email de test
4. Cliquez sur **"Je veux tester YUME en avant-première 🚀"**
5. Vous devriez voir le message de confirmation :
   > ✅ **Merci !** Tu es inscrit(e) sur la liste des bêta-testeurs. Tu recevras ton accès très bientôt !
6. Vérifiez votre Google Sheet : une nouvelle ligne devrait apparaître avec la date, le nom et l'email

---

## 🎨 Fonctionnalités

### ✅ Ce qui se passe lors de l'inscription :

1. **Pendant l'envoi** :
   - Le bouton devient gris et affiche "Envoi en cours..."
   - Le bouton est désactivé pour éviter les doubles soumissions

2. **En cas de succès** :
   - Le formulaire disparaît
   - Un message de confirmation vert s'affiche
   - Les données sont enregistrées dans le Google Sheet avec :
     - Date et heure de l'inscription
     - Nom complet
     - Adresse email

3. **En cas d'erreur** :
   - Un message d'erreur rouge s'affiche
   - Le bouton redevient actif
   - L'utilisateur peut réessayer

---

## 📊 Visualiser les données

Dans votre Google Sheet, vous verrez :

| Date | Nom | Email |
|------|-----|-------|
| 16/11/2025 14:30:25 | Marie Dupont | marie@exemple.fr |
| 16/11/2025 15:45:12 | Jean Martin | jean@exemple.fr |

Vous pouvez ensuite :
- Exporter en CSV
- Créer des graphiques
- Partager avec votre équipe
- Utiliser des filtres

---

## 🔒 Sécurité

- Le script est déployé sous votre compte Google
- Seules les données du formulaire (nom + email) sont collectées
- L'URL du script est publique mais ne permet que d'ajouter des données
- Personne ne peut lire ou modifier votre Google Sheet sans votre autorisation

---

## 🆘 Dépannage

### Le message de confirmation ne s'affiche pas
- Vérifiez que vous avez bien remplacé `VOTRE_ID_SCRIPT_ICI` par votre URL
- Vérifiez que le script est bien déployé avec l'accès "Tout le monde"

### Les données n'apparaissent pas dans le Google Sheet
- Vérifiez que vous avez autorisé le script
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Testez l'URL du script directement dans le navigateur (vous devriez voir un message JSON)

### Message d'erreur rouge
- Vérifiez votre connexion internet
- Vérifiez que l'URL du script est correcte
- Redéployez le script si nécessaire

---

## 📞 Support

Si vous rencontrez des problèmes, vérifiez :
1. L'URL du script dans le fichier HTML
2. Les autorisations du script dans Google Apps Script
3. La console du navigateur (F12) pour les messages d'erreur

---

**✨ C'est prêt ! Votre système de collecte d'inscriptions est maintenant opérationnel.**

