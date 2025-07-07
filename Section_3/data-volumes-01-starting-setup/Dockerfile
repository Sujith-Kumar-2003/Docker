FROM node

WORKDIR /app

ARG DEFAULT_PORT = 8000

COPY package.json .

COPY . .

RUN npm install

ENV PORT $(DEFAULT_PORT)

EXPOSE $(PORT)

# VOLUME ["/app/feedback"]

CMD ["npm", "start"]
