interface GeometricPatternProps {
  className?: string;
  variant?: "border" | "divider" | "watermark";
}

export function GeometricPattern({ className = "", variant = "border" }: GeometricPatternProps) {
  if (variant === "watermark") {
    return (
      <svg
        className={`pointer-events-none ${className}`}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.05"
      >
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M25,0 L50,25 L25,50 L0,25 Z" />
            <circle cx="25" cy="25" r="8" />
            <path d="M25,10 L40,25 L25,40 L10,25 Z" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#islamic-pattern)" />
      </svg>
    );
  }

  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center my-8 ${className}`}>
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
            <path d="M20,20 L30,10 L40,20 L30,30 Z" />
            <path d="M40,20 L50,10 L60,20 L50,30 Z" />
            <path d="M60,20 L70,10 L80,20 L70,30 Z" />
            <path d="M80,20 L90,10 L100,20 L90,30 Z" />
            <circle cx="60" cy="20" r="3" fill="currentColor" opacity="0.6" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <svg
      className={className}
      height="2"
      viewBox="0 0 1200 2"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <pattern id="geometric-border" x="0" y="0" width="40" height="2" patternUnits="userSpaceOnUse">
        <path
          d="M0,1 L10,1 M15,0 L15,2 M20,1 L30,1 M35,0 L35,2"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </pattern>
      <rect width="1200" height="2" fill="url(#geometric-border)" />
    </svg>
  );
}
