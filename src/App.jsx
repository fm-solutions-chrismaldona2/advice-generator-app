import "@/styles/global.css";
import "@/styles/variables.css";
import "@/features/AdviceCard/AdviceCard";
import AdviceCard from "@/features/AdviceCard/AdviceCard";
import CenteredWrapper from "@/components/Layouts/CenteredWrapper/CenteredWrapper";
import Footer from "@/components/Footer/Footer";

function App() {
  return (
    <>
      <CenteredWrapper>
        <AdviceCard />
      </CenteredWrapper>
      <Footer />
    </>
  );
}

export default App;
