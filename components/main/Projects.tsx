"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { useRouter } from "next/navigation";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const router = useRouter();

  // Function to handle navigation
  const handleNavigation = (link: string) => {
    router.push(link); // navigates to internal project route
  };

  return (
    <section
      id="projects"
      className="flex z-[40] flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Swiper container */}
      <div className="w-full px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div
              onClick={() =>
                handleNavigation(
                  "https://ai-wireframe-to-code-nine.vercel.app/",
                )
              }
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProjectCard
                src="/wireframeToCode.png"
                title="WireframeToCode"
                description="Transform hand-drawn wireframes into production-ready code using AI automation."
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              onClick={() =>
                handleNavigation("https://ai-ide-alpha.vercel.app/")
              }
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProjectCard
                src="/aiide.png"
                title="AI-IDE"
                description="An intelligent online code editor powered by AI to assist with coding and debugging."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() =>
                handleNavigation("https://pdf-insight-zeta.vercel.app/")
              }
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProjectCard
                src="/pdfInsight.png"
                title="PDF-Insight"
                description="Create notes along side AI to help you understand contents of your PDF"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              onClick={() =>
                handleNavigation("https://ai-email-template-two.vercel.app/")
              }
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProjectCard
                src="/emailTemplate.png"
                title="EmailTemp"
                description="Generate professional and personalized email templates instantly with AI."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() =>
                handleNavigation("https://ai-forms-umber.vercel.app/")
              }
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProjectCard
                src="/forms.png"
                title="AutoForms"
                description="Easily generate and customize forms with AI assistance for faster workflows."
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div
              onClick={() =>
                handleNavigation("https://ai-logo-green.vercel.app/")
              }
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProjectCard
                src="/aiLogo.png"
                title="LogoGen"
                description="Create stunning and unique logos tailored to your brand using AI."
              />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
