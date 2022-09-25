import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import NoteList from './components/note-list/NoteList';
import Layout from './layout/Layout';

interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/' element={<NoteList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
