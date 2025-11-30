import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import profilePicPath from "@assets/profile-pic (18)_1753884170529.png";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  User, 
  Shield, 
  Database, 
  TrendingUp, 
  Users, 
  Bot,
  Smartphone,
  Award,
  Trophy,
  Cloud,
  Gamepad2,
  Code,
  HandHeart,
  ChevronDown,
  Send,
  Download,
  Menu,
  X,
  GraduationCap,
  School,
  Book,
  FileText,
  CheckCircle,
  Star,
  Building,
  Calendar,
  MapPinIcon,
  Moon,
  Sun,
  ArrowUp,
  Cpu
} from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Download function for static assets
  const downloadFile = (fileName: string) => {
    try {
      const link = document.createElement('a');
      link.href = `/attached_assets/${fileName}`;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please try again.');
    }
  };

  // Handle contact form submission with email fallback
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with form data
    const emailBody = `Hi Akash,

I'm reaching out regarding: ${contactForm.subject}

Name: ${contactForm.firstName} ${contactForm.lastName}
Email: ${contactForm.email}

Message:
${contactForm.message}

Best regards,
${contactForm.firstName} ${contactForm.lastName}`;

    // Create mailto link
    const mailtoLink = `mailto:akashmore7427@gmail.com?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your email client will open with the message pre-filled. Please send the email from there.');
    
    // Reset form
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };



  const toggleExperience = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const navItems = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "experience", label: "Experience" },
    { href: "education", label: "Education" },
    { href: "skills", label: "Skills" },
    { href: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm z-50 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-[var(--ibm-blue)]">Akash More</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-600 dark:text-slate-300 hover:text-[var(--ibm-blue)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              {/* Animated Theme Toggle Slider */}
              <div 
                onClick={toggleDarkMode}
                className="relative w-12 h-6 bg-slate-300 dark:bg-slate-600 rounded-full cursor-pointer transition-colors duration-300 flex items-center ml-2"
                aria-label="Toggle theme"
              >
                <div className={`absolute w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}>
                  {darkMode ? (
                    <Moon className="h-2.5 w-2.5 text-slate-600" />
                  ) : (
                    <Sun className="h-2.5 w-2.5 text-yellow-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Mobile Theme Toggle Slider */}
              <div 
                onClick={toggleDarkMode}
                className="relative w-12 h-6 bg-slate-300 dark:bg-slate-600 rounded-full cursor-pointer transition-colors duration-300 flex items-center"
                aria-label="Toggle theme"
              >
                <div className={`absolute w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}>
                  {darkMode ? (
                    <Moon className="h-2.5 w-2.5 text-slate-600" />
                  ) : (
                    <Sun className="h-2.5 w-2.5 text-yellow-500" />
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700">
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-2 text-slate-600 dark:text-slate-300 hover:text-[var(--ibm-blue)]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="gradient-bg text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Akash Sanjay More
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-100 mb-6 animate-slide-up">
                SAP Security Consultant at IBM
              </h2>
              <p className="text-lg text-blue-50 mb-8 max-w-2xl animate-slide-up">
                Specialized in SAP ERP security, GRC dashboards, and S/4HANA system administration. 
                Passionate about automating SAP tasks and ensuring robust security implementations across enterprise systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-[var(--ibm-blue)] hover:bg-blue-50 flex items-center justify-center"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[var(--ibm-blue)] no-print bg-transparent flex items-center justify-center"
                  onClick={() => downloadFile('Akash_Resume_1753888623499.pdf')}
                >
                  <span className="text-white">Download CV</span> <Download className="ml-2 h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 animate-float">
                <img 
                  src={profilePicPath} 
                  alt="Akash Sanjay More - SAP Security Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-[var(--ibm-blue)] mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">SAP Security Expert & Technology Consultant</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Currently working as a SAP Security Consultant at IBM India, I specialize in enterprise security solutions 
                for SAP environments. With extensive experience in SAP ERP, GRC Dashboard, HANA Studio, and S/4HANA Cloud, 
                I help organizations maintain secure and compliant SAP landscapes.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                My technical expertise spans across user management, authorization frameworks, system administration, 
                and security auditing. I have successfully automated SAP tasks, reducing business support hours by 75%, 
                and have been recognized twice as the Best Employee of the quarter for SAP Security achievements.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Experience</h4>
                  <p className="text-[var(--ibm-blue)] font-bold">3+ Years</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Certifications</h4>
                  <p className="text-[var(--ibm-blue)] font-bold">3+ SAP/Azure</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Automation Impact</h4>
                  <p className="text-[var(--ibm-blue)] font-bold">75% Time Saved</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-slate-50 dark:bg-slate-700 animate-slide-in-right">
              <CardContent className="pt-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Core Competencies</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="text-[var(--ibm-blue)] w-6 h-6 mr-3" />
                    <span className="text-slate-800 dark:text-slate-200">SAP Security Administration</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="text-[var(--ibm-blue)] w-6 h-6 mr-3" />
                    <span className="text-slate-800 dark:text-slate-200">SAP ERP & S/4HANA Systems</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="text-[var(--ibm-blue)] w-6 h-6 mr-3" />
                    <span className="text-slate-800 dark:text-slate-200">GRC Dashboard Management</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-[var(--ibm-blue)] w-6 h-6 mr-3" />
                    <span className="text-slate-800 dark:text-slate-200">User Access Management</span>
                  </div>
                  <div className="flex items-center">
                    <Bot className="text-[var(--ibm-blue)] w-6 h-6 mr-3" />
                    <span className="text-slate-800 dark:text-slate-200">Process Automation</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="text-[var(--ibm-blue)] w-6 h-6 mr-3" />
                    <span className="text-slate-800 dark:text-slate-200">Flutter Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-bounce-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-[var(--ibm-blue)] mx-auto mb-8"></div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-[var(--ibm-blue)]"></div>
            
            {/* IBM Experience */}
            <div className="relative flex items-center mb-16">
              <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-[var(--ibm-blue)] rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
              <div className="ml-16 lg:ml-0 lg:w-1/2 lg:pr-12">
                <Card className="card-hover dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">SAP Security Consultant</h3>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Current</Badge>
                    </div>
                    <h4 className="text-[var(--ibm-blue)] font-semibold mb-2 flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      IBM India
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      May 2022 - Present
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Working on Shell Pvt. Ltd. project, managing SAP ERP, GRC Dashboard, HANA Studio, 
                      SAP Business Planning and Consolidation Software, SAP S/4 Cloud, and SAP NetWeaver.
                    </p>
                    
                    <Button
                      variant="ghost"
                      onClick={() => toggleExperience('ibm')}
                      className="text-[var(--ibm-blue)] hover:text-[var(--navy)] p-0 flex items-center justify-center"
                    >
                      View Details 
                      <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${expandedExperience === 'ibm' ? 'rotate-180' : ''}`} />
                    </Button>
                    
                    {expandedExperience === 'ibm' && (
                      <div className="mt-6 space-y-4">
                        <Card className="bg-slate-50 dark:bg-slate-700">
                          <CardContent className="pt-4">
                            <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Key Responsibilities:</h5>
                            <ul className="text-slate-700 dark:text-slate-300 space-y-2 text-sm">
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />User management and authorization using SU01, SU10, SU53, and SUIM</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Role creation and modification using Profile Generator (PFCG)</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Authorization troubleshooting and error analysis (SU53, SU56, ST01)</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Mass transport management with SE01, SE09, and SE10</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Audit log management using SM18, SM19, and SM20</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Created QTP scripts for mass user and role operations</li>
                              <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Automated SAP tasks, reducing support hours by 75%</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card className="bg-blue-50 dark:bg-blue-900/20">
                          <CardContent className="pt-4">
                            <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-[var(--ibm-blue)] text-white">SAP ERP</Badge>
                              <Badge className="bg-[var(--ibm-blue)] text-white">SAP S/4HANA</Badge>
                              <Badge className="bg-[var(--ibm-blue)] text-white">GRC Dashboard</Badge>
                              <Badge className="bg-[var(--ibm-blue)] text-white">HANA Studio</Badge>
                              <Badge className="bg-[var(--ibm-blue)] text-white">ServiceNow</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Beedev Experience */}
            <div className="relative flex items-center mb-16 lg:justify-end">
              <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-slate-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
              <div className="ml-16 lg:ml-0 lg:w-1/2 lg:pl-12">
                <Card className="card-hover dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Full Stack Flutter Developer</h3>
                    <h4 className="text-[var(--ibm-blue)] font-semibold mb-2 flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      Beedev Pvt. Ltd., India
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      July 2021 - May 2022
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Developed mobile applications including Pool Inspection Apps and Automover for survey management.
                    </p>
                    
                    <Button
                      variant="ghost"
                      onClick={() => toggleExperience('beedev')}
                      className="text-[var(--ibm-blue)] hover:text-[var(--navy)] p-0 flex items-center justify-center"
                    >
                      View Projects 
                      <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${expandedExperience === 'beedev' ? 'rotate-180' : ''}`} />
                    </Button>
                    
                    {expandedExperience === 'beedev' && (
                      <div className="mt-6 space-y-4">
                        <Card className="bg-slate-50 dark:bg-slate-700">
                          <CardContent className="pt-4">
                            <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Pool Inspection Apps:</h5>
                            <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Cloud-based inspection management software with automated reporting and compliance checking.</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="dark:bg-slate-600 dark:text-slate-200">Flutter</Badge>
                              <Badge variant="secondary" className="dark:bg-slate-600 dark:text-slate-200">Cloud Integration</Badge>
                              <Badge variant="secondary" className="dark:bg-slate-600 dark:text-slate-200">Automated Reporting</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-slate-50 dark:bg-slate-700">
                          <CardContent className="pt-4">
                            <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Automover:</h5>
                            <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Car survey reporting app with digital canvas for damage marking and offline functionality.</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Canvas Drawing</Badge>
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Digital Signatures</Badge>
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Offline Support</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Logicwind Experience */}
            <div className="relative flex items-center">
              <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-slate-400 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"></div>
              <div className="ml-16 lg:ml-0 lg:w-1/2 lg:pr-12">
                <Card className="card-hover dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Flutter Developer Intern</h3>
                    <h4 className="text-[var(--ibm-blue)] font-semibold mb-2 flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      Logicwind Pvt. Ltd., Surat
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Jan 2021 - July 2021
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Worked on innovative projects including whiteboard digitization using ML algorithms and e-commerce applications.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <Card className="bg-slate-50 dark:bg-slate-700">
                        <CardContent className="pt-4">
                          <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Whiteboard Digitization</h5>
                          <p className="text-slate-700 dark:text-slate-300 text-sm">ML-powered real-time whiteboard capture and digitization system.</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-slate-50 dark:bg-slate-700">
                        <CardContent className="pt-4">
                          <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Sneaker E-commerce</h5>
                          <p className="text-slate-700 dark:text-slate-300 text-sm">Online sneaker selling app using REST API integration.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Notable Projects */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Notable Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-hover dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Trophy className="text-yellow-500 text-2xl mr-4" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Smart India Hackathon 2020</h4>
                      <p className="text-[var(--ibm-blue)] font-semibold">Tech Lead</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Developed a comprehensive textile industry solution connecting manufacturers, wholesalers, and retailers 
                    on one platform with fraud prevention and trend prediction features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Leadership</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Innovation</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Full Stack</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Shield className="text-blue-600 text-2xl mr-4" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Khakiwala</h4>
                      <p className="text-[var(--ibm-blue)] font-semibold">Flutter Developer</p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Police-focused mobile application providing breaking news, updates, and essential information 
                    for law enforcement personnel and their families.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Flutter</Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Social Impact</Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">News Feed</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-[var(--ibm-blue)] mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* BTech */}
            <Card className="gradient-bg text-white card-hover">
              <CardContent className="pt-8 text-center">
                <GraduationCap className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Bachelor of Technology</h3>
                <p className="text-blue-100 mb-4">Computer Science & Engineering</p>
                <Card className="bg-white/20 mb-4">
                  <CardContent className="pt-4">
                    <p className="font-semibold text-2xl">9.45 CGPA</p>
                    <p className="text-blue-100 text-sm">out of 10</p>
                  </CardContent>
                </Card>
                <p className="text-blue-100">CGPIT, Uka Tarsadia University</p>
                <p className="text-blue-100">Surat, Gujarat</p>
              </CardContent>
            </Card>

            {/* Class 12th */}
            <Card className="border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 card-hover">
              <CardContent className="pt-8 text-center">
                <School className="h-16 w-16 text-[var(--ibm-blue)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Higher Secondary</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Class 12th</p>
                <Card className="bg-slate-50 dark:bg-slate-600 mb-4">
                  <CardContent className="pt-4">
                    <p className="font-semibold text-2xl text-slate-900 dark:text-white">73%</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Percentage</p>
                  </CardContent>
                </Card>
                <p className="text-slate-700 dark:text-slate-200">T&TV High School</p>
                <p className="text-slate-600 dark:text-slate-300">Gujarat</p>
              </CardContent>
            </Card>

            {/* Class 10th */}
            <Card className="border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 card-hover">
              <CardContent className="pt-8 text-center">
                <Book className="h-16 w-16 text-[var(--ibm-blue)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Secondary Education</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Class 10th</p>
                <Card className="bg-slate-50 dark:bg-slate-600 mb-4">
                  <CardContent className="pt-4">
                    <p className="font-semibold text-2xl text-slate-900 dark:text-white">78%</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Percentage</p>
                  </CardContent>
                </Card>
                <p className="text-slate-700 dark:text-slate-200">St Xavier's High School</p>
                <p className="text-slate-600 dark:text-slate-300">Gujarat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-[var(--ibm-blue)] mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {[
                  { skill: "SAP Security & Administration", level: 95, proficiency: "Expert" },
                  { skill: "SAP ERP & S/4HANA", level: 90, proficiency: "Expert" },
                  { skill: "Flutter Development", level: 85, proficiency: "Advanced" },
                  { skill: "Python & Automation", level: 80, proficiency: "Advanced" },
                  { skill: "Database Management (MySQL)", level: 75, proficiency: "Intermediate" }
                ].map((item, index) => (
                  <Card key={index} className="dark:bg-slate-800 dark:border-slate-700">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-900 dark:text-white">{item.skill}</span>
                        <span className="text-[var(--ibm-blue)] font-bold">{item.proficiency}</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <div 
                          className="bg-[var(--ibm-blue)] h-2 rounded-full transition-all duration-1000" 
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tools & Technologies + Soft Skills */}
            <div className="space-y-12">
              {/* Tools & Technologies */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Tools & Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Database, name: "SAP HANA" },
                    { icon: Shield, name: "SAP GRC" },
                    { icon: Cloud, name: "SAP BTP" },
                    { icon: Smartphone, name: "SAP Fiori" },
                    { icon: Code, name: "Git" },
                    { icon: Database, name: "Firebase" },
                    { icon: FileText, name: "ServiceNow" },
                    { icon: Award, name: "Adobe Premiere" }
                  ].map((tool, index) => (
                    <Card key={index} className="text-center card-hover dark:bg-slate-800 dark:border-slate-700">
                      <CardContent className="pt-4">
                        <tool.icon className="text-[var(--ibm-blue)] h-8 w-8 mx-auto mb-2" />
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">{tool.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Soft Skills</h3>
                <Card className="dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { icon: HandHeart, skill: "Collaborative Leadership" },
                        { icon: TrendingUp, skill: "Analytical Problem Solving" },
                        { icon: Award, skill: "Adaptive Learning" },
                        { icon: Trophy, skill: "Persistent & Honest" },
                        { icon: Users, skill: "Team Collaboration" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <item.icon className="text-[var(--ibm-blue)] w-6 h-6 mr-3" />
                          <span className="font-medium text-slate-900 dark:text-white">{item.skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-bounce-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications & Achievements</h2>
            <div className="w-24 h-1 bg-[var(--ibm-blue)] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SAP S/4 Hana Certification */}
            <Card 
              className="bg-gradient-to-br from-blue-500 to-blue-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative animate-bounce-in"
              onClick={() => downloadFile('S4Hana_Certificate_1753888623502.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <Award className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">SAP Certified Technology Consultant</h3>
                <p className="text-blue-100 mb-4">SAP S/4 Hana System Administration</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">S/4 Hana Specialist</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* SAP Security Certification */}
            <Card 
              className="bg-gradient-to-br from-green-500 to-green-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative animate-scale-in"
              onClick={() => downloadFile('Security_Certificate_1753888623502.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <Shield className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">SAP Certified Technology Consultant</h3>
                <p className="text-green-100 mb-4">SAP Security Administration</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">Security Specialist</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Azure Certification */}
            <Card 
              className="bg-gradient-to-br from-purple-500 to-purple-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative animate-fade-in"
              onClick={() => downloadFile('Azure_Certificate_1753888623499.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <Cloud className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Microsoft Certified</h3>
                <p className="text-purple-100 mb-4">Azure Fundamentals</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">Cloud Computing</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* IBM Automation */}
            <Card 
              className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative"
              onClick={() => downloadFile('IBMAutomation_1753888623500.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <Bot className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">IBM Automation</h3>
                <p className="text-indigo-100 mb-4">Compass</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">Process Automation</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* IBM Consulting */}
            <Card 
              className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative"
              onClick={() => downloadFile('IBMDelivery_1753888623500.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">IBM Consulting</h3>
                <p className="text-cyan-100 mb-4">Delivering Business Value</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">Business Strategy</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Enterprise Design Thinking */}
            <Card 
              className="bg-gradient-to-br from-teal-500 to-teal-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative"
              onClick={() => downloadFile('IBMEnterprise_1753888623501.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Enterprise Design Thinking</h3>
                <p className="text-teal-100 mb-4">Practitioner</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">Design & Innovation</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* IBM Generative AI */}
            <Card 
              className="bg-gradient-to-br from-pink-500 to-pink-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative"
              onClick={() => downloadFile('IBMGenerativeAI_1753888623501.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <Star className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">IBM Generative AI</h3>
                <p className="text-pink-100 mb-4">Foundations</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">AI & Machine Learning</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* IBM watsonx */}
            <Card 
              className="bg-gradient-to-br from-orange-500 to-orange-700 text-white card-hover cursor-pointer transform hover:scale-105 transition-transform relative"
              onClick={() => downloadFile('IBMWastonX_1753888623501.pdf')}
            >
              <div className="absolute top-4 right-4">
                <Download className="h-5 w-5 text-white opacity-75 hover:opacity-100" />
              </div>
              <CardContent className="pt-8 text-center">
                <Cpu className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">IBM watsonx</h3>
                <p className="text-orange-100 mb-4">Essentials</p>
                <Card className="bg-white/20">
                  <CardContent className="pt-3">
                    <p className="font-semibold">Data & AI Platform</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Professional Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 border-l-4 border-yellow-400">
                <CardContent className="pt-8">
                  <div className="flex items-center">
                    <Trophy className="text-yellow-600 h-12 w-12 mr-4" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Best Employee of the Quarter</h4>
                      <p className="text-slate-700 dark:text-slate-300">Received twice for SAP Security excellence from stakeholders</p>
                      <p className="text-yellow-600 font-medium mt-2">IBM India Recognition</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/20 border-l-4 border-blue-400">
                <CardContent className="pt-8">
                  <div className="flex items-center">
                    <Bot className="text-blue-600 h-12 w-12 mr-4" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Process Automation Expert</h4>
                      <p className="text-slate-700 dark:text-slate-300">Reduced business support hours by 75% through automation</p>
                      <p className="text-blue-600 font-medium mt-2">Operational Excellence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/20 border-l-4 border-green-400 cursor-pointer transform hover:scale-105 transition-transform relative"
                onClick={() => downloadFile('SIH_2020_1753888623503.pdf')}
              >
                <div className="absolute top-4 right-4">
                  <Download className="h-5 w-5 text-green-600 opacity-75 hover:opacity-100" />
                </div>
                <CardContent className="pt-8">
                  <div className="flex items-center">
                    <Award className="text-green-600 h-12 w-12 mr-4" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">Smart India Hackathon 2020</h4>
                      <p className="text-slate-700 dark:text-slate-300">Winner in Innovative Category for textile industry solution</p>
                      <p className="text-green-600 font-medium mt-2">National Recognition</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Community Involvement */}
          <div className="mt-16">
            <Card className="bg-slate-50 dark:bg-slate-700">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Community & Events</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <HandHeart className="text-[var(--ibm-blue)] h-12 w-12 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">NSS Volunteer</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Clean village initiative participant</p>
                    <p className="text-[var(--ibm-blue)] font-medium">74 participants, Bardoli</p>
                  </div>
                  <div className="text-center">
                    <Gamepad2 className="text-[var(--ibm-blue)] h-12 w-12 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Event Manager</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Counter-Strike Tournament UTU-Tech fest</p>
                    <p className="text-[var(--ibm-blue)] font-medium">100+ participants</p>
                  </div>
                  <div className="text-center">
                    <Code className="text-[var(--ibm-blue)] h-12 w-12 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sr Coordinator</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">National level hackathon hackinUTU</p>
                    <p className="text-[var(--ibm-blue)] font-medium">6000+ participants</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Ready to discuss SAP security solutions or explore collaboration opportunities? 
              Let's connect and create something impactful together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-white/10 p-4 rounded-full mr-6">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:akashmore7427@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                    akashmore7427@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/10 p-4 rounded-full mr-6">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Phone</h3>
                  <a href="tel:+918141292894" className="text-blue-100 hover:text-white transition-colors">
                    +91 81412 92894
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/10 p-4 rounded-full mr-6">
                  <Linkedin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/akash-more-90885518a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    linkedin.com/in/akash-more-90885518a
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/10 p-4 rounded-full mr-6">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="text-blue-100">Gujarat, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/akash-more-90885518a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:akashmore7427@gmail.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                  <a href="tel:+918141292894" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Phone className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Fill out the form below and click "Send Message" to open your email client with the message pre-filled.
                </p>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white">First Name *</Label>
                      <Input
                        type="text"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:ring-white/30"
                        placeholder="John"
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({...contactForm, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label className="text-white">Last Name *</Label>
                      <Input
                        type="text"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:ring-white/30"
                        placeholder="Doe"
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({...contactForm, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Email *</Label>
                    <Input
                      type="email"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:ring-white/30"
                      placeholder="john.doe@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label className="text-white">Subject *</Label>
                    <Input
                      type="text"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:ring-white/30"
                      placeholder="SAP Security Consultation"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label className="text-white">Message *</Label>
                    <Textarea
                      rows={5}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:ring-white/30 resize-none"
                      placeholder="I'm interested in discussing SAP security solutions for our organization..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-white text-[var(--ibm-blue)] hover:bg-blue-50 flex items-center justify-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Akash Sanjay More</h3>
              <p className="text-slate-400">SAP Security Consultant • IBM India</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/akash-more-90885518a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[var(--ibm-blue)] transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a href="mailto:akashmore7427@gmail.com" className="hover:text-[var(--ibm-blue)] transition-colors">
                <Mail className="h-8 w-8" />
              </a>
              <a href="tel:+918141292894" className="hover:text-[var(--ibm-blue)] transition-colors">
                <Phone className="h-8 w-8" />
              </a>
            </div>
            
            <Separator className="mb-8 dark:bg-slate-700" />
            <p className="text-slate-400">
              © 2025 Akash Sanjay More. All rights reserved. | 
              <span className="text-[var(--ibm-blue)]"> Specializing in SAP Security & Enterprise Solutions</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--ibm-blue)] hover:bg-[var(--navy)] text-white shadow-lg transition-all duration-300 hover:scale-110 no-print"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
