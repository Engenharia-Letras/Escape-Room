import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CasteloPage from '../pages/CasteloPage';

export default function AppRoutes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CasteloPage></CasteloPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}