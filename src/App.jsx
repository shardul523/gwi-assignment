import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import SignInRoute from "./routes/SignInRoute";
import MainLayout from "./components/layouts/MainLayout";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/sign-in" element={<SignInRoute/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App;
