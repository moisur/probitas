import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';

const TestimonialsPage: React.FC = () => {
    return (
        <div className="h-screen w-full bg-[#06162d] overflow-hidden relative flex flex-col pt-32 md:pt-40">
            {/* Éclairage d'ambiance dynamique plus profond pour faire ressortir la carte */}
            <div className="absolute -top-[10%] -right-[10%] w-[80vw] h-[80vw] bg-[#BF9B8E]/15 blur-[120px] rounded-full -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute -bottom-[10%] -left-[10%] w-[80vw] h-[80vw] bg-white/5 blur-[120px] rounded-full -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

            {/* Conteneur Principal avec marges mobiles pour l'effet "Box" */}
            <main className="flex-1 w-full flex items-center justify-center p-2 md:p-6 overflow-hidden">
                <div className="w-full h-full max-w-6xl mx-auto rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_30px_100px_-10px_rgba(0,0,0,0.9)] relative border border-white/10 bg-[#0C2E59]">
                    <TestimonialSlider />
                </div>
            </main>

        </div>
    );
};

export default TestimonialsPage;
