import AdviceCard from "@/features/advices/AdviceCard";
import CenteredWrapper from "@/shared/layouts/CenteredWrapper/CenteredWrapper";
import Footer from "@/shared/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <CenteredWrapper>
        <AdviceCard />
      </CenteredWrapper>
      <Footer />
    </>
  );
}
