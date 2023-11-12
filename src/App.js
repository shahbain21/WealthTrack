import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Routes/LoginPage/LoginPage';
import ViewPage from './Routes/ViewPage/ViewPage';
import InputPage from './Routes/InputPage/InputPage';
import UpdatePage from './Routes/AssetUpdatePage/AssetUpdatePage';
import ResourcesPage from './Routes/ResourcesPage/ResourcesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="update" element={<UpdatePage />} />
          <Route path="view" element={<ViewPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
