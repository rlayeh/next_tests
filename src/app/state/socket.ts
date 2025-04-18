"use client";

import { io, Socket } from "socket.io-client";

let socket: Socket | undefined;

if (typeof window !== "undefined") {
  socket = io();
}

export default socket as Socket;
