# 📧 Configuration de la collecte d'emails dans Google Sheet

## 🎯 Objectif
Collecter les emails des landing pages (vendeur et acheteur) dans un Google Sheet avec la date de collecte.

---

## ✅ Étape 1 : Créer le Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez un nouveau tableur
3. Nommez-le : **"YUME - Emails Landing Pages"**
4. Dans la première ligne (en-têtes), ajoutez :
   - **Colonne A** : `Date`
   - **Colonne B** : `Email`
   - **Colonne C** : `Page`

---

## ✅ Étape 2 : Créer le Google Apps Script

1. Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**
2. Supprimez tout le code par défaut
3. Collez ce code :

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Ajouter une nouvelle ligne avec : Date, Email, Page
    sheet.appendRow([
      new Date(),
      data.email,
      data.page || 'Non spécifié'
    ]);
    
    // Réponse CORS
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return doPost(e);
}
```

4. Donnez un nom au projet : **"YUME Email Collector"**
5. Cliquez sur **💾 Enregistrer**

---

## ✅ Étape 3 : Déployer le script

1. Cliquez sur **Déployer** > **Nouveau déploiement**
2. Cliquez sur l'icône ⚙️ **Sélectionner le type** > choisissez **Application Web**
3. Configurez les paramètres :
   - **Description** : `Collecte emails YUME v1`
   - **Exécuter en tant que** : **Moi** (votre email)
   - **Qui a accès** : **Tout le monde**
4. Cliquez sur **Déployer**
5. ⚠️ **Autorisez l'application** si demandé :
   - Cliquez sur "Vérifier les autorisations"
   - Sélectionnez votre compte Google
   - Cliquez sur "Paramètres avancés" puis "Accéder à YUME Email Collector (non sécurisé)"
   - Autoriser
6. **📋 COPIEZ L'URL du déploiement** qui ressemble à :
   ```
   https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxxxx/exec
   ```

---

## ✅ Étape 4 : Configurer les landing pages

1. Ouvrez les fichiers suivants :
   - `test_vendeur_landing.html`
   - `test_acheteur_landing.html`

2. Dans chaque fichier, cherchez cette ligne (ligne ~537 et ~636) :
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/VOTRE_ID_SCRIPT_ICI/exec';
   ```

3. **Remplacez** `VOTRE_ID_SCRIPT_ICI` par l'URL complète que vous avez copiée à l'étape 3

4. Sauvegardez les fichiers

5. Commitez et poussez sur GitHub :
   ```bash
   git add test_vendeur_landing.html test_acheteur_landing.html
   git commit -m "Configuration collecte emails Google Sheet"
   git push origin main
   ```

---

## 🧪 Étape 5 : Tester

1. Attendez que GitHub Pages soit mis à jour (quelques minutes)
2. Visitez vos landing pages
3. Testez en soumettant un email
4. Vérifiez dans votre Google Sheet que l'email apparaît avec :
   - ✅ La date/heure de collecte
   - ✅ L'adresse email
   - ✅ Le nom de la page (Vendeur Landing ou Acheteur Landing)

---

## 📊 Ce qui sera collecté dans le Google Sheet

| Date | Email | Page |
|------|-------|------|
| 22/10/2025 14:30:25 | test@example.com | Vendeur Landing |
| 22/10/2025 15:45:10 | john@example.com | Acheteur Landing |

---

## 🔧 Dépannage

### Le formulaire ne fonctionne pas ?

1. **Vérifiez l'URL du script** dans les fichiers HTML
2. **Vérifiez les autorisations** du script Google Apps
3. **Testez directement le script** en ouvrant l'URL dans un navigateur

### Les emails n'apparaissent pas dans le Sheet ?

1. Ouvrez la console du navigateur (F12)
2. Vérifiez s'il y a des erreurs
3. Vérifiez que le script est bien déployé comme "Application Web"
4. Assurez-vous que "Qui a accès" est bien réglé sur "Tout le monde"

### Comment voir les logs du script ?

1. Dans Google Apps Script, cliquez sur **Exécutions** (icône d'horloge)
2. Vous verrez toutes les exécutions et les erreurs éventuelles

---

## 🎉 C'est tout !

Votre système de collecte d'emails est maintenant configuré et fonctionnel. Les emails seront automatiquement ajoutés à votre Google Sheet avec la date de collecte.

**100% gratuit** et hébergé sur GitHub Pages + Google Apps Script !

