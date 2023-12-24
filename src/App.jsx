import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import SignInRoute from "./routes/SignInRoute";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/sign-in" element={<SignInRoute />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
