# Rocket Launch Countdown

A project to create a countdown for a rocket launch animation. By clicking on the firing button, the countdown starts, the rocket fires up, and upon reaching zero, the rocket takes off. The start button then becomes disabled, preventing multiple launches.

## Table of Contents

- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Demo

### Live Demo

Check out the live demo [here](https://nada-tb-beginner-projects.github.io/Rocket-Launch-Countdown/).

## Requirements

- A modern web browser (Chrome, Firefox, Edge, Safari)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nada-TB-beginner-projects/Rocket-Launch-Countdown.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd rocket-launch-countdown
   ```

3. **Open the `index.html` file in your web browser:**

   - You can do this by double-clicking the `index.html` file in your file explorer.
   - Alternatively, you can right-click the file and select "Open with" and choose your preferred web browser.

## Usage

Once the `index.html` file is opened in your browser:

1. **Click the Firing Button:**
   - The countdown will start, and the button image will change to a cancel button.
   - The rocket image will change to indicate ignition.

2. **Watch the Countdown:**
   - The countdown will be displayed on the billboard.
   - Upon reaching zero, the rocket will take off.

3. **Disable the Button:**
   - The firing button will be disabled to prevent multiple launches.

## Features

- Countdown timer displayed on a billboard.
- Rocket ignition animation.
- Rocket launch animation after countdown reaches zero.
- Disabled firing button after launch.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

Outline of the project directory:

```plaintext
rocket-launch-countdown/
├── css/
│   └── rocket.css         # CSS styles
├── images/
│   ├── billboard.png      # Billboard image
│   ├── fullmoon.png       # Moon image
│   ├── firing-button.png  # Firing button image
│   ├── launching-ramp.png # Launching ramp image
│   ├── rocket1.png        # Initial rocket image
│   ├── rocket2.gif        # Rocket ignition animation
│   └── rocket3.gif        # Rocket launch animation
├── js/
│   └── main.js            # JavaScript functionality
├── index.html             # Main HTML file
└── README.md              # Project documentation
```

## Challenges and Learnings

1. **Animating Elements:**
   - **Challenge**: Creating smooth animations for the rocket launch sequence.
   - **Solution**: Used CSS transitions and JavaScript to control the animations.

2. **Countdown Timer:**
   - **Challenge**: Implementing a countdown timer with precise timing.
   - **Solution**: Utilized `setInterval` to update the countdown every second.

3. **Event Handling:**
   - **Challenge**: Properly handling the click event and disabling the button.
   - **Solution**: Added event listeners and dynamically changed the button state and image.

## Future Improvements

- Add sound effects for a more immersive experience.
- Create a reset button to restart the countdown and launch sequence.
- Enhance the visuals with more detailed animations and graphics.

## Contact

For any questions or feedback, you can reach me at:

- GitHub: [Nada-TB](https://github.com/Nada-TB)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

