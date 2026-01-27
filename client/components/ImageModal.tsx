import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  onClose: () => void;
}

/**
 * ImageModal Component
 * Displays an image in a fullscreen lightbox with controls
 * Used for viewing larger versions of news, event, and announcement images
 */
export function ImageModal({
  imageSrc,
  imageAlt = "Image",
  title,
  onClose,
}: ImageModalProps) {
  if (!imageSrc) return null;

  // Add global escape key listener
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Handle backdrop click (click outside the image)
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop - entire screen */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
        onClick={handleBackdropClick}
        aria-label="Close modal by clicking backdrop"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col pointer-events-auto">
          {/* Close Button - top right inside modal */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-lg pointer-events-auto z-10"
            aria-label="Close modal"
            type="button"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative bg-black rounded-lg overflow-hidden flex-1 flex items-center justify-center min-h-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Footer with title and controls */}
          {(title || imageSrc) && (
            <div className="mt-4 bg-black/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {title && (
                    <p className="text-white font-semibold text-sm line-clamp-2">
                      {title}
                    </p>
                  )}
                  <p className="text-white/70 text-xs mt-1 line-clamp-1">
                    {imageSrc}
                  </p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    asChild
                  >
                    <a
                      href={imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open image in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    asChild
                  >
                    <a
                      href={imageSrc}
                      download={imageAlt}
                      title="Download image"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Keyboard hint */}
          <p className="text-white/50 text-xs mt-3 text-center">
            Press <kbd className="px-2 py-1 bg-white/10 rounded text-white">ESC</kbd> or click outside image to close
          </p>
        </div>
      </div>
    </>
  );
}
