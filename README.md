# Strategy Toggle UI

## Project Overview
This project is a responsive UI built using **React (Vite) and plain CSS** to render a strategy toggle slider, date dropdown, and strategy cards. The UI ensures an interactive and seamless user experience without using external libraries like Bootstrap.

## Features
- **Slider Toggle**: Allows users to switch between four views: **Bullish, Bearish, RangeBound, Volatile**.
- **Date Dropdown**: Populated dynamically using `dateArray`, with the first date selected by default.
- **Strategy Cards**:
  - Rendered based on the selected date from the dropdown.
  - Displays the **strategy name** and **strategy count**.
  - If a strategy appears more than once, the count is shown; otherwise, it's labeled as `Strategy`.
- **Empty State Handling**: If no strategies are available for the selected date, an empty state message is displayed.
- **Fully Responsive**: The UI adapts to different screen sizes for an optimal experience.

## Tech Stack
- **React (Vite)**: Fast and lightweight frontend framework
- **Plain CSS**: Custom styling without external libraries

## Getting Started
### Prerequisites
- Install [Node.js](https://nodejs.org/) (Recommended: v16 or later)

### Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Riddheshdesai/nerve-web-assignment.git
   cd nerve-web-assignment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment
The project is hosted on **Netlify/GitHub Pages**. You can access the live version here:
[Live Demo](https://your-deployment-link.com)

To deploy manually:
```bash
npm run build
```
Then, deploy the `dist/` folder to your hosting platform.

## File Structure
```
📂 strategy-toggle-ui
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 assets      # Images and static files
│   ├── App.jsx       # Main application file
│   ├── main.jsx      # Entry point
│   ├── styles.css    # Plain CSS for styling
├── 📄 index.html      # Root HTML file
├── 📄 package.json    # Project dependencies
├── 📄 vite.config.js  # Vite configuration
```

## Screenshots
*(Add screenshots of the application here)*

## License
This project is licensed under the MIT License.

---

**Author:** Riddhesh Sanjay Desai  
LinkedIn: [https://www.linkedin.com/in/riddhesh-desai/](https://www.linkedin.com/in/riddhesh-desai/)

