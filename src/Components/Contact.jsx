import { useState } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import axios from 'axios';

export default function Contact(prop) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toLocaleString();
    const submissionData = {
      ...formData,
      datetime: currentDateTime,
    };
    axios.post("https://sheetdb.io/api/v1/riqg76qrrk18w", { data: submissionData }).then(response => { alert("Message Sent!"); setFormData({ name: '', email: '', message: '' }); })
    .catch(error => {
      console.error("Error:", error);
      alert("Error sending message");
    });

  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${prop.bg} ${prop.tx} p-6`}>
      <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
      <p className="text-lg mb-10 text-center max-w-xl">
        I'm always open to new ideas, collaborations, or just a quick chat. Reach out to me via any of the platforms below!
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

        {/* Contact Form */}
        <div className="flex justify-center">
          <div className='w-80 bg-white/10 backdrop-blur-md p-8 mb-5 rounded-xl shadow-lg '>
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Me</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${prop.nav} ${prop.tx}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500  ${prop.nav} ${prop.tx}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500  ${prop.nav} ${prop.tx}`}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg hover:bg-blue-400 transition  ${prop.nav} ${prop.tx}`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1  xl:grid-cols-2  gap-6 m-2">

          {/* Example for one link */}
          <a href="mailto:work.kaushal04@gmail.com" className="flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-3xl" />
              <div>
                <p className="text-lg">Email</p>
                <span className="text-sm break-all">work.kaushal04@gmail.com</span>
              </div>
            </div>
          </a>

          <a href="https://github.com/kejriwalkaushal04" target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg">
            <div className="flex items-center gap-3">
              <FaGithub className="text-3xl" />
              <div>
                <p className="text-lg">GitHub</p>
                <span className="text-sm break-all">kejriwalkaushal04</span>
              </div>
            </div>
          </a>

          <a href="https://codeforces.com/profile/kaushalkej" target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg">
            <div className="flex items-center gap-3">
              <FaCode className="text-3xl" />
              <div>
                <p className="text-lg">Codeforces</p>
                <span className="text-sm break-all">kaushalkej</span>
              </div>
            </div>
          </a>

          <a href="https://www.instagram.com/kaushal_kejriwal/" target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg">
            <div className="flex items-center gap-3">
              <FaInstagram className="text-3xl" />
              <div>
                <p className="text-lg">Instagram</p>
                <span className="text-sm break-all">@kaushal_kejriwal</span>
              </div>
            </div>
          </a>

          <a href="https://www.instagram.com/photogenic_kaushal/" target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg">
            <div className="flex items-center gap-3">
              <FaInstagram className="text-3xl" />
              <div>
                <p className="text-lg">IG Photography</p>
                <span className="text-sm break-all">@photogenic_kaushal</span>
              </div>
            </div>
          </a>

          <a href="https://x.com/KaushalKej40298" target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg">
            <div className="flex items-center gap-3">
              <FaTwitter className="text-3xl" />
              <div>
                <p className="text-lg">Twitter</p>
                <span className="text-sm break-all">@KaushalKej40298</span>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/kaushal-kejriwal-615128283/" target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform hover:bg-white/20 shadow-lg">
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-3xl" />
              <div>
                <p className="text-lg">LinkedIn</p>
                <span className="text-sm break-all">kaushal-kejriwal</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
