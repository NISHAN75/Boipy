# 📚 Boipy — Book Read & Buy Platform

A modern book discovery platform where readers can explore, read, and wishlist books they love — built with React, Firebase, and Tailwind CSS.

🔗 **Live Site:** [https://boispy.web.app](https://boispy.web.app)

---

## 🚀 Features

- 📖 **Browse Books** — Explore a rich collection of books with pagination
- 🔍 **Book Details** — View full details including author, publisher, rating, tags, and review
- ✅ **Mark as Read** — Save books you've read to your personal read list
- 🔖 **Wishlist** — Add books to your wishlist for later
- 📊 **Pages to Read Chart** — Visual spike chart showing pages of your saved books
- 🗂️ **Listed Books** — View and sort your Read & Wishlist books by rating, pages, or year
- 🔐 **Authentication** — Sign up & Sign in with Email, Google, Facebook, or Twitter
- 📱 **Fully Responsive** — Works perfectly on mobile, tablet, and desktop
- 🎨 **Beautiful UI** — Clean design with smooth animations and transitions

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 19 | Frontend framework |
| React Router | Client-side routing |
| Tailwind CSS | Styling |
| DaisyUI | UI components |
| Firebase Auth | Authentication |
| Recharts | Data visualization |
| SweetAlert2 | Beautiful alerts |
| React Icons | Icons |

---

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/your-username/book-vibe.git

# Go to project directory
cd book-vibe

# Install dependencies
npm install

# Create .env file and add your Firebase config
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id

# Start development server
npm run dev
```

---

## 🔐 Authentication Methods

- ✅ Email & Password
- ✅ Google
- ✅ Facebook
- ✅ Twitter

---

## 📁 Project Structure
```
src/
├── components/
│   ├── AuthContext/     # Firebase auth context
│   ├── Book/            # Single book card
│   ├── Books/           # Books grid with pagination
│   ├── BookDetails/     # Book details page
│   ├── Navbar/          # Responsive navbar
│   ├── Banner/          # Hero banner
│   ├── Footer/          # Footer
│   ├── SingIn/          # Sign in page
│   ├── SingUp/          # Sign up page
│   └── Utility/         # localStorage helpers
├── pages/
│   ├── Home/            # Home page
│   ├── About/           # About page
│   ├── ListedBooks/     # Read & Wishlist tabs
│   ├── PageRead/        # Pages chart
│   └── Root/            # Layout wrapper
├── firebase/            # Firebase config
└── Routes/              # App routes
```

---

## 🌐 Deployment

Deployed on **Firebase Hosting**
```bash
npm run build
firebase deploy
```

---

## 👨‍💻 Author

Made with ❤️ by **Nisha Das**

⭐ If you like this project, give it a star on GitHub!
