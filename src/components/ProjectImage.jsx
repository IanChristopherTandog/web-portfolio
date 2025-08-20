import React from "react";

export default function ProjectImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.onerror = null // avoid infinite loop
        e.currentTarget.src = "images/coming-soon.png"; // fallback image
      }}
      className={`object-cover w-full h-full rounded-lg ${className}`}
    />
  )
}