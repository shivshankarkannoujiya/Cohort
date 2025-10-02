import { WebSocketServer, WebSocket } from 'ws';
import type { Server as HttpServer } from 'http';

type initWebSocketFn = (server: HttpServer) => WebSocketServer;

const initWebSocket: initWebSocketFn = (server) => {
    const wss = new WebSocketServer({ server });

    let cleintCount = 0;
    wss.on('connection', (ws) => {
        ws.on('error', (error) => console.error(`ERROR: `, error));
        console.log(`NEW WEBSOCKET CONNECTION...`);

        ws.on('message', (data, isBinary) => {
            console.log(`RECEIVED: `, data.toString());
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(data, { binary: isBinary });
                }
            });
        });
        console.log(`CLIENT ${cleintCount++} CONNECTED`);
        console.log(`Hello, From webscoket server`);
    });

    return wss;
};

export { initWebSocket };
