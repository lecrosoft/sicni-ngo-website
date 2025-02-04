import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/300x300?nature",
  "https://source.unsplash.com/random/300x300?water",
  "https://source.unsplash.com/random/300x300?forest",
  "https://source.unsplash.com/random/300x300?city",
  "https://source.unsplash.com/random/300x300?mountain",
  "https://source.unsplash.com/random/300x300?beach",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer rounded-xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
          <motion.div
            className="relative w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
            <button
              className="absolute px-4 py-2 text-black bg-white rounded-full shadow-md top-4 right-4 hover:bg-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✖ Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
