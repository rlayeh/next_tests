import { createServer } from "http";
import { Server } from "socket.io";
import { parse } from "url";
import next from "next";

const mockEntities = [
  { id: 1, name: "Entity 1", status: "active" },
  { id: 2, name: "Entity 2", status: "inactive" },
  { id: 3, name: "Entity 3", status: "pending" },
  { id: 4, name: "Entity 4", status: "active" },
  { id: 5, name: "Entity 5", status: "inactive" },
];

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.emit("initialEntities", mockEntities);

    const statusUpdateInterval = setInterval(() => {
      const randomEntityIndex = Math.floor(Math.random() * mockEntities.length);
      const entity = mockEntities[randomEntityIndex];
      const statuses = ["active", "inactive", "pending"];
      const newStatus = statuses[Math.floor(Math.random() * statuses.length)];

      if (entity.status !== newStatus) {
        entity.status = newStatus;
        console.log(`Updated entity ${entity.id} status to ${newStatus}`);

        io.emit("entityStatusChanged", { id: entity.id, status: newStatus });
      }
    }, 2000);

    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(statusUpdateInterval);
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
