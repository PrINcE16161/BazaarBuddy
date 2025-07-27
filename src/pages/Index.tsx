import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { PopularOrdersSection } from "@/components/sections/PopularOrdersSection";
import { NearbySuppliersSection } from "@/components/sections/NearbySuppliers";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PopularOrdersSection />
      <NearbySuppliersSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
