FROM  node:16.14.2

#Install some dependencies

WORKDIR /usr/app
COPY ./ /usr/app



RUN npm install
RUN cd server/ && npm install
CMD cd server/ && npm start &

