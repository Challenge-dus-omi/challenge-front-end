import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppRoutes } from "./routes";
export default function App() {
  return (
    <body>
      <Header />
      <AppRoutes />
      <Footer />
    </body>
  )
}