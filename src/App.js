import React from 'react';
import { SectionComponent } from './components/SectionComponent';
import { LatestProjects } from './components/LatestProjects';
import Testimonials from './components/Testimonials';
import DiscussProject from './components/DiscussProject';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <SectionComponent
        color="#fcefd4"
        title="Portfolio"
        subtitle="Latest Projects"
        ContentComponent={LatestProjects}
      />
      <SectionComponent
        color="#ffffff"
        title="Testimonial"
        subtitle="Client's Kind Word"
        ContentComponent={Testimonials}
      />
      <SectionComponent
        color="#fcefd4"
        title="Contact"
        subtitle="Let's Discuss Project"
        ContentComponent={DiscussProject}
      />
      <Footer />
    </div>
  );
}

export default App;
