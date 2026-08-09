# 📚 My Magical Bookstore

**My Magical Bookstore** is a book management and discovery application inspired by platforms such as Goodreads, with a magical twist.

The project is being developed with **Angular and Micro Frontends**, separating the main bookstore experience from a specialized interactive room where users can display the books they have read.

> 🚧 **Status: In development**

## ✨ Features

The application is planned to include:

* 🔐 **User authentication**
* 📚 **Book search**
* ⭐ **Book ratings**
* 📖 **Personal reading history**
* 🏠 **Personalized book room**
* 👤 **User-specific content**
* 🧩 **Micro Frontend architecture**
* 🎮 An interactive room where users can visually display the books they have read

### 🏠 Personalized Book Room

One of the main features of the application is a dedicated **Micro Frontend** for each user's room.

The room represents a visual space where users can display the books they have read. Users will have the option to decide whether their room should be publicly visible.

This part of the application is intentionally separated from the main bookstore because it is planned to contain significantly more interactive and graphical functionality than the rest of the application.

```text
┌─────────────────────────────────────────────┐
│              My Magical Bookstore           │
│                                             │
│  Search books • Ratings • Library • Login   │
│                                             │
│                  ┌──────────────┐           │
│                  │  User Room   │           │
│                  │              │           │
│                  │ 📚 📖 📕 📗│           │
│                  │              │           │
│                  └──────────────┘           │
│                                             │
└─────────────────────────────────────────────┘
```

## 🧩 Architecture

The application uses a **Micro Frontend architecture**.

The main application acts as the **Shell**, while the interactive room is implemented as an independent Micro Frontend.

```text
My Magical Bookstore
│
├── mf-shell
│   ├── Authentication
│   ├── Book search
│   ├── Book ratings
│   ├── User library
│   └── Application navigation
│
└── mf-room
    └── User's personalized reading room
```

The Micro Frontend architecture allows the room to evolve independently from the main application while keeping the main bookstore focused on its core functionality.

## 🛠️ Technologies

### Frontend

* **Angular**
* **TypeScript**
* **PrimeNG** — UI components
* **PrimeFlex** — layout and utility classes
* **NgRx / Redux** — application state management
* **RxJS** — reactive programming
* **Angular Signals** — local reactive state
* **Native Federation** — Micro Frontend architecture

### Planned Backend

The backend is planned to use:

* **Node.js**
* **Firebase**

Firebase is planned to handle authentication and/or application data depending on the final architecture.

## 📦 Project Structure

The project is organized around the Micro Frontend architecture:

```text
My-Magical-Bookstore/
│
├── projects/
│   │
│   ├── mf-shell/
│   │   └── Main bookstore application
│   │
│   └── mf-room/
│       └── Personalized user room
│
├── package.json
├── angular.json
└── README.md
```

## 🚧 Development Status

The project is currently under active development.

### Implemented

* [x] Angular project setup
* [x] Micro Frontend architecture
* [x] Shell application
* [x] Room Micro Frontend
* [x] Remote loading between Shell and Room

### Planned

* [ ] User authentication
* [ ] Book search
* [ ] Book ratings
* [ ] Reading history
* [ ] User profiles
* [ ] Public/private room configuration
* [ ] Persistent user data
* [ ] Node.js backend
* [ ] Firebase integration
* [ ] Interactive book room
* [ ] 3D/interactive room experience

## 🎯 Project Goals

The goal of **My Magical Bookstore** is not only to create a book management application, but also to explore modern frontend architecture and build a more immersive way of interacting with a personal reading history.

The project is also intended as a practical exploration of:

* Modern Angular development
* Micro Frontends
* State management
* Component-based UI architecture
* Reactive programming
* Frontend/backend integration
* Interactive web experiences

## 🔗 Repository

**GitHub:**
https://github.com/JavierBagatoli/My-Magical-Bookstore

---

## 📄 License

This project is currently under development. License information will be added in a future release.
