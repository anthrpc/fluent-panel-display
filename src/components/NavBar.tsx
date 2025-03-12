
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
    setActiveSection(sectionId);
  };

  return (
    <nav className="mt-8">
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
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
