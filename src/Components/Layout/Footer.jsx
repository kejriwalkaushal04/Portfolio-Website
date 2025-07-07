import downarrow from '../../images/down-arrow.png';

function Footer(prop) {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className={`w-full flex flex-col justify-end ${prop.nav} ${prop.tx}`}>
      <div className="flex justify-between items-center text-sm px-2 py-5">

        <div className='h-7 aspect-square'></div>

        <p className="text-center">
          © {new Date().getFullYear()} Kaushal Kejriwal. All rights reserved. 
        </p>

        <div className="flex px-5">
          {/* <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-400"
          >
            Email
          </a> */}
          <img src={downarrow} className='h-7 aspect-square' onClick={scrollToTop} title="down icons" />
        </div>

      </div>
    </footer>


  );
}

export default Footer;