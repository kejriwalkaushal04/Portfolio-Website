import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

export default function Contact(prop) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${prop.nav} ${prop.tx} p-6`}>
      <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
      <p className="text-lg mb-10 text-center max-w-xl">
        I'm always open to new ideas, collaborations, or just a quick chat. Reach out to me via any of the platforms below!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Email */}
        <a
          href="mailto:work.kaushal04@gmail.com"
          className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg"
        >
          <FaEnvelope className="text-3xl mb-2" />
          <p className="text-lg">Email</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kejriwalkaushal04"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg"
        >
          <FaGithub className="text-3xl mb-2" />
          <p className="text-lg">GitHub</p>
        </a>

        {/* Codeforces */}
        <a
          href="https://codeforces.com/profile/kaushalkej"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg"
        >
          <FaCode className="text-3xl mb-2" />
          <p className="text-lg">Codeforces</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/kaushal_kejriwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg"
        >
          <FaInstagram className="text-3xl mb-2" />
          <p className="text-lg">Instagram</p>
        </a>

        
        {/* Instagram */}
        <a
          href="https://www.instagram.com/photogenic_kaushal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg"
        >
          <FaInstagram className="text-3xl mb-2" />
          <p className="text-lg">IG Photography</p>
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/KaushalKej40298"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg"
        >
          <FaTwitter className="text-3xl mb-2" />
          <p className="text-lg">Twitter</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kaushal-kejriwal-615128283/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg"
        >
          <FaLinkedin className="text-3xl mb-2" />
          <p className="text-lg">LinkedIn</p>
        </a>
      </div>

      <footer className="mt-12 text-sm text-white">
        &copy; 2025 Kaushal Kejriwal | Made with ❤️
      </footer>
    </div>
  );
}