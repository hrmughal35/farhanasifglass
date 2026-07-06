"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useMemo } from "react";

type ProductGalleryModalProps = {
  title: string;
  images: string[];
  closeLabel: string;
  onClose: () => void;
};

function MarqueeRow({
  images,
  title,
  reverse = false,
}: {
  images: string[];
  title: string;
  reverse?: boolean;
}) {
  const track = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="gallery-marquee group/marquee overflow-hidden">
      <div
        className={`gallery-marquee-track ${reverse ? "gallery-marquee-track--reverse" : ""}`}
      >
        {track.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="gallery-marquee-slide relative shrink-0 overflow-hidden rounded-sm border border-gray-200 bg-gray-100"
          >
            <Image
              src={image}
              alt={`${title} ${(index % images.length) + 1}`}
              fill
              className="object-cover"
              sizes="360px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductGalleryModal({
  title,
  images,
  closeLabel,
  onClose,
}: ProductGalleryModalProps) {
  const midpoint = Math.ceil(images.length / 2);
  const topRow = images.slice(0, midpoint);
  const bottomRow = images.slice(midpoint);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-gallery-title"
    >
      <div
        className="relative w-full max-w-6xl overflow-hidden rounded-sm border border-gold/30 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4">
          <div>
            <h3
              id="product-gallery-title"
              className="font-display text-lg font-bold uppercase text-navy md:text-xl"
            >
              {title}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
              {images.length} photos
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-gray-200 text-navy transition hover:border-gold hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 bg-off-white py-6">
          <MarqueeRow images={topRow} title={title} />
          {bottomRow.length > 0 ? (
            <MarqueeRow images={bottomRow} title={title} reverse />
          ) : null}
        </div>
      </div>
    </div>
  );
}
