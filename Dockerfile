FROM node:16 as base

FROM base as development
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install mongoose 
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start-dev" ]

FROM base as production
WORKDIR /app
COPY package.json /app
RUN npm install --only-production
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]
