
# 🎬 MovieApp

MovieApp est une application web qui permet aux utilisateurs de découvrir les films populaires, de consulter leurs détails, d'ajouter des films à leur Wishlist et de gérer cette liste de manière dynamique. 🚀

---

## 🛠️ Fonctionnalités

- **Liste des films populaires** : Découvrez les films les plus populaires grâce à une interface élégante et intuitive.
- **Recherche de films** : Trouvez vos films préférés en recherchant directement dans la barre de recherche.
- **Détails d'un film** : Consultez les informations détaillées d'un film, y compris les acteurs principaux.
- **Wishlist dynamique** : Ajoutez vos films favoris à une Wishlist, avec un suivi en temps réel dans la barre de navigation.
- **Films similaires** : Explorez des suggestions basées sur le film que vous consultez.
- **Gestion de la Wishlist** : Ajoutez ou retirez des films de votre Wishlist à tout moment.

---

## 📂 Structure du projet

```
src
├── assets               # Images, icônes ou fichiers statiques
├── components           # Tous les composants réutilisables
│   ├── MovieCard        # Composant MovieCard
│   │   ├── MovieCard.jsx
│   │   └── MovieCard.css
│   ├── MovieDetail      # Composant MovieDetail
│   │   ├── MovieDetail.jsx
│   │   └── MovieDetail.css
│   ├── MovieList        # Composant MovieList
│   │   ├── MovieList.jsx
│   │   └── MovieList.css
│   ├── Navbar           # Composant Navbar
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   └── Wishlist         # Composant Wishlist
│       ├── Wishlist.jsx
│       └── Wishlist.css
├── contexts             # Contextes globaux
│   └── WishlistContext.jsx
├── App.jsx              # Composant principal
├── App.css              # Style global de l'application
└── index.jsx            # Point d'entrée de l'application
```

---

## 💻 Installation et lancement

Suivez ces étapes pour cloner et exécuter le projet localement :

### Étapes
1. **Clonez le projet** :
   ```bash
   git clone [https://github.com/Lucas-Labasque/ReactTP.git](https://github.com/Lucas-Labasque/ReactTP.git)
   cd ReactTP
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrez le serveur local** :
   ```bash
   npm run dev
   ```

4. **Accédez à l'application** :
   Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

#
## 🔗 Ressources

- [Documentation TMDb API](https://developers.themoviedb.org/3/getting-started)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)

---

## ✨ Auteur

Projet développé avec passion par **Labasque Lucas**. 🚀
N'hésitez pas à me contacter pour toute question ou suggestion !

---
