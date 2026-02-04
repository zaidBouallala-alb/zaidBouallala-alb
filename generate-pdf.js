const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('Lancement de la génération du PDF...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Chemin vers le fichier HTML
    const htmlPath = `file://${path.join(__dirname, 'index.html')}`;
    console.log(`Chargement du fichier : ${htmlPath}`);
    
    await page.goto(htmlPath, {
        waitUntil: 'networkidle0'
    });
    
    // Génération du PDF
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
    console.log('✅ PDF généré avec succès : CV_ZAID_BOUALLALA.pdf');
})().catch(err => {
    console.error('❌ Erreur lors de la génération du PDF:', err);
    process.exit(1);
});
