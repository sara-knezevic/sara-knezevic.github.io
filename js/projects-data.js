const projectsData = {
    "projects": [
        {
            "id": "project1",
            "title": "Air Pollution Digital Image Filter",
            "shortDescription": "A digital image filter that simulates the visual effects of air pollution on photographs at the user's location.",
            "fullDescription": "\
                A web app developed to simulate the visual effects of air pollution on photographs.\
                The app uses real-time image processing to apply pollution effects based on the user's location and pollution levels.\
                Air pollution is retried from an online network of sensors Sensor Community.\
                The app provides a visual representation of the impact of pollution on the environment and human health at moments where the air is not necessarily foggy and polluted.\
            ",
            "image": "assets/project1.jpg",
            "tags": ["Web", "Social impact"],
            "technologies": ["Python", "OpenCV", "Angular", "Flask", "Google Cloud Platform"],
            "features": [
                "Real-time image processing based on pollution levels",
                "User location-based pollution data retrieval",
                "Interactive pollution effects visualization",
                "Integration with Sensor Community API",
                "Cloud-based image processing and storage"
            ],
            "impact": "This project allows users to quickly check and visualize air pollution levels in their area, raising awareness about environmental issues.",
            "links": {
                "github": "https://github.com/MokoshHub/air-pollution-filter-website",
                "demo": "https://airpollution.mokosh.org/"
            }
        },
        {
            "id": "project2",
            "title": "Sustainable Development Goals Online Quiz",
            "shortDescription": "An interactive online quiz platform focused on teaching users about UN's Sustainable Development Goals.",
            "fullDescription": "\
                An interactive educational platform designed to raise awareness about the UN's Sustainable Development Goals through an engaging quiz.\
                The project was done in collaboration with Belgrade Open School and their SDGs for All initiative in Serbia.\
                The quiz covers 6 goals and provides detailed explanations for each topic, as well as a point-based evaluation at the end, rating your existing knowledge on the subject.\
                It's suitable for people of all ages and backgrounds who want to learn more about sustainable development.\
                Art and design were done by the talented artist Isidora Maričić.\
            ",
            "image": "assets/project2.jpg",
            "tags": ["Game", "Social impact", "Web"],
            "technologies": ["Unity", "C#"],
            "features": [
                "Interactive quiz on Sustainable Development Goals",
                "Detailed explanations and educational content",
                "Artistic design and engaging user interface",
                "Point-based evaluation system",
                "Suitable for all ages and backgrounds"
            ],
            "impact": "This project aims to educate and raise awareness about the importance of sustainable development and the UN's Sustainable Development Goals.",
            "links": {
                "github": "https://github.com/sara-knezevic/sdg_quiz",
                "demo": "https://sdgs4all.rs/bos-kviz/"
            }
        },
        {
            "id": "project3",
            "title": "Connect-four AI Opponent",
            "shortDescription": "Alpha-beta pruning algorithm playing Connect Four against a human on an Arduino based controller.",
            "fullDescription": "\
                The classic Connect Four minmax alpha-beta pruning algorithm playing against a player who uses an arduino-based controllers with 4 buttons for each C4 column.\
                The game is played on a 5x5 grid, and the algorithm is implemented from scratch in Python, while the interface is made with PyGame.\
            ",
            "image": "assets/project3.jpg",
            "tags": ["Game", "AI", "University project"],
            "technologies": ["Python", "PyGame", "Arduino", "C++"],
            "features": [
                "Connect Four game with custom Arduino controller",
                "Alpha-beta pruning AI algorithm",
                "Real-time game analysis and move prediction",
                "Interactive game interface"
            ],
            "impact": "Highlighted university project in AI and game development, demonstrating the implementation of a classic algorithm in a real-world scenario.",
            "links": {
                "github": "https://github.com/sara-knezevic/arduino_connect4",
                "demo": "#"
            }
        },
        {
            "id": "project4",
            "title": "Autonomous Obstacle-Avoiding Robot",
            "shortDescription": "A self-navigating robot that uses sensors to detect and avoid obstacles in real-time.",
            "fullDescription": "\
                A self-navigating robot that an ultrasonic sensor to stop and turn when encountering obstacles.\
                The robot is built to move only in the dark, and it uses a light sensor to detect light and stop when it's too bright.\
            ",
            "image": "assets/project4.jpg",
            "tags": ["Robotics", "University project"],
            "technologies": ["Arduino", "C++", "Sensors", "3D Printing", "Electronics"],
            "features": [
                "Obstacle detection and avoidance",
                "Light sensor-based movement control",
                "Real-time sensor data processing",
                "Custom 3D printed robot design"
            ],
            "impact": "Highlighted university project in robotics and electronics, demonstrating practical applications of sensor-based navigation.",
            "links": {
                "github": "#",
                "demo": "#"
            }
        },
        {
            "id": "project5",
            "title": "Risky Decision Making Game",
            "shortDescription": "An interactive game exploring risk assessment and decision-making processes in a virtual environment.",
            "fullDescription": "\
                An interactive game designed to study decision-making processes in risky situations.\
                The game is based on the idea of Prospect theory and provides a virtual environment to test and analyze decision patterns.\
                Leading the player through a series of scenarios with different risk/reward ratios, the game aims to assess whether players take the same amount of risk in a virtual environment as in a paper-only survey study.\
                This project was used to conduct an experiment as part of a research study at the Laboratory for Experimental Psychology at the University of Belgrade.\
                Full research paper and results are available in a published conference paper (DOI: 10.15308/Sinteza-2024-96-102).\
            ",
            "image": "assets/project5.jpg",
            "tags": ["Game", "Cognitive science"],
            "technologies": ["Unity", "C#", "MongoDB", "Python"],
            "features": [
                "Prospect theory-based decision-making scenarios",
                "Risk assessment and reward evaluation",
                "Real-time data collection and analysis",
                "Interactive game design",
                "Research study implementation"
            ],
            "impact": "Contributing to research in behavioral economics and decision-making psychology.",
            "links": {
                "github": "https://github.com/sara-knezevic/ProspectTheoryGame/tree/main",
                "demo": "https://youtu.be/rjT0oq33msQ"
            }
        },
        {
            "id": "project6",
            "title": "Multiplayer Brick Breaker",
            "shortDescription": "A modern local multiplayer version of the classic Brick Breaker game with real-time competition features.",
            "fullDescription": "\
                A modern take on the classic Brick Breaker game, featuring real-time multiplayer functionality.\
                The game allows players to compete against each other in real-time, with dynamic power-ups and 1-4 player game modes.\
                All players can see each other's progress and compete for the highest score on the global leaderboard, while trying to break the same procedurally generated wall with blocks of different sizes.\
                Different block types have different point values, and the game ends when all blocks are destroyed, or when all players lose their lives.\
                Destroyed blocks randomly drop power-ups, which include extra lives, speed boosts, and extended paddle size.\
            ",
            "image": "assets/project6.jpg",
            "tags": ["Game", "University project"],
            "technologies": ["Unity", "C#"],
            "features": [
                "Real-time multiplayer functionality",
                "Dynamic power-ups and block types",
                "Leaderboard tracking",
                "1-4 player game modes",
                "Procedurally generated block wall"
            ],
            "impact": "A fun and engaging multiplayer game that combines classic gameplay with modern features and real-time competition.",
            "links": {
                "github": "https://github.com/sara-knezevic/brickbreaker",
                "demo": "https://youtu.be/uxB26N6jOpQ"
            }
        }
    ]
};