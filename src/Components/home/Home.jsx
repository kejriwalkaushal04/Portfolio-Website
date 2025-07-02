import photo from '../../images/p_Photo.jpg';

function Home(prop) {
    return (
        <>
        {/* <div className='flex justify-center'>
        <div className={`h-[80vh] w-[90%] ${prop.bg} ${prop.tx} rounded-xl flex items-center justify-between px-28  transition-all duration-1000 ease-in `}>
            <div className="space-y-3 animate-fade-in">
                <p className="text-4xl font-bold">Hi, I'm Kaushal Kejriwal</p>
                <p className="text-xl max-w-xl">
                    A Materials Engineering student at IIT (BHU), passionate about technology and innovation.
                </p>
            </div>
            <img 
                src={photo} 
                alt="Kaushal's Photo" 
                className="h-[60vh] object-cover rounded-xl shadow-lg"
            />
        </div>
        </div> */}
        <div className="flex justify-center">
  <div className={`flex flex-col rounded-xl py-28 items-center h-[80vh] w-[90%] ${prop.bg} ${prop.tx}`}>
    
    <img 
      src={photo} 
      alt="Kaushal's Photo" 
      className="rounded-full object-cover aspect-square 
                 w-32 sm:w-40 md:w-48 lg:w-56 xl:max-w-7xl 
                 border-4 border-white shadow-lg"
    />

    <div className="flex flex-col items-center p-4 text-center space-y-3">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold">
        Hi, I'm Kaushal Kejriwal
      </p>
      <p className="text-base sm:text-lg md:text-xl max-w-xl">
        A Materials Engineering student at IIT (BHU), passionate about technology and innovation.
      </p>
    </div>

  </div>
</div>

        </>
    );
}

export default Home;
