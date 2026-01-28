import { useRef, useEffect } from "react";

export function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Ensure video plays on mount (for stricter browser policies)
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    return (
        <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-black">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster="/hero.jpg"
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/hero.mp4" type="video/mp4" />
                {/* Fallback image is handled by 'poster' attribute, 
            but we can also put an img tag here if needed for very old browsers,
            though poster is standard. */}
            </video>

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg tracking-tight">
                        Islam & Sciences
                    </h1>
                    <p className="font-heading text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-md font-light tracking-wide">
                        The Divine Order of the Universe
                    </p>
                </div>
            </div>
        </div>
    );
}
