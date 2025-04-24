import { Header } from "./components/shared/header";
import { Main } from "./components/main";
import { Footer } from "./components/shared/footer";

export default function App() {
  return (
    <div className="font-poppins w-full h-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
