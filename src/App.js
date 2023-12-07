import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Routes/LoginPage/LoginPage';
import ViewPage from './Routes/ViewPage/index/ViewPage';
import InputPage from './Routes/InputPage/InputPage';
import UpdatePage from './Routes/UpdatePage/UpdatePage';
import ResourcesPage from './Routes/ResourcesPage/ResourcesPage';
import ViewAssetTypePage from './Routes/ViewPage/AssetTypePage/ViewAssetTypePage';
import CreateAccountPage from './Routes/CreateAccountPage/CreateAccountPage'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="create" element={<CreateAccountPage />} />
            <Route path="input" element={<InputPage />} />
            <Route path="update" element={<UpdatePage />} />
            <Route path="view" element={<ViewPage />} />
            <Route path="view/:assetType" element={<ViewAssetTypePage />} />
            <Route path="resources" element={<ResourcesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
