import photo from '../images/p_Photo.jpg';

function Hero(prop) {
    return (
        <div className={`h-screen ${prop.bg} ${prop.tx} flex items-center justify-between px-28  transition-all duration-1000 ease-in`}>
            {/* Text Section */}
            <div className="space-y-3 animate-fade-in">
                <p className="text-4xl font-bold">Hi, I'm Kaushal Kejriwal</p>
                <p className="text-xl max-w-xl">
                    A Materials Engineering student at IIT (BHU), passionate about technology and innovation.
                </p>
            </div>

            {/* Image Section */}
            <img 
                src={photo} 
                alt="Kaushal's Photo" 
                className="h-700 object-cover rounded-xl shadow-lg"
            />
        </div>
    );
}

export default Hero;
