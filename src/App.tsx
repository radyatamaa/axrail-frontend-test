import AirCoverSection from "./components/AirCoverSection";
import CoHostSection from "./components/CoHostSection";
import EasyListSection from "./components/EasyListSection";
import FAQSection from "./components/FAQSection";
import Header from "./components/Header";
import HeroEarningsSection from "./components/HeroEarningsSection";
import HostingToolsSection from "./components/HostingToolsSection";
import RentalInfoSection from "./components/RentalInfoSection";
import FooterSection from "./components/FooterSection";
import BottomFooterBar from "./components/BottomFooterBar";

export default function App() {
  return (
    <>
      <Header />
      <HeroEarningsSection />
      <EasyListSection />
      <CoHostSection />
      <AirCoverSection />
      <HostingToolsSection />
      <RentalInfoSection />
      <FAQSection />
      <FooterSection />
      <BottomFooterBar />
    </>
  );
}