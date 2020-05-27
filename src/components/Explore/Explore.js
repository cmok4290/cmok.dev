import React from "react";
import io from "socket.io-client";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import "./explore.css";

class TerminalWrapper {
  constructor(socket) {
    this.terminal = new Terminal({
      cols: 80,
      rows: 20,
      experimentalCharAtlas: 'dynamic',
      fontFamily: 'Monaco, "Ubuntu Mono", "Courier New", Courier, monospace'
    });
    this.terminal.setOption("theme", {
      background: "#202B33",
      foreground: "#F5F8FA"
    });
    this.socket = socket;
    this.fitAddon = new FitAddon();
  }

  // TODO: implement state to handle loader
  /*
  startLoader() {
    const term = this.terminal;
    let loaderInterval = null;
    let loaderMessage = "Connecting...";

    let counter = 0;
    const loadingChars = ["|","/","-","\\"];
    loaderInterval = setInterval(function () {
      counter++;
      let spinner = loadingChars[counter % loadingChars.length];
      term.write(' \r\x1B[K' + spinner + ' ' + loaderMessage);
    }, 80);

    if (loaderInterval) {
      clearInterval(loaderInterval);
      loaderInterval = null;
    }
  }

  stopLoader() {
    console.log('stop loader...');
  }
  */

  startListening() {
    this.terminal.onData(data => this.sendInput(data));
    this.socket.on("output", data => {
      this.write(data);
    });
  }

  write(text) {
    this.terminal.write(text);
  }

  prompt() {
  }

  sendInput(input) {
    this.socket.emit("input", input);
  }

  attachTo(container) {
    this.terminal.loadAddon(this.fitAddon);
    this.terminal.open(container);
    this.fitAddon.fit();
    this.prompt();
  }

  clear() {
    this.terminal.clear();
  }
}

const server = process.env.REACT_APP_SERVER;

function connectToSocket(server) {
  return new Promise(res => {
    const socket = io(server, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 1000
    });
    res(socket);
  });
}

function startTerminal(container, socket) {
  const terminal = new TerminalWrapper(socket);
  terminal.attachTo(container);
  terminal.startListening();
}

function start() {
  const container = document.getElementById("xterm-container");
  connectToSocket(server).then(socket => {
    startTerminal(container, socket);
  });
}

class Explore extends React.Component {
  componentDidMount() {
    start();
  }

  render() {
    return (
      <div id="xterm-container" className="xterm"></div>
    );
  }
}

export default Explore;
