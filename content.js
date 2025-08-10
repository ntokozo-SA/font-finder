// Font Finder Chrome Extension - Content Script
// This script runs on every webpage and handles text selection detection and font information extraction

(function() {
    'use strict';
    
    // Global variable to store the current tooltip element
    let currentTooltip = null;
    
    /**
     * Creates a tooltip element with font information
     * @param {Object} fontInfo - Object containing font details
     * @param {number} x - X coordinate for tooltip position
     * @param {number} y - Y coordinate for tooltip position
     * @returns {HTMLElement} The created tooltip element
     */
    function createTooltip(fontInfo, x, y) {
        const tooltip = document.createElement('div');
        tooltip.className = 'font-finder-tooltip';
        
        // Create the tooltip content
        tooltip.innerHTML = `
            <div class="tooltip-header">Font Details</div>
            <div class="tooltip-content">
                <div class="font-property">
                    <span class="property-label">Family:</span>
                    <span class="property-value">${fontInfo.family}</span>
                </div>
                <div class="font-property">
                    <span class="property-label">Size:</span>
                    <span class="property-value">${fontInfo.size}</span>
                </div>
                <div class="font-property">
                    <span class="property-label">Weight:</span>
                    <span class="property-value">${fontInfo.weight}</span>
                </div>
                <div class="font-property">
                    <span class="property-label">Color:</span>
                    <span class="property-value">
                        <span class="color-preview" style="background-color: ${fontInfo.color}"></span>
                        ${fontInfo.color}
                    </span>
                </div>
            </div>
        `;
        
        // Position the tooltip near the selection
        tooltip.style.left = (x + 10) + 'px';
        tooltip.style.top = (y - 10) + 'px';
        
        return tooltip;
    }
    
    /**
     * Extracts font information from a DOM element
     * @param {HTMLElement} element - The element to extract font info from
     * @returns {Object} Object containing font family, size, weight, and color
     */
    function getFontInfo(element) {
        const computedStyle = window.getComputedStyle(element);
        
        return {
            family: computedStyle.fontFamily || 'Not specified',
            size: computedStyle.fontSize || 'Not specified',
            weight: computedStyle.fontWeight || 'Not specified',
            color: computedStyle.color || 'Not specified'
        };
    }
    
    /**
     * Gets the font information from the selected text
     * @returns {Object|null} Font information object or null if no selection
     */
    function getFontInfoFromSelection() {
        const selection = window.getSelection();
        
        if (!selection || selection.rangeCount === 0) {
            return null;
        }
        
        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;
        
        // Get the actual element that contains the text
        let element = container.nodeType === Node.TEXT_NODE ? container.parentElement : container;
        
        // If it's still not an element, try to find the closest element
        while (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = element.parentElement;
        }
        
        if (!element) {
            return null;
        }
        
        return getFontInfo(element);
    }
    
    /**
     * Removes the current tooltip from the page
     */
    function removeTooltip() {
        if (currentTooltip) {
            currentTooltip.remove();
            currentTooltip = null;
        }
    }
    
    /**
     * Handles text selection events
     * @param {Event} event - The selection event
     */
    function handleSelectionChange(event) {
        // Remove any existing tooltip first
        removeTooltip();
        
        const selection = window.getSelection();
        
        // Check if there's selected text
        if (selection && selection.toString().trim().length > 0) {
            const fontInfo = getFontInfoFromSelection();
            
            if (fontInfo) {
                // Get the position of the selection
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                
                // Create and show the tooltip
                const tooltip = createTooltip(fontInfo, rect.left, rect.top);
                document.body.appendChild(tooltip);
                currentTooltip = tooltip;
            }
        }
    }
    
    /**
     * Handles clicks outside the tooltip to close it
     * @param {Event} event - The click event
     */
    function handleDocumentClick(event) {
        if (currentTooltip && !currentTooltip.contains(event.target)) {
            removeTooltip();
        }
    }
    
    /**
     * Handles escape key to close tooltip
     * @param {Event} event - The keydown event
     */
    function handleKeydown(event) {
        if (event.key === 'Escape' && currentTooltip) {
            removeTooltip();
        }
    }
    
    // Initialize the extension when the DOM is ready
    function initialize() {
        // Add event listeners
        document.addEventListener('selectionchange', handleSelectionChange);
        document.addEventListener('click', handleDocumentClick, true);
        document.addEventListener('keydown', handleKeydown, true);
        
        // Clean up tooltip when page is unloaded
        window.addEventListener('beforeunload', removeTooltip);
        
        console.log('Font Finder extension loaded successfully!');
    }
    
    // Start the extension
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
})(); 