export default function About() {
  return (
    <>
      <div>
        <div className="max-w-8xl mx-auto relative">
          <div className="relative py-16 flex justify-center px-4 sm:px-0">
            <div className="max-w-7xl text-center">
              <div className="pb-4">
                <span className="inline-flex items-center rounded-2xl bg-lime-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-lime-700">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">
                I'm Birendra Kumar Pradhan
              </h1>
              <p
                className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16"
                style={{ whiteSpace: "pre-line" }}
              >
                I’m a Software Developer based in BTM Layout, Bengaluru, India.
                I have 2 years of experience in web development, including 1 year of freelancing and over a year working at Anza Services LLP.

                I specialize in PHP, CodeIgniter, MySQL, JavaScript, jQuery, AJAX, and frontend frameworks like React.js and Bootstrap.

                I’m passionate about learning new technologies and building real-time applications.
                Currently, I’m working on voice-based AI tools using Twilio and transcription APIs.

                I'm always looking for better opportunities where I can grow and contribute to exciting projects in a healthy and supportive environment.
              </p>

              <div className="mt-8 w-full flex flex-wrap justify-center gap-4">
                {/* Location */}
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow text-gray-700 dark:text-gray-300">
                  <i className="fas fa-map-marker-alt text-blue-600 text-sm" />
                  <span className="text-sm">BTM Layout, Bengaluru</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow text-gray-700 dark:text-gray-300">
                  <i className="fas fa-phone-alt text-blue-600 text-sm" />
                  <span className="text-sm">+91 9692926869</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow text-gray-700 dark:text-gray-300">
                  <i className="fas fa-envelope text-blue-600 text-sm" />
                  <span className="text-sm">birendrapradhan112@gmail.com</span>
                </div>
              </div>


              <div className="mt-8 flex w-full space-x-8 justify-center">
                <a href="/projects">
                  <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-white !px-12 !shadow-lg !rounded-full !text-base">
                    <p>See My Work</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
