# Font Finder chrome extension🔍

[![Demo Video](https://img.shields.io/badge/Demo-Video-red?style=for-the-badge&logo=youtube)](https://youtu.be/nG_RUNtUgiU)
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue?logo=google-chrome)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](manifest.json)

A sleek Chrome extension that instantly reveals font details when you highlight text on any webpage. Perfect for designers, developers, and anyone curious about typography!

## ✨ Features

- 🎯 **One-click font inspection** - Highlight any text to see font details instantly
- 🎨 **Beautiful tooltip** - Modern, clean design with smooth animations
- 📊 **Complete font information** - Family, size, weight, and color with visual preview
- ⚡ **Lightweight** - Minimal performance impact, no complex setup required
- 🔒 **Privacy-focused** - Only requires `activeTab` permission
- 🚀 **Manifest V3** - Built with the latest Chrome Extension standards

## 🚀 Quick Start

### Installation

1. **Download** this repository
2. **Open Chrome** → Navigate to `chrome://extensions/`
3. **Enable Developer mode** (toggle in top-right)
4. **Click "Load unpacked"** → Select the extension folder
5. **Done!** 🎉 Font Finder icon appears in your toolbar

### Usage

1. **Navigate** to any webpage
2. **Select/highlight** any text
3. **View font details** in the floating tooltip:
   - Font Family
   - Font Size  
   - Font Weight
   - Font Color (with color preview)
4. **Close tooltip** by clicking elsewhere or pressing `Esc`

## 📁 Project Structure

```
fontfinder/
├── manifest.json      # Extension configuration (Manifest V3)
├── content.js         # Content script for text selection & font extraction
├── content.css        # Tooltip styles (injected into webpages)
├── popup.html         # Extension popup interface
├── popup.js           # Popup interactivity
├── popup.css          # Popup styles (extension-only)
├── icon.svg           # Extension icon
├── icons/             # PNG icons for Chrome Web Store
├── LICENSE            # MIT License
├── README.md          # This file
└── DEPLOYMENT.md      # Deployment guide
```

## 🛠️ Technical Details

| Aspect | Details |
|--------|---------|
| **Manifest Version** | 3 (Latest Chrome standard) |
| **Permissions** | `activeTab` only |
| **Content Script** | Auto-injected on all webpages |
| **Styling** | Modern CSS with animations |
| **Browser Support** | Chrome 88+ (Manifest V3) |

## 🔧 Development

### Making Changes

1. **Edit files** as needed
2. **Reload extension** in `chrome://extensions/` (click refresh icon)
3. **Test changes** on any webpage

### Key Files

- **`content.js`** - Handles text selection and font extraction
- **`content.css`** - Tooltip styling (scoped to avoid page conflicts)
- **`popup.css`** - Extension popup styling (isolated from webpages)

## 🚀 Deployment

Ready to publish? Check out our [Deployment Guide](DEPLOYMENT.md) for step-by-step instructions to publish on the Chrome Web Store!

### Quick Deployment Steps:
1. Generate PNG icons from `icon.svg`
2. Test thoroughly
3. Create Chrome Web Store developer account
4. Submit for review

## 🎨 Screenshots

*Screenshots coming soon!*

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern Chrome Extension APIs
- Inspired by the need for quick font inspection tools
- Thanks to the Chrome Extensions community

---

**Made with ❤️ for the web development community**