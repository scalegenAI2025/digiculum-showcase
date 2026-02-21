import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { 
  EcosystemForm
} from "@/components/ecosystem";

const EcosystemFormUpdated = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* <SectionSeparator /> */}
      <EcosystemForm />   
      <Footer />
    </div>
  );
};

export default EcosystemFormUpdated;
