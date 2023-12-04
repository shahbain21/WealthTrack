import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './Routes/LoginPage/LoginPage';
import ViewPage from './Routes/ViewPage/index/ViewPage';
import InputPage from './Routes/InputPage/InputPage';
import UpdatePage from './Routes/UpdatePage/UpdatePage';
import ResourcesPage from './Routes/ResourcesPage/ResourcesPage';
import ViewAssetTypePage from './Routes/ViewPage/AssetTypePage/ViewAssetTypePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="update" element={<UpdatePage />} />
          <Route path="view" element={<ViewPage />} />
          <Route path="view/:assetType" element={<ViewAssetTypePage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
