
import React from 'react';

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'hire', label: 'Hire!' },
  ];

  const handleNavClick = (sectionId: string) => {
    // Add a small scale animation when clicking
    const button = document.querySelector(`button[data-section="${sectionId}"]`);
    if (button) {
      // Quick scale animation on click
      button.classList.add('scale-95');
      setTimeout(() => {
        button.classList.remove('scale-95');
      }, 150);
    }
    
    setActiveSection(sectionId);
  };

  return (
    <nav className="mt-8">
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-item ${activeSection === item.id ? 'active' : ''} transition-all duration-200`}
              onClick={() => handleNavClick(item.id)}
              data-section={item.id}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
