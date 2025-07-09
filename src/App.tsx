import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaBars, FaTimes, FaRegFilePdf } from "react-icons/fa";
import meImage from './assets/me.jpeg';
import reactImage from './assets/react.svg'


function App() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navbar */}
        <nav className="bg-black shadow-md fixed w-full top-5 left-0 z-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

                {/* Left: Logo + Brand */}
                <div className="flex items-center space-x-2">
                    <img src={reactImage} alt="Logo" className="w-8 h-8 object-contain"/>
                    <h1 className="text-xl md:text-2xl font-bold text-white">MyPortfolio</h1>
                </div>

                {/* Right: Nav links */}
                <ul className="hidden lg:flex space-x-6 lg:space-x-10 text-sm md:text-base font-medium">
                    <li><a href="#home" className="hover:text-zinc-400">HOME</a></li>
                    <li><a href="#experience" className="hover:text-zinc-400">EXPERIENCE</a></li>
                    <li><a href="#skills" className="hover:text-zinc-400">SKILLS</a></li>
                    <li><a href="#education" className="hover:text-zinc-400">EDUCATION</a></li>
                    <li><a href="#projects" className="hover:text-zinc-400">PROJECTS</a></li>
                    <li><a href="#contact" className="hover:text-zinc-400">CONTACT</a></li>
                </ul>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu"> {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}</button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
            <div className="lg:hidden bg-black border-t border-gray-700">
                <ul className="flex flex-col items-center space-y-4 py-4 text-base font-medium">
                <li><a href="#home" onClick={toggleMenu} className="hover:text-zinc-400">HOME</a></li>
                <li><a href="#experience" onClick={toggleMenu} className="hover:text-zinc-400">EXPERIENCE</a></li>
                <li><a href="#skills" onClick={toggleMenu} className="hover:text-zinc-400">SKILLS</a></li>
                <li><a href="#education" onClick={toggleMenu} className="hover:text-zinc-400">EDUCATION</a></li>
                <li><a href="#projects" onClick={toggleMenu} className="hover:text-zinc-400">PROJECTS</a></li>
                <li><a href="#contact" onClick={toggleMenu} className="hover:text-zinc-400">CONTACT</a></li>
                </ul>
            </div>
            )}
                <div className="border-t border-dashed border-gray-500 w-full mt-5"></div>
            </nav>

            {/* Main */}
            <main className="pt-24">
                {/* Home Section */}
                <section id="home" className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-20 py-12 space-y-10 md:space-y-0 md:space-x-12">
                    {/* Left - Text */}
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">David Ujhelyi</h1>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                            Welcome to my portfolio website! I am DevOps Enginner with a passion for
                            information and communication technologies. Here, you can find
                            information about my work, skills, education and experience. Feel free to browse
                            around and contact me if you have any questions or would like to work
                            together.
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://sk.linkedin.com/in/d%C3%A1vid-ujhelyi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaLinkedin size={24}/></a>
                            <a href="https://www.facebook.com/profile.php?id=100005695037422" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaFacebook size={24}/></a>
                            <a href="https://github.com/Ujhyi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaGithub size={24}/></a>
                            <a href="https://github.com/Ujhyi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaRegFilePdf size={24}/></a>
                        </div>
                    </div>

                    {/* Right - Image */}
                        <div className="md:w-1/2 flex justify-center">
                        <img 
                            src={meImage}
                            className="rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover filter grayscale"
                        />
                        </div>


                </section>

                {/* Work Experience */}
                <section id="experience" className="bg-black text-white px-4 md:px-12 lg:px-20 py-16 space-y-12">
                    {/* Heading */}
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Work Experience</h2>
                        <p className="text-gray-400 max-w-2xl">
                            Look through my work experience. 
                        </p>
                    </div>
                    {/* Main */}
                    <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
                        <div className="bg-zinc-800 rounded-lg p-6 w-full lg:w-1/2 text-center">
                            <h3 className="text-lg font-bold mb-2">Triton Digital - External Slovak Telecom Employee</h3>
                            <p className="text-gray-400 text-sm mb-1">May 2025 – Present</p>
                            <p className="text-gray-400 text-sm mb-4 italic">DevOps</p>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto">
                                I work as a full-time external employee for Slovak Telekom in a DevOps role. My responsibilities include c
                                onfiguring Linux servers used for providing internet TV services – installing, patching, and updating them. 
                                In some cases, I also work with Oracle SQL databases. I upload Kubernetes modules delivered by developers 
                                and participate in creating new AI proof-of-concept features related to internet TV. Additionally, I handle
                                customer tickets, occasionally work night shifts, and hold a one-week on-call hotline duty.
                            </p>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-6 w-full lg:w-1/2 text-center">
                            <h3 className="text-lg font-bold mb-2">Slovak Telecom - Bratislava</h3>
                            <p className="text-gray-400 text-sm mb-1">October 2024 – May 2025</p>
                            <p className="text-gray-400 text-sm mb-4 italic">ICT Linux Administrator</p>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto">
                                As a DevOps trainee engineer, I worked on configuring Linux servers, including OS 
                                installation and patching. I handled customer tickets related to internet TV 
                                services and worked with Kubernetes for deploying modules. Additionally, I 
                                contributed to the development of new AI features for internet TV.
                            </p>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-6 w-full lg:w-1/2 text-center">
                            <h3 className="text-lg font-bold mb-2">Deutsche Telekom IT Solutions (Kosice)</h3>
                            <p className="text-gray-400 text-sm mb-1">March 2023 – March 2024</p>
                            <p className="text-gray-400 text-sm mb-4 italic">ICT Linux Administrator</p>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto">
                                I worked for one year as a Linux System Administrator, where I independently reviewed, 
                                created, and resolved tickets, including change management and incident tickets based 
                                on ITIL principles. My responsibilities focused on maintaining customer services in 
                                line with defined SLAs and internal processes such as Incident Management (INM) and 
                                Change Management (CHM).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="bg-black text-white px-4 md:px-12 lg:px-20 py-16 space-y-12">
                    {/* Heading */}
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Technical Skills</h2>
                        <p className="text-gray-400 max-w-2xl">
                            My acquired knowledge of programming languages was from university. Some
                            of them I have further developed myself with the help of online Udemy
                            courses.
                        </p>
                    </div>
                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
                            {[
                                "Python", "C", "Java", "SQL", "HTML", "CSS", "JavaScript", "Azure", "Git", "XML", "Linux", ".NET", "React", "TypeScript", "Android Studio", "C#"

                            ].map((skill) => (
                                <div key={skill} className="bg-zinc-800 rounded-md flex items-center justify-center py-4 px-2 text-white font-semibold text-sm hover:bg-zinc-700 transition">
                                    {skill}
                                </div>
                            ))}
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="bg-black text-white px-4 md:px-12 lg:px-20 py-16 space-y-12">
                    {/* Heading */}
                    <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Education</h2>
                    <div className="text-gray-400 max-w-2xl">
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify  mx-auto">
                        I completed my bachelor’s degree in Business Informatics at the Technical University of Košice,
                        Faculty of Electrical Engineering and Informatics. Currently, I am pursuing my master’s degree 
                        in Information Management at the University of Economics in Bratislava, Faculty of Business Informatics.
                        </p>
                        <p className="mt-2">

                        </p>
                    </div>
                    </div>

                    {/* Main */}
                    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">Technical University of Košice</h3>
                            <p className="text-gray-400 text-sm mb-1">September 2020 – June 2023</p>
                            <p className="text-gray-400 text-sm italic mb-2">Faculty of Electrical Engineering and Informatics</p>
                            <p className="text-gray-300 text-base font-medium">Business Informatics (Bachelor’s degree)</p>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">University of Economics in Bratislava</h3>
                            <p className="text-gray-400 text-sm mb-1">September 2023 – Present</p>
                            <p className="text-gray-400 text-sm italic mb-2">Faculty of Business Informatics</p>
                            <p className="text-gray-300 text-base font-medium">Information Management (Master’s degree)</p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="bg-black text-white px-4 md:px-12 lg:px-20 py-16 space-y-12">
                    {/* Heading */}
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">My Projects</h2>
                        <div className="text-gray-400 max-w-2xl">
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify  mx-auto">
                            Look throug my projects.
                            </p>
                            <p className="mt-2">

                            </p>
                        </div>
                    </div>

                    {/* Projects Card */}
                    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">ASP .NET XML web service providing sorted</h3>
                            <h3 className="text-xl font-bold mb-2">information about display devices items of an electronic store</h3>
                            <p className="text-gray-300 text-sm italic mb-5 mt-5">Master Degree Project</p>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto mt-5">
                            As part of the project, an ASP.NET XML web service will be developed in the selected programming language
                             to provide clients with organised information about display technology parameters from the electronics store,
                              based on specified criteria, for the monitored period. The frontend for this project is built using React, 
                              Vite, and TypeScript. You can use buttons below to see my frontend and backend.
                            </p>
                            <br></br>
                            <div className="flex justify-center space-x-4 mt-5">
                                <a href="https://github.com/Ujhyi/react-dp-prod" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaGithub size={24}/></a>
                                <a href="https://github.com/Ujhyi/MDeg_Project" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaGithub size={24}/></a>
                            </div>


                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">Solving the real problem of Data Analytics</h3>
                            <p className="text-gray-300 text-sm italic mb-5 mt-5">Bachelor Degree Project</p>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto mt-5">
                            This thesis focuses on predicting NHL player salaries based on performance statistics from hockey games. 
                            The main objective is to develop a model that can accurately estimate a player's salary based on their  
                            on-ice performance. Six machine learning models were used for salary prediction: Linear Regression, 
                            K-Nearest Neighbors, Decision Trees, LightGBM, Random Forest, and Naive Bayes. The models' performance 
                            was evaluated using the R-squared coefficient, Mean Squared Error, and Mean Absolute Error.
                            </p>
                            <div className="flex justify-center space-x-4 mt-5">
                                <a href="https://github.com/Ujhyi/bcProjektGit" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaGithub size={24}/></a>
                            </div>
                        </div>

                    </div>
                    
                </section>

                {/* Contact Section */}
                <section id="contact" className="bg-black text-white px-4 md:px-12 lg:px-20 py-16 space-y-12">
                    {/* Heading */}
                    <div className="flex flex-col items-center text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Contact Form</h2>
                    <div className="text-gray-400 max-w-2xl">
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify mx-auto">
                            You can use this form to contact me. 
                        </p>
                        <p className="mt-2"></p>
                    </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto bg-zinc-800 p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required 
                                className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-300 mb-1">Subject</label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                                className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required
                                    className="w-full px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                                </textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">Send</button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <div className="border-t border-dashed border-gray-500 w-full"></div>
                <footer className="bg-black py-4 text-center text-xs md:text-sm text-gray-500 border-t border-gray-800">
                    © {new Date().getFullYear()} David Ujhelyi. All rights reserved.
                </footer>
        </div>
    );
}

export default App;
