export default function HeroSection() {
    return (
        <section className="relative h-[75vh] flex items-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/homepage/Gemini_Generated_Image_4o1ucu4o1ucu4o1u.png')`
                }}
            />

            {/* Hero Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Your Reliable Guide<br />to Badulla Transport.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Find bus schedules, plan your journey, and travel with confidence.
                    </p>
                </div>
            </div>
        </section>
    );
}