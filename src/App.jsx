import "@/styles/global.css";
import "@/styles/variables.css";
import "@/features/AdviceCard/AdviceCard";
import AdviceCard from "@/features/AdviceCard/AdviceCard";
import CardWrapper from "@/components/Layouts/CardWrapper/CardWrapper";
import Footer from "@/components/Footer/Footer";

function App() {
  return (
    <>
      <CardWrapper>
        <AdviceCard />
      </CardWrapper>
      <Footer />
    </>
  );
}

export default App;
