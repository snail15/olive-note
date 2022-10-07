import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import NoteList from './components/note-list/NoteList';
import Layout from './layout/Layout';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import { AuthRoute } from './components/auth-route/AuthRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Firebase = initializeApp(config.firebaseConfig);

interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <AuthRoute>
                <NoteList />
              </AuthRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
