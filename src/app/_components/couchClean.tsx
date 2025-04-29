import { useEffect, useRef } from "react";
import { SprayBottle } from "@phosphor-icons/react";
import Couch1 from "../../assets/Couch/Couch-1.webp";
import Couch2 from "../../assets/Couch/Couch-2.webp";

export function FancyImageComparisonOptimized() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLImageElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (maskRef.current) {
      maskRef.current.style.maskImage = `linear-gradient(to right, black 50%, transparent 60%)`;
      maskRef.current.style.webkitMaskImage = `linear-gradient(to right, black 50%, transparent 60%)`;
    }
  }, []);

  const updateMask = (clientX: number) => {
    if (!containerRef.current || !maskRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, position));

    maskRef.current.style.maskImage = `linear-gradient(to right, black ${clamped}%, transparent ${
      clamped + 10
    }%)`;
    maskRef.current.style.webkitMaskImage = `linear-gradient(to right, black ${clamped}%, transparent ${
      clamped + 10
    }%)`;

    const divider = containerRef.current.querySelector(
      ".divider"
    ) as HTMLDivElement;
    if (divider) {
      divider.style.left = `${clamped}%`;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      requestAnimationFrame(() => updateMask(e.clientX));
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging.current && e.touches.length > 0) {
      requestAnimationFrame(() => updateMask(e.touches[0].clientX));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg h-96 overflow-hidden select-none touch-none rounded-lg shadow-lg border-orange-50 border-2"
      onMouseMove={handleMouseMove}
      onMouseUp={() => (isDragging.current = false)}
      onMouseLeave={() => (isDragging.current = false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => (isDragging.current = false)}
    >
      <img
        src={Couch2}
        alt="Sofá limpo"
        className="absolute inset-0 w-full h-full "
      />

      <img
        ref={maskRef}
        src={Couch1}
        alt="Sofá sujo"
        className="absolute inset-0 w-full h-full transition-all"
      />

      <div
        className="divider absolute top-0 h-full flex flex-col items-center justify-center"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <div className="w-1 h-full bg-primary" />
        <div
          onMouseDown={() => (isDragging.current = true)}
          onTouchStart={() => (isDragging.current = true)}
          className="w-10 h-10 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center cursor-pointer absolute top-1/2 transform -translate-y-1/2 transition-all hover:scale-110"
        >
          <SprayBottle className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
