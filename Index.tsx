import VHSOverlay from "@/components/VHSOverlay";
import HeroSection from "@/components/HeroSection";
import VecnaSection from "@/components/VecnaSection";
import MikeSection from "@/components/MikeSection";
import ElevenSection from "@/components/ElevenSection";
import WillSection from "@/components/WillSection";
import FriendshipSection from "@/components/FriendshipSection";
import FinaleSection from "@/components/FinaleSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <VHSOverlay />
      <HeroSection />
      <VecnaSection />
      <MikeSection />
      <ElevenSection />
      <WillSection />
      <FriendshipSection />
      <FinaleSection />
    </main>
  );
};

export default Index;
