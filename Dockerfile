FROM node:16 as base
WORKDIR /app
COPY package.json /app
RUN npm install mongoose 


FROM base as development
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start-dev" ]

FROM base as production
RUN npm install --only-production
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]
