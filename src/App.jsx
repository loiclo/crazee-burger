import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/order/OrderPage"
import ErrorPage from "./components/pages/error/ErrorPage"

function App() {
  return (
    <div className="loginpage">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/order/:username" element={<OrderPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App

// const LoginPage = styled.LoginPage`
//   background-image: url("./assets/images/F03burger-background.jpg");
// `;