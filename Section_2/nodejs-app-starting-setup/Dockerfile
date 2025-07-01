# FROM node

# WORKDIR /app

# COPY . /app

# RUN npm install

# EXPOSE 80

# CMD ["node", "server.js"]

# This Dockerfile sets up a Node.js application.
# This can be made even better like this

FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

CMD ["node","server.js"]

# This makes sure that the dependencies are installed before copying the rest of the application code.
# This can help reduce the number of layers in the image and speed up the build process.
# It also ensures that the dependencies are cached, so that if you change your application code but not your dependencies, Docker can reuse the cached layer and speed up the build process.

# So runs faster.
