
# Realtime ChatApp

Designed and developed realtime chatting web application using MVC architecture, in this application multiple users can chat in a chatroom, users dont need to refresh page to receive messages, all incoming and outgoing messages are updated in real time.

## How to setup the project on local system

To setup this project, run the following commands on your terminal

 1. Clone the project

```bash
https://github.com/HarshitSingh45/Realtime-ChatApp.git
```

2. Change directory to ChatApp 

```bash
cd ChatApp/
```

3. Install all depedencies

```bash
npm i --save
```

4. Run the project

```bash
npm start
```

## Directory Structure

```
.
├── assets
│   ├── scripts
│   │   └── chatEngine.js
│   └── styles
│       ├── homePage.css
│       └── layout.css
├── config
│   └── chat_sockets.js
├── controllers
│   └── homeController.js
├── index.js
├── package-lock.json
├── package.json
├── routes
│   └── index.js
├── todo
└── views
    ├── _header.ejs
    ├── home.ejs
    └── layout.ejs

```
## Tech Stack

**Client:** HTML, CSS, JavaScript, Socket.Io

**Server:** NodeJS, Express, ejs, Socket.Io


## Author

- [@HarshitSingh45](https://www.github.com/HarshitSingh45)

