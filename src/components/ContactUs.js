import Footer from './Footer';

export default function ContactUs() {
  function handleClick(e) {
    e.preventDefault();
    const form = document.getElementById('cForm');
    const fData = new FormData(form);

    const name = fData.get('usr_nm')?.trim();
    const email = fData.get('e_ml')?.trim();
    const message = fData.get('mm_sg')?.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    fetch('http://localhost/birendrapradhan.in/contact.php', {
      method: "POST",
      body: fData,
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === "success") {
          alert(res.message);
          form.reset();
        } else {
          alert(res.errors?.join('\n') || res.message);
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <>
      <section className=" bg-white dark:bg-gray-900 md:py-24 py-12">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-start gap-24">

            {/* Left Form Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let’s Talk</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">We’d love to hear from you. Drop your message below.</p>

              <form id="cForm" className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="usr_nm"
                    placeholder="Birendra Pradhan"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="e_ml"
                    placeholder="birendrapradhan112@gmail.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Message</label>
                  <textarea
                    name="mm_sg"
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  onClick={handleClick}
                  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Image + Info Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
              <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 transition-all duration-300 hover:ring-blue-500">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=640&q=80"
                  alt="Profile"
                />
              </div>

              <div className="mt-8 w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-5">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <i className="uil uil-location-point text-blue-600 text-xl" />
                  <span>BTM Layout, Bengaluru, India 560076</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <i className="uil uil-phone text-blue-600 text-xl" />
                  <span>+91 9692926869</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <i className="uil uil-envelope text-blue-600 text-xl" />
                  <span>birendrapradhan112@gmail.com</span>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                  <i className="uil uil-facebook text-2xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                  <i className="uil uil-instagram text-2xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                  <i className="uil uil-linkedin text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
