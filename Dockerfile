#descarga del contenedor
FROM node:12.18.4-alpine3.9
# crea el directorio app
WORKDIR /usr/src/app
#copia los archivo package
COPY package*.json ./
COPY *.env ./
#copia la carpeta compilada
ADD dist/ ./
#instala los paquetes necesarios
RUN npm install
EXPOSE 8000
CMD ["npm","start"]