import express from 'express';
import adminRouter from './adminRouter';
import pedidoRouter from './pedidosRouter';
import stockRouter from './feedbackRouter';
import messageRouter from './messageRouter';
import usuarioRouter from './UsuarioRouter';

const app = express();

app.use(adminRouter);
app.use(pedidoRouter);
app.use(stockRouter);
app.use(messageRouter);
app.use(usuarioRouter);

export default app;
