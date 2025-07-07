import photo from '../images/p_Photo.jpg';

function Home(prop) {
  return (
    <>
      <div className='flex flex-col justify-center min-h-screen min-w-screen'>
        <div className="px-4 py-5 text-center ">
          <img
            className="mx-auto mb-4 rounded-full object-cover aspect-square border-4 border-white shadow-lg"
            alt="profile picture"
            width={300}
            src={photo}
          />
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Kaushal Kejriwal</h1>
          <div className="max-w-lg mx-auto">
            <p className="text-lg ">
              A Materials Engineering student at IIT (BHU), passionate about technology and innovation.
            </p>
            <a href="https://drive.google.com/file/d/1ifu_RLrANmBsNpGXdbyVj94uflbMrVD5/view?usp=drive_link" target='_blank' className='flex justify-end m-3'>
              <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">Download Resume</button>
              </a>

          </div>
        </div>
      </div>



    </>
  );
}

export default Home;
