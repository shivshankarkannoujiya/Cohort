import express from 'express';
import type { Application } from 'express';

const app: Application = express();

app.get('/check', (_, res) => {
    return res.status(200).json({
        success: true,
        message: 'Hello from express server',
    });
});

export default app;
