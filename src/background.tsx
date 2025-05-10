// src/background.tsx
import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playingForwardRef = useRef(true);       // ref mutable para dirección
    const [fading, setFading] = useState(false);  // sólo para el fade
    const intervalRef = useRef<number>();

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Inicialización
        video.currentTime = 0;
        video.playbackRate = 1;
        video.play();

        // Bucle 30fps
        intervalRef.current = window.setInterval(() => {
            if (!video) return;

            if (playingForwardRef.current) {
                // Llegamos al final → preparamos reversa
                if (video.currentTime >= video.duration - 0.05) {
                    video.pause();
                    setFading(true);
                    setTimeout(() => {
                        setFading(false);
                        playingForwardRef.current = false;
                    },); // fade-out
                }
            } else {
                // Reversa manual
                if (video.currentTime <= 0.05) {
                    setFading(true);
                    setTimeout(() => {
                        setFading(false);
                        playingForwardRef.current = true;
                        video.playbackRate = 1;
                        video.play();
                    },); // fade-in
                } else {
                    video.currentTime -= 0.033; // retrocede ~1 frame
                }
            }
        }, 33);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []); // ¡vacío! no vuelve a reiniciar

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <video
                ref={videoRef}
                style={{ minWidth: "100%", minHeight: "100%" }}
                className={`absolute top-0 left-0 object-cover object-center brightness-90 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"
                    }`}
                src="/images/WhatsApp Video 2025-05-10 at 11.02.20.mp4"
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
    );
}
