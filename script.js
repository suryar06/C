function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('[id^="section"]');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
    } else {
      console.error(`Section with ID '${sectionId}' not found.`);
    }
  }
  