# Prueba3WebMobil
PAra usar este proyecto:
git clone https://github.com/Bharragan/Prueba3WebMobil
cd backend 
JSON Server Example

Este es un ejemplo de cómo usar JSON Server para simular una API REST con datos JSON. En este caso, hemos creado un conjunto de datos simulados con posts, comentarios y un perfil.
Requisitos previos

Asegúrate de tener Node.js instalado en tu máquina.

Navega al directorio del proyecto.

cd Prueba3IWM

Instala las dependencias.

npm install

Uso

    Inicia JSON Server.
    Donde {ipHost estu ip de tu maquina virtualizadora}

    json-server --watch posts.json --host {$ipHost} --port 3000

JSON Server se ejecutará en http://localhost:3000.

## Frontend
cd FrontendMobil desde raiz
copy .env.example .env
y mete ahi tu ip de maquina y el puerto
despues npm start 
y listo usa a para android