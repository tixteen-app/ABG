import "./globals.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Products />
        <WhyChooseUs />
        <Team />
      </main>
      <Footer />
    </div>
  );
}