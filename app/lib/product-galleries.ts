export const PRODUCT_GALLERY_KEYS = [
  "aluminium-doors",
  "aluminium-windows",
  "porch-front-fixings",
  "balcony-staircase",
  "glass-partitions",
  "grill-glass-doors",
  "kitchen-cabinets",
  "casting-gates-grills",
  "window-wood-doors",
  "rolling-shutters",
] as const;

export type ProductGalleryKey = (typeof PRODUCT_GALLERY_KEYS)[number];

const GALLERY_IMAGE_COUNT = 10;

function galleryPaths(key: ProductGalleryKey): string[] {
  return Array.from({ length: GALLERY_IMAGE_COUNT }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    return `gallery/products/${key}/${num}.jpg`;
  });
}

/** Real reference photos per product category (10 images each). */
export const productGalleries: Record<ProductGalleryKey, string[]> = {
  "aluminium-doors": galleryPaths("aluminium-doors"),
  "aluminium-windows": galleryPaths("aluminium-windows"),
  "porch-front-fixings": galleryPaths("porch-front-fixings"),
  "balcony-staircase": galleryPaths("balcony-staircase"),
  "glass-partitions": galleryPaths("glass-partitions"),
  "grill-glass-doors": galleryPaths("grill-glass-doors"),
  "kitchen-cabinets": galleryPaths("kitchen-cabinets"),
  "casting-gates-grills": galleryPaths("casting-gates-grills"),
  "window-wood-doors": galleryPaths("window-wood-doors"),
  "rolling-shutters": galleryPaths("rolling-shutters"),
};

export function getProductCoverImage(key: ProductGalleryKey): string {
  return productGalleries[key][0];
}
