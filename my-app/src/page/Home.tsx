import Collection from "../components/Collection";
import CommunityFAQ from "../components/CommunityFAQ";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InnerCollector from "../components/InnerCollector";
import Marketplace from "../components/Marketplace";
import WeeklyTopNFT from "../components/WeeklyTopNFT";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
    return (
    <>
      <Header />
      <Hero />
      <WeeklyTopNFT />
      <Collection />
      <Marketplace />
      <InnerCollector />
      <CommunityFAQ />
      <CTA />
      <Footer />
    </>
  );
}