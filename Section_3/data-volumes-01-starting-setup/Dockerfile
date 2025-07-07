FROM node

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install

ENV PORT 80

EXPOSE $(PORT)

# VOLUME ["/app/feedback"]

CMD ["npm", "start"]
