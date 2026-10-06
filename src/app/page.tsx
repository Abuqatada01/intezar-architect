"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import PeopleBehindArtSection from "@/components/PeopleBehindArtSection";
import StudioDrawer from "@/components/StudioDrawer";
import FloatingNav from "@/components/FloatingNav";
import PillarsSection from "@/components/PillarsSection";
import ExperienceStatsSection from "@/components/ExperienceStatsSection";
import RenovationSection from "@/components/RenovationSection";
import DeliveredProjectsSection from "@/components/DeliveredProjectsSection";
import TransformationSection from "@/components/TransformationSection";
import BimSection from "@/components/BimSection";
import PortfolioSection from "@/components/PortfolioSection";
import EstimatorSection from "@/components/EstimatorSection";
import PressSection from "@/components/PressSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import ProjectModal from "@/components/ProjectModal";

import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* 1. Exact 1:1 Architectural Hero Section */}
      <HeroSection
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* 2. Our Philosophy & Design Lab Section */}
      <ScrollReveal>
        <PhilosophySection />
      </ScrollReveal>

      {/* 3. What We Do / Services Showcase (White Theme) */}
      <ScrollReveal>
        <WhatWeDoSection onOpenConsultation={() => setIsConsultOpen(true)} />
      </ScrollReveal>

      {/* 3.5 The People Behind The Art & Atelier */}
      <ScrollReveal>
        <PeopleBehindArtSection />
      </ScrollReveal>

      {/* 4. Floating Navbar on Scroll (Sticky / Independent) */}
      <FloatingNav
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* 5. Architectural Pillars */}
      <ScrollReveal>
        <PillarsSection onOpenConsultation={() => setIsConsultOpen(true)} />
      </ScrollReveal>

      {/* 6. Experience & Track Record Stats */}
      <ScrollReveal>
        <ExperienceStatsSection />
      </ScrollReveal>

      {/* 7. Renovation & Remodeling Showcase */}
      <ScrollReveal>
        <RenovationSection onOpenConsultation={() => setIsConsultOpen(true)} />
      </ScrollReveal>

      {/* 8. Projects We've Delivered Bento Gallery */}
      <ScrollReveal>
        <DeliveredProjectsSection onOpenConsultation={() => setIsConsultOpen(true)} />
      </ScrollReveal>

      {/* 9. Interactive Transformation Before & After */}
      <ScrollReveal>
        <TransformationSection />
      </ScrollReveal>

      {/* 5. BIM 5D Precision & Engineering */}
      {/* <BimSection /> */}

      {/* 6. Selected Works & Filterable Portfolios */}
      <ScrollReveal>
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />
      </ScrollReveal>

      {/* 7. Real-Time Budget Estimator */}
      {/* <EstimatorSection onOpenConsultation={() => setIsConsultOpen(true)} /> */}

      {/* 8. Accolades & Press */}
      {/* <PressSection /> */}

      {/* 9. Frequently Asked Questions */}
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      {/* 10. Atelier Footer */}
      <ScrollReveal>
        <Footer onOpenConsultation={() => setIsConsultOpen(true)} />
      </ScrollReveal>

      {/* Full-Screen Studio Drawer */}
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
