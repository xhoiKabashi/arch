"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSkeleton from "../loading/FullPageLoading";

const projects = [
  {
    id: 1,
    image: '/1.jpg',
    title: 'Aki Apartment',
    category: 'Cambridge Apartment / Living',
    filter: "architecture"
  },
  {
    id: 6,
    image: '/2.jpg',
    title: 'Aki Apartment',
    category: 'Cambridge Apartment / Living',
    filter: "architecture"
  },
  {
    id: 2,
    image: '/3.jpg',
    title: 'Aki Apartment',
    category: 'Cambridge Apartment / Living',
    filter: "exterior"
  },
  {
    id: 3,
    image: '/4.jpg',
    title: 'Aki Apartment',
    category: 'Cambridge Apartment / Living',
    filter: "exterior"
  },
  {
    id: 4,
    image: '/5.jpg',
    title: 'Aki Apartment',
    category: 'Cambridge Apartment / Living',
    filter: "interior"
  },
  {
    id: 5,
    image: '/6.jpg',
    title: 'Aki Apartment',
    category: 'Cambridge Apartment / Living',
    filter: "interior"
  },
];

export default function Cards({ activeFilter }: { activeFilter: string }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isActive = (projectId: number) => selectedId === projectId || hoveredId === projectId;

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.filter === activeFilter);

  // Preload images and ensure all images are loaded before rendering
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Wait for all image promises to resolve
        await Promise.all(
          filteredProjects.map((project) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = project.image;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        setIsLoading(false); // All images are fully preloaded
      } catch (error) {
        console.error("Error loading images", error);
        setIsLoading(false); // Handle errors gracefully
      }
    };

    loadImages();
  }, [filteredProjects]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          className="relative h-64 w-full cursor-pointer overflow-hidden"
          onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
          onHoverStart={() => setHoveredId(project.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <AnimatePresence>
            {isActive(project.id) && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.category}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
