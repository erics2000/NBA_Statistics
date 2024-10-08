# NBA Central Project

## Overview
NBA Central is a dynamic, user-friendly web application that serves as a centralized platform for accessing NBA data from the 2003 to 2021 seasons. This project aims to provide basketball enthusiasts with an interactive experience where they can explore comprehensive player profiles, team information, and detailed game statistics through various interactive tools.

## Features
- **Home Page**: Displays the overview of the application and includes sections like Player, Team, Championship, Trend, Games, and Login. The page also includes a search feature for players and teams.
- **Player Page**: Lists detailed information about players, including their current team and average statistics for a given season.
- **Team Page**: Shows information about specific teams, including team details, current roster, and game performance by season.
- **Games Page**: Allows users to view all games played on a specific date.
- **Championship Page**: Displays information about the championship team for each season.
- **Trend Page**: Features various statistical trends, such as a player's performance over their last five games, comparison against other players in the same game, and overall career statistics.

## Technology Stack
- **Data Processing**: Python, Pandas, Matplotlib for data analysis and feature engineering.
- **Backend**: Node.js, Express.js, MySQL, AWS RDS.
- **Frontend**: JavaScript, React, Material UI, Recharts.

## Project Structure
- `NBA_Dataset/`: Contains the raw dataset files used in this project, including player, team, game, and ranking information from the 2003 to 2021 NBA seasons.
- `Processed_Dataset/`: Contains processed data used by the web application. The data has undergone normalization to ensure consistency and efficiency.
- `src/`: The main folder for the web application code, containing backend and frontend components.
- `server/`: Backend implementation using Express.js to handle API requests.
- `client/`: Frontend implementation using React, Material UI, and Recharts for building dynamic visualizations and interactions.

## Datasets Used
The application uses five main datasets from the NBA:
1. **Games**: Information on all NBA games from 2003 to 2021, including team points, rebounds, assists, etc.
2. **Ranking**: Ranking statistics for each team, such as winning records and standings.
3. **Game Details**: Player-level details of each game, including individual points, rebounds, and shooting percentages.
4. **Players**: General information about players, such as names, teams, and seasons.
5. **Teams**: Information about the 30 NBA teams, including founding year, home court, and latest championship appearance.

## Data Flow
1. **Data Collection**: Data is collected from publicly available datasets, such as Kaggle.
2. **Data Preprocessing**: Preliminary exploratory data analysis (EDA) is performed to clean and preprocess the data. Incomplete or incorrect data entries are removed, and additional features, like game type (in-season/postseason), are created.
3. **Database Setup**: The cleaned and normalized data is uploaded to a MySQL database hosted on AWS RDS, ensuring scalability and security.
4. **Web Application**: The web app interacts with the database using RESTful APIs, built with Express.js, and serves data to the frontend for visualization.

## How to Run the Project
### Prerequisites
- Node.js and npm installed.
- Python 3 with Pandas and Matplotlib.
- MySQL database setup (AWS RDS credentials required).

### Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/erics2000/DQN-for-Atari-Game
   cd NBA_Central
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   cd client
   npm install
   ```
3. **Configure Environment**: Update `.env` file with database credentials.
4. **Run the Backend Server**:
   ```bash
   npm run server
   ```
5. **Run the Frontend**:
   ```bash
   cd client
   npm start
   ```
6. Access the web application at `http://localhost:3000`.

## Future Improvements
- **Data Update Automation**: Implement a mechanism to automatically fetch and update NBA data for future seasons.
- **User Personalization**: Enable user profiles for saving favorite players, teams, and customized dashboards.
- **Enhanced Analytics**: Include advanced statistical modeling and prediction capabilities for player and team performance.

## Credits
- **Team Members**: Weichen (Eric) Song, Ziyang (Sid) Zhang, Chenkang (Stephen) Zhang, Runqi (Vickie) Liu.
- **Course**: This project was part of CIS 550: Database and Information Systems at the University of Pennsylvania.

## Links
- **GitHub Repository**: [GitHub](https://github.com/erics2000/DQN-for-Atari-Game)
- **Demo Video**: [YouTube Demo](https://drive.google.com/file/d/1wOUZyHVqwhJOvw81cpCFXWYDVI3-2DdA/view?usp=sharing)

## License
This project is licensed under the MIT License.

