# Job Applications Tracker

This project combines the frontend and backend components of the Job Applications Tracker web application. It helps users effectively manage their job applications by providing features such as user authentication, job application management, visualization of application status, and more.

## Overview

The Job Applications Tracker is a full-stack web application designed to streamline the job application process. It allows users to create an account, log in securely, add new job applications, track application status, and visualize their application progress.

## Docker Integration

This project is Dockerized, making it easy to deploy and manage in containerized environments. Docker provides a consistent and reliable way to package the application and its dependencies, ensuring seamless deployment across different environments.

### Docker Compose

The project includes a Docker Compose configuration file (`docker-compose.yml`) that defines services for both the frontend and backend components. Docker Compose simplifies the setup process by orchestrating the deployment of multiple containers and managing their interactions.

### Containerization

- **Frontend Container**: Runs the React.js frontend application in a containerized environment.
- **Backend Container**: Hosts the Express.js backend API in a container, providing endpoints for CRUD operations on MongoDB.

### Benefits of Docker

- **Portability**: Docker containers encapsulate the application and its dependencies, enabling easy deployment across different environments without compatibility issues.
- **Isolation**: Each component runs in its own container, ensuring isolation and preventing conflicts between dependencies.
- **Scalability**: Docker enables horizontal scaling by allowing multiple instances of containers to run simultaneously, providing scalability and performance optimization.
- **Consistency**: Docker ensures consistency between development, testing, and production environments, reducing the likelihood of deployment errors.

## Technologies Used

- **Frontend**: React.js with Material-UI for building the user interface.
- **Backend**: Node.js with Express for server-side logic.
- **Database**: MongoDB for storing user data and job applications.
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication.
- **Containerization**: Docker for packaging and deploying the application.

## Project Structure

The project follows a modular structure, with separate directories for frontend and backend components. Docker configuration files are included to facilitate containerization and deployment.

## Getting Started

To run the project locally using Docker, follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3. Build and start the Docker containers:

    ```bash
    docker-compose up --build
    ```

4. Access the application in your web browser:

    - Frontend: [http://localhost](http://localhost)
    - Backend: [http://localhost:34635](http://localhost:34635)

## Contributing

Contributions to this project are welcome! If you encounter any bugs or have suggestions for improvement, feel free to open an issue or submit a pull request.

By leveraging Docker, this project ensures a consistent and reliable deployment process, making it easier to manage and scale the application.
