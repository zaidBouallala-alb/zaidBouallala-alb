# CV - ZAID BOUALLALA

Ce dossier contient un CV professionnel pour ZAID BOUALLALA au format HTML/CSS, optimisé pour une génération PDF de haute qualité.

## 📋 Contenu

- `index.html` - Structure du CV avec toutes les sections
- `styles.css` - Feuille de style professionnelle
- `README_CV.md` - Ce fichier d'instructions

## 🎨 Sections Incluses

1. **En-tête** : Nom, titre professionnel, coordonnées (localisation, téléphone, email, LinkedIn, Portfolio GitHub)
2. **Profil** : Présentation professionnelle
3. **Compétences** : Frontend, Backend, Bases de données, Outils & Méthodes
4. **Expérience** : Expériences professionnelles et projets
5. **Formation** : Parcours académique et certifications
6. **Projets** : Projets réalisés avec détails techniques
7. **Activités & Centres d'Intérêt** : Passions et activités extra-professionnelles

## 🖥️ Visualisation

### Option 1 : Navigateur Web
Ouvrez simplement `index.html` dans votre navigateur web favori :
```bash
# Linux/Mac
open index.html

# Windows
start index.html
```

### Option 2 : Serveur HTTP Local
Pour une meilleure prévisualisation :
```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```
Puis ouvrez http://localhost:8000 dans votre navigateur.

## 📄 Génération PDF

### Méthode 1 : Depuis le Navigateur (Recommandé)
1. Ouvrez `index.html` dans Chrome, Firefox, ou Edge
2. Appuyez sur `Ctrl+P` (Windows/Linux) ou `Cmd+P` (Mac)
3. Configurez les paramètres d'impression :
   - **Destination** : Enregistrer au format PDF
   - **Mise en page** : Portrait
   - **Marges** : Par défaut ou Minimum
   - **Échelle** : 100%
   - **Options** : Activez "Graphiques d'arrière-plan"
4. Cliquez sur "Enregistrer" et choisissez le nom : `CV_ZAID_BOUALLALA.pdf`

### Méthode 2 : Puppeteer (Automatisé)
Pour une génération automatique via Node.js :

```bash
npm install puppeteer
```

Créez un fichier `generate-pdf.js` :
```javascript
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto(`file://${path.join(__dirname, 'index.html')}`, {
        waitUntil: 'networkidle0'
    });
    
    await page.pdf({
        path: 'CV_ZAID_BOUALLALA.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20mm',
            right: '15mm',
            bottom: '20mm',
            left: '15mm'
        }
    });
    
    await browser.close();
    console.log('PDF généré : CV_ZAID_BOUALLALA.pdf');
})();
```

Exécutez :
```bash
node generate-pdf.js
```

### Méthode 3 : wkhtmltopdf
Installation et utilisation :
```bash
# Installation (Ubuntu/Debian)
sudo apt-get install wkhtmltopdf

# Installation (Mac)
brew install wkhtmltopdf

# Génération du PDF
wkhtmltopdf --enable-local-file-access --print-media-type index.html CV_ZAID_BOUALLALA.pdf
```

### Méthode 4 : WeasyPrint
Pour Python :
```bash
# Installation
pip install weasyprint

# Génération
weasyprint index.html CV_ZAID_BOUALLALA.pdf
```

## ✏️ Personnalisation

### Modifier les Informations Personnelles
Dans `index.html`, mettez à jour les sections suivantes :

1. **Coordonnées** (lignes 21-26) :
   - Localisation
   - Téléphone
   - Email
   - LinkedIn
   - Portfolio

2. **Profil** (ligne 35) : Adaptez la description professionnelle

3. **Expérience** (section EXPÉRIENCE) : Ajoutez vos expériences réelles

4. **Formation** (section FORMATION) : Complétez avec vos diplômes

5. **Projets** (section PROJETS) : Mettez à jour avec vos projets personnels

### Modifier les Couleurs
Dans `styles.css`, modifiez les variables de couleur principales :
- `#2c3e50` : Couleur principale (titres)
- `#3498db` : Couleur d'accent (liens, puces)
- `#f8f9fa` : Couleur de fond pour les encadrés

### Modifier la Police
Changez la police dans `index.html` (ligne 8) et `styles.css` (ligne 8) en modifiant le lien Google Fonts.

## 📱 Responsive Design

Le CV est entièrement responsive et s'adapte aux différentes tailles d'écran :
- **Desktop** : Mise en page optimale sur grand écran
- **Tablet** : Adaptation automatique
- **Mobile** : Layout en colonne unique

## 🎯 Optimisations Incluses

- ✅ Design professionnel et moderne
- ✅ Typographie soignée avec Google Fonts (Roboto)
- ✅ Mise en page A4 optimisée pour l'impression
- ✅ Styles d'impression dédiés (@media print)
- ✅ Sections organisées et hiérarchisées
- ✅ Puces et espacements cohérents
- ✅ Couleurs professionnelles et lisibles
- ✅ Liens cliquables vers profils en ligne
- ✅ Compatible tous navigateurs modernes
- ✅ Évite les coupures de sections lors de l'impression

## 📧 Contact

Pour toute question ou modification, contactez :
- **GitHub** : [@zaidbouallala-alb](https://github.com/zaidbouallala-alb)
- **LinkedIn** : [zaid-bouallala-60513a338](https://www.linkedin.com/in/zaid-bouallala-60513a338)

## 📝 Notes

- Le CV est au format **A4** (210mm x 297mm)
- Toutes les sections sont en **français**
- Les informations sont **fictives** pour certaines sections (téléphone, email) et doivent être personnalisées
- Le design est inspiré des standards professionnels français
- Les couleurs sont choisies pour être imprimables en noir et blanc tout en restant élégantes

---

**Version** : 1.0  
**Dernière mise à jour** : Février 2024  
**Licence** : MIT
