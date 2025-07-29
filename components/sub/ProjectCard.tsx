import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[480px]">
      {/* Image wrapper with fixed height */}
      <div className="w-full h-[380px] relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-1 p-4">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 flex-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
