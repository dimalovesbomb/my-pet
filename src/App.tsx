import React from 'react';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ChooseLang } from './components/ChooseLang';
import { localize } from './localization';
import { routes } from './routes';
import { useAppDispatch, useAppSelector } from './store';
import { changeLang, LANGS } from './store/locale';
import './App.scss';

const currentPath = '/';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(state => state.locale.lang);
  const location = useLocation();

  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const language = e.currentTarget.dataset.lang as LANGS;
    dispatch(changeLang(language));
  }

  return (
    <div className="app">
      <header className="header">
        <h1>{localize(location.pathname, 'page header')}</h1>
        <ChooseLang lang={lang} changeLanguage={changeLanguage} />
      </header>
      <aside className="aside">
        <nav>
          { routes.map(link => (
            link.show &&
            <Link
              key={link.id}
              to={link.to}
              data-active={location.pathname === link.to}
            >
                {localize(link.to, link.linkText)}
            </Link>))
          }
          <Outlet />
        </nav>
      </aside>
      <main className="main">
        <Routes>
          <Route path={currentPath}>
            { routes.map(route => (
                <Route
                  key={route.id}
                  path={route.to}
                  element={<route.component />}
                />))
            }
          </Route>
        </Routes>
      </main>
      <footer className="footer">
        <span>{localize(currentPath, 'rights')}</span>
      </footer>
    </div>
  );
}

export default App;
