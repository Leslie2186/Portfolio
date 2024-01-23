import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Presentation from './components/presentation/Presentation.jsx';
import Projets from './components/projets/Projets.jsx';
import ProjetQuizz from './components/projets/projetQuizz/ProjetQuizz.jsx';
import ProjetSuperHero from './components/projets/projetSuperHero/ProjetSuperHero.jsx';
import Loreal from './components/projets/loreal/Loreal.jsx';
import ProjetVacances from './components/projets/projetVacances/ProjetVacances.jsx';
import Eating from './components/projets/eating/Eating.jsx';
import Contact from './components/contact/Contact.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Presentation />,
      },
      {
        path: "/projets",
        element: <Projets />,
      },
      {
        path: "/projetQuizz",
        element: <ProjetQuizz />
      },
      {
        path: "/projetSuperHero",
        element: <ProjetSuperHero />
      },
      {
        path: "/loreal",
        element: <Loreal />
      },
      {
        path: "/projetVacances",
        element: <ProjetVacances />
      },
      {
        path: "/eating",
        element: <Eating />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
