# Chat Thing

Chat Thing is a simple WebSocket-based chat platform designed for local use on the same Wi-Fi network. It allows users on the same network to chat anonymously in real-time.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Server Manager](#server-manager)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time chat with anonymous users on the same Wi-Fi network.
- Simple frontend for starting and stopping the WebSocket server.
- Educational and easy to understand for beginners.

## Getting Started

Follow these instructions to get Chat Thing up and running on your local machine.

### Prerequisites

You'll need the following software installed on your machine:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment.
- Web browser (for accessing the chat interface).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone [https://github.com/yourusername/chat-thing.git](https://github.com/macecailiscool/chat_thing)
   ```

2. Navigate to the project folder:

   ```bash
   cd chat-thing
   ```

3. Install the required Node.js packages:

   ```bash
   npm install
   ```

## Usage

1. Start the WebSocket server by running the following command:

   ```bash
   node server.js
   ```

   The server will be accessible at `http://localhost:8080`.

2. Open a web browser and visit `http://localhost:8080` to access the chat interface. You can open this URL in multiple browser tabs to simulate multiple users on the same Wi-Fi network.

3. Use the chat interface to send and receive messages with other users on the same network.

## Server Manager

Chat Thing includes a server manager frontend that allows you to start and stop the WebSocket server. To access the server manager:

1. Open a web browser and visit `http://localhost:8080/server-manager.html`.

2. Click the "Start Server" button to start the WebSocket server.

3. Click the "Stop Server" button to stop the WebSocket server.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve Chat Thing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
