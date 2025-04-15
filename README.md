# React Tailwind App

This project is a React application styled with Tailwind CSS. It features a clean layout with a persistent header, footer, and a sidebar navigation menu. The application is structured to be scalable and maintainable, utilizing functional components and React Router for navigation.

## Project Structure

```
react-tailwind-app
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   ├── layouts
│   │   └── MainLayout.jsx
│   ├── pages
│   │   ├── ChatBot.jsx
│   │   ├── Summarize.jsx
│   │   ├── DBSearch.jsx
│   │   ├── WebSearch.jsx
│   │   └── Settings.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public
│   └── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Features

- **Persistent Header**: A header that remains at the top of the application.
- **Sidebar Navigation**: A sidebar with links to different pages:
  - Chat Bot
  - Summarize
  - Database Search
  - Web Search
  - Settings
- **Responsive Design**: The application is styled using Tailwind CSS, ensuring a modern and responsive layout.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd react-tailwind-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.