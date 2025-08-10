# Permission Justification for Font Finder

## Permissions Requiring Justification

### 1. `activeTab` Permission
**Purpose**: Allows temporary access to the current tab when user interacts with the extension.

**Why Needed**: 
- Detect text selection using `window.getSelection()`
- Read computed styles with `window.getComputedStyle()`
- Extract font family, size, weight, and color from selected text
- Display tooltips with font information

### 2. Content Script Injection: `"matches": ["<all_urls>"]`
**Purpose**: Allows content scripts to run on any webpage to detect text selection and extract font information.

**Why Needed**:
- Font inspection must work on any website the user visits
- Text selection detection requires running on all pages
- Font information extraction needs access to page DOM
- Tooltip display requires page context

**Privacy & Security**:
- Content scripts only run when pages load
- No background monitoring or data collection
- Font information displayed locally only
- No data sent to external servers
- No user information stored

**Alternative Approaches Considered**:
- **Specific host permissions**: Would require users to manually grant access to each site
- **No content scripts**: Would make the extension non-functional
- **Limited matches**: Would restrict functionality to specific sites only

**User Benefit**: Enables seamless font inspection across all websites without requiring manual permission grants for each site.

The combination of `activeTab` and content script injection is the minimal approach needed for Font Finder's core functionality while maintaining user privacy. 