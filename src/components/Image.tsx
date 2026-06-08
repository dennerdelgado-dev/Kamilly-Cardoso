import { useMemo, ImgHTMLAttributes } from "react";
import { getOptimizedImageUrl } from "../data";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  className,
  ...rest
}: ImageProps) {
  // Automatically generate responsive widths for srcSet using getOptimizedImageUrl
  const srcSet = useMemo(() => {
    if (src.includes("lh3.googleusercontent.com")) {
      const widths = [200, 300, 400, 500, 600, 800, 1000, 1200];
      return widths
        .map((w) => `${getOptimizedImageUrl(src, w)} ${w}w`)
        .join(", ");
    }
    return undefined;
  }, [src]);

  // Determine base source based on specified width or reasonable default
  const optimizedSrc = useMemo(() => {
    if (width && typeof width === "number") {
      return getOptimizedImageUrl(src, width);
    }
    return getOptimizedImageUrl(src, 800);
  }, [src, width]);

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding={priority ? "sync" : "async"}
      className={className}
      {...rest}
    />
  );
}
