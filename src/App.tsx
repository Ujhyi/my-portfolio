import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaBars, FaTimes, FaRegFilePdf } from "react-icons/fa";
import meImage from './assets/me.jpeg';
import reactImage from './assets/react.svg'


function App() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    

    const timelineData = [
    {
        duration: "May 2025 – Present",
        title: "DevOps Engineer",
        company: "Triton Digital | Full-Time | Bratislava",
        description: [
            "External employee for Slovak Telecom.",
            "Configured and maintained Linux servers for internet TV services.",
            "Installed, patched, and updated systems.",
            "Deployed Kubernetes modules delivered by developers.",
            "Participated in AI proof-of-concept feature development.",
            "Handled customer tickets and took part in night shifts and on-call rotations.",
            "Night shifts when needed.",
            "Hold on-call hotline duty for one week at a time.",
        ]
    },
    {
        duration: "Oct 2024 – May - 2025",
        title: "TV Trainee Speacialist",
        company: "Slovak Telecom | Part-Time | Bratislava",
        description: [
            "Worked as a DevOps trainee engineer.",
            "Configured Linux servers.",
            "Operating system installation.",
            "System patching.",
            "Handled customer tickets related to internet TV services.",
            "Worked with Kubernetes for deploying modules.",
            "Contributed to the development of new AI features for internet TV.",
        ]
    },
        {
        duration: "March 2023 – March - 2024",
        title: "ICT Administrator It",
        company: "Deutsche Telecom IT Solution | Part-Time | Kosice",
        description: [
        "Managed incident and change tickets based on ITIL standards.",
        "Ensured customer service availability per SLA commitments.",
        "Handled Linux server configuration, patching, and troubleshooting.",
        "Supported internal processes like Incident and Change Management."
        ]
    }
    ];


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
        <nav className="bg-black shadow-md fixed w-full top-0 left-0 z-10">
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
                    <li><a href="#certificates" className="hover:text-zinc-400">CERTIFICATES</a></li>
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
                <div className="border-t border-dashed border-gray-500 w-full"></div>
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
                            around and contact me if you have any questions or would like to stay in touch.
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
                            className="rounded-full w-100 h-100 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover filter grayscale"
                        />
                        </div>


                </section>

                {/* Work Experience */}
                <section id="experience" className="bg-black text-white px-4 md:px-12 lg:px-20 py-16">
                {/* Heading */}
                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Work Experience</h2>
                    <p className="text-gray-400 max-w-2xl">
                    Look through my work experience timeline.
                    </p>
                </div>

                <div className="relative mt-10">
                    {/* Responsive Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 md:border-r-2 border-gray-700"></div>

                    <div className="flex flex-col space-y-12">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                        {/* Yellow Circle */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white z-10"></div>

                        {index % 2 === 0 ? (
                            <>
                            {/* Left side (desktop) or full (mobile) */}
                            <div className="w-full md:w-1/2 md:pr-6 flex justify-start md:justify-end">
                                <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-full max-w-xl text-left">
                                <p className="text-sm text-gray-400">{item.duration}</p>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-2 mt-2">{item.company}</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                    {Array.isArray(item.description) &&
                                    item.description.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                                </div>
                            </div>
                            {/* Spacer */}
                            <div className="hidden md:block w-1/2"></div>
                            </>
                        ) : (
                            <>
                            {/* Spacer */}
                            <div className="hidden md:block w-1/2"></div>
                            {/* Right side (desktop) or full (mobile) */}
                            <div className="w-full md:w-1/2 md:pl-6 flex justify-start">
                                <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-full max-w-xl text-left">
                                <p className="text-sm text-gray-400">{item.duration}</p>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-2 mt-2">{item.company}</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                    {Array.isArray(item.description) &&
                                    item.description.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                                </div>
                            </div>
                            </>
                        )}
                        </div>
                    ))}
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
                        Faculty of Electrical Engineering and Informatics, and my master’s degree in Information Management 
                        at the University of Economics in Bratislava, Faculty of Business Informatics.
                        </p>
                        <p className="mt-2">

                        </p>
                    </div>
                    </div>

                    {/* Main */}
                    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">University of Economics in Bratislava</h3>
                            <p className="text-gray-400 text-sm mb-1">September 2023 – Present</p>
                            <p className="text-gray-400 text-sm italic mb-2">Faculty of Business Informatics</p>
                            <p className="text-gray-300 text-base font-medium">Information Management (Master’s degree)</p>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">Technical University of Košice</h3>
                            <p className="text-gray-400 text-sm mb-1">September 2020 – June 2023</p>
                            <p className="text-gray-400 text-sm italic mb-2">Faculty of Electrical Engineering and Informatics</p>
                            <p className="text-gray-300 text-base font-medium">Business Informatics (Bachelor’s degree)</p>
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

                {/* Certificates Section */}
                <section id="certificates" className="bg-black text-white px-4 md:px-12 lg:px-20 py-16 space-y-12">
                    {/* Heading */}
                    <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Certificates</h2>
                        <div className="text-gray-400 max-w-2xl">
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify  mx-auto">
                                This section highlights the certifications I’ve earned to expand and validate my 
                                technical and professional skills. Each certificate reflects a commitment to 
                                continuous learning and staying current with industry standards and technologies.
                            </p>
                            <p className="mt-2">

                            </p>
                        </div>
                    </div>

                    {/* Projects Card */}
                    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">Red Hat Certified System Administrator (RHCSA – EX200)</h3>
                            <h3 className="text-xl font-bold mb-2 text-red-900">In Progress ...</h3>
                            <p className="text-gray-300 text-sm italic mb-5 mt-5">Official Certificate</p>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto mt-5">
                            Validated the ability to perform essential Linux system administration tasks, including user 
                            and group management, file permissions, process control, software installation, networking 
                            configuration, firewall management, system logging, and basic shell scripting. Demonstrated 
                            proficiency in managing Red Hat Enterprise Linux environments in real-world production scenarios.
                            </p>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">Linux Administration : The Complete Linux Bootcamp</h3>
                            <p className="text-gray-300 text-sm italic mb-5 mt-5">Udemy – Self Learning Courses</p>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto mt-5">
                            Gained hands-on experience with Linux fundamentals, including file system structure, 
                            user and group management, permissions, package management, system services, networking, 
                            and shell scripting. This course provided a solid foundation for working with Linux in 
                            real-world server and DevOps environments.
                            </p>
                        </div>
                        <div className="bg-zinc-800 rounded-2xl p-6 w-full lg:w-1/2 text-center shadow-md">
                            <h3 className="text-xl font-bold mb-2">ECDL (European Computer Driving License)</h3>
                            <p className="text-gray-300 text-sm italic mb-5 mt-5">Official Certificate</p>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-justify px-4 md:px-8 max-w-3xl mx-auto mt-5">
                                <ul className="flex flex-col items-center text-center space-y-2">
                                <li>M2 - Computer Essentials</li>
                                <li>M3 - Word Processing</li>
                                <li>M6 - Presentations</li>
                                <li>M7 - Online Essential</li>
                                </ul>
                            </p>
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
