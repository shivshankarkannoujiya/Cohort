import http from 'http';
import app from './app.js';
import { initWebSocket } from './ws.js';

const PORT = process.env.PORT ?? 8000;

const httpServer = http.createServer(app);
const wss = initWebSocket(httpServer);

httpServer.listen(PORT, () => {
    console.log(`${new Date()}: Server is listening at PORT:${PORT}`);
});

process.on('SIGINT', () => {
    console.log('Shutting down...');

    wss.close(() => {
        httpServer.close(() => {
            console.log('Server closed successfully.');
            process.exit(0);
        });
    });
});
