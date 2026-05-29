const express = require('express');
const app = express();

app.use(express.json());

// RUTAS GET
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  res.send('Hola ' + req.params.nombre);
});

// RUTA POST
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// SERVIDOR
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor ejecutándose en puerto 3000");
});