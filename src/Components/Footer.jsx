import downarrow from '../images/down-arrow.png';

function Footer(prop) {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className={`${prop.nav} ${prop.tx} p-4`}>
      <div className="grid grid-cols-3 items-center text-sm px-4">

        <div></div>

        <p className="text-center">
          © {new Date().getFullYear()} Kaushal Kejriwal. All rights reserved.
        </p>

        <div className="flex justify-end gap-4">
          <a
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
          </a>
          <img src={downarrow} className='h-6' onClick={scrollToTop} title="down icons" />
        </div>

      </div>
    </footer>


  );
}

export default Footer;