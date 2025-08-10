// Font Finder Chrome Extension - Popup Script
// This script handles the popup interface interactions

(function() {
    'use strict';
    
    /**
     * Initialize the popup when the DOM is loaded
     */
    function initializePopup() {
        // Add any interactive features here
        console.log('Font Finder popup initialized');
        
        // Example: Add click handlers for any interactive elements
        // This can be expanded in the future for additional features
        
        // Add a small animation to the instruction numbers
        animateInstructionNumbers();
    }
    
    /**
     * Adds a subtle animation to the instruction numbers
     */
    function animateInstructionNumbers() {
        const instructionNumbers = document.querySelectorAll('.instruction-number');
        
        instructionNumbers.forEach((number, index) => {
            // Add a small delay for each number to create a staggered effect
            setTimeout(() => {
                number.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    number.style.transform = 'scale(1)';
                }, 150);
            }, index * 100);
        });
    }
    
    /**
     * Handles any potential errors gracefully
     */
    function handleError(error) {
        console.error('Font Finder popup error:', error);
        // In a production environment, you might want to show a user-friendly error message
    }
    
    // Initialize when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePopup);
    } else {
        initializePopup();
    }
    
    // Add error handling
    window.addEventListener('error', handleError);
    
})(); 