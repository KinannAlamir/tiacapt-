# 🥞 Crêpes chez moi, samedi

Petit site humoristique pour inviter Lou à venir faire des crêpes samedi.

## Fichiers
- `index.html` — structure de la page
- `style.css` — thème sombre/grunge (tatouage, clopes, alcool, ACAB...)
- `script.js` — le bouton "Non" qui fuit la souris + révélation du message perso au clic sur "Oui"

## Personnaliser le message
Le message visible après clic sur "Oui" est écrit en dur dans `index.html`,
dans la section `<section class="message-box" id="message-section">`.
Modifie directement ce texte pour mettre ce que tu veux dire à Lou.

## Héberger sur GitHub Pages
1. Crée un nouveau dépôt GitHub (public) et pousse ce dossier dedans :
   ```
   git init
   git add .
   git commit -m "Site crêpes pour Lou"
   git branch -M main
   git remote add origin https://github.com/<ton-utilisateur>/<ton-repo>.git
   git push -u origin main
   ```
2. Sur GitHub : Settings → Pages → Source → "Deploy from a branch" → branche `main`, dossier `/ (root)`.
3. Le site sera disponible quelques minutes après à l'adresse :
   `https://<ton-utilisateur>.github.io/<ton-repo>/`

## Notes
- Aucun backend : le site est 100% statique, rien n'est envoyé nulle part.
- Les tags décoratifs (ACAB, clope, tatouage) sont masqués sur mobile pour ne pas surcharger l'écran.
