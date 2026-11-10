"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import CaseStudySection from "@/components/CaseStudySection";
import ServicesExpertiseSection from "@/components/ServicesExpertiseSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsProofSection from "@/components/TestimonialsProofSection";
import ProcessSection from "@/components/ProcessSection";
import BudgetTimelineSection from "@/components/BudgetTimelineSection";
import AboutStudioSection from "@/components/AboutStudioSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaEnquirySection from "@/components/FinalCtaEnquirySection";

import FloatingNav from "@/components/FloatingNav";
import StudioDrawer from "@/components/StudioDrawer";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import ProjectModal from "@/components/ProjectModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 
        ========================================================================
        FINAL RECOMMENDED HOMEPAGE SEQUENCE (11 SECTIONS)
        ========================================================================
      */}

      {/* 1. Hero — relevance and value proposition */}
      <HeroSection
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* Floating Navbar on Scroll (Sticky Header) */}
      <FloatingNav
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* 2. Featured Projects — visual interest (Philosophy Showcase) */}
      <ScrollReveal>
        <PhilosophySection
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </ScrollReveal>

      {/* 3. About the Studio & Principal Architect — personal trust & leadership */}
      <ScrollReveal>
        <AboutStudioSection
          onOpenConsultation={() => setIsConsultOpen(true)}
        />
      </ScrollReveal>

      {/* 4. Project Transformation / Case Study — proof of capability */}
      <ScrollReveal>
        <CaseStudySection />
      </ScrollReveal>

      {/* 5. Services — relevance to visitor's needs */}
      <ScrollReveal>
        <ServicesExpertiseSection
          onOpenConsultation={() => setIsConsultOpen(true)}
        />
      </ScrollReveal>

      {/* 6. Why Choose Us — differentiation */}
      <ScrollReveal>
        <WhyChooseUsSection
          onOpenConsultation={() => setIsConsultOpen(true)}
        />
      </ScrollReveal>

      {/* 7. Testimonials / Reviews — social proof */}
      <ScrollReveal>
        <TestimonialsProofSection />
      </ScrollReveal>

      {/* 8. Process — clarity and risk reduction */}
      <ScrollReveal>
        <ProcessSection
          onOpenConsultation={() => setIsConsultOpen(true)}
        />
      </ScrollReveal>

      {/* 9. Budget & Timeline — practical concerns */}
      <ScrollReveal>
        <BudgetTimelineSection
          onOpenConsultation={() => setIsConsultOpen(true)}
        />
      </ScrollReveal>

      {/* 10. FAQs — resolve remaining objections */}
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      {/* 11. Final CTA + Enquiry Form — conversion */}
      <ScrollReveal>
        <FinalCtaEnquirySection
          onOpenConsultation={() => setIsConsultOpen(true)}
        />
      </ScrollReveal>

      {/* Studio Atelier Footer */}
      <ScrollReveal>
        <Footer onOpenConsultation={() => setIsConsultOpen(true)} />
      </ScrollReveal>

      {/* Full-Screen Studio Drawer Menu */}
      <StudioDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => setIsConsultOpen(true)}
      />
    </main>
  );
}
