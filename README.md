# Panasonic Lumix Camera Buying Guide

A comprehensive, interactive guide to help you choose the perfect Panasonic Lumix camera for your photography and videography needs.

## Features

- **Interactive Camera Profiles**: Detailed information about each Panasonic Lumix camera
- **Comparison Tool**: Side-by-side comparison of any two cameras
- **Filtering System**: Filter cameras by price range and sensor type
- **Comprehensive Tables**: Quick reference for specs, weight, battery life, and features
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky navigation bar for easy access to sections

## Camera Lineup

This guide covers Panasonic Lumix cameras including:

- **Full-Frame Cameras**: S1R, S1H, S1, S5IIX, S5II, S5
- **Micro Four Thirds Cameras**: G9II, GH6

## File Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── main.js        # JavaScript for interactions and camera data
└── README.md          # This file
```

## GitHub Pages Setup

To publish this site to GitHub Pages:

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select your branch (usually `main` or `master`)
5. Select the root folder (`/`)
6. Click "Save"
7. Your site will be available at `https://yourusername.github.io/repository-name/`

## Customization

### Update Camera Data

Camera data is stored in `js/main.js` in the `cameras` array. You can:
- Add new cameras by adding objects to the array
- Update prices, specs, or descriptions
- Modify camera images (currently using placeholder SVGs)

### Update Styling

The color scheme can be customized in `css/style.css` by modifying the CSS variables:
- `--primary-color`: Main dark color
- `--secondary-color`: Accent color (Panasonic blue)
- `--accent-color`: Secondary accent color

### Add Features

The JavaScript file (`js/main.js`) contains all the interactive functionality:
- Camera profile rendering
- Comparison tool
- Filtering system
- Table population

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Camera Information

All camera specifications and information are based on Panasonic's official specifications and current market prices. Prices and availability may vary.

## License

Feel free to use and modify this guide for your own camera buying guide needs!
