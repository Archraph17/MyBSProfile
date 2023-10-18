
    function showSection(sectionId) {
        // Get all sections by class name
        const sections = document.getElementsByClassName('profile-details');
        
        // Loop through sections and hide them
        for (let section of sections) {
            section.style.display = 'none';
        }

        // Show the selected section by its ID
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }