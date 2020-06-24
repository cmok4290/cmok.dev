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
      experimentalCharAtlas: "dynamic",
      fontFamily: 'Monaco, "Ubuntu Mono", "Courier New", Courier, monospace',
    });
    this.terminal.setOption("theme", {
      background: "#202B33",
      foreground: "#F5F8FA",
    });
    this.socket = socket;
    this.fitAddon = new FitAddon();
  }

  startListening() {
    this.terminal.onData((data) => this.sendInput(data));
    this.socket.on("output", (data) => {
      this.write(data);
    });
  }

  write(text) {
    this.terminal.write(text);
  }

  prompt() {}

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
  return new Promise((res) => {
    const socket = io(server, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 1000,
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
  connectToSocket(server).then((socket) => {
    startTerminal(container, socket);
  });
}

function startLoader() {
  const characters = ["|", "/", "-", "\\"];
  let i = 0;
  let spinner;
  const terminal = new Terminal();
  terminal.setOption("theme", {
    background: "#202B33",
    foreground: "#F5F8FA",
  });
  terminal.open(document.getElementById("xterm-container"));
  setInterval((startInterval) => {
    i += 1;
    spinner = characters[i % characters.length];
    terminal.write(spinner + " Connecting...\r");
  }, 100);
}

function stopLoader() {
  clearInterval();
}

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    startLoader();
    /*
    setTimeout(() => {
      start();
      this.setState({ loading: false });
    }, 1200);
    */
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="explore">
          <div id="xterm-container" className="xterm"></div>
        </div>
      );
    } else {
      return (
        <div className="explore">
          <div id="xterm-container" className="xterm"></div>
        </div>
      );
    }
  }
}

export default Explore;
