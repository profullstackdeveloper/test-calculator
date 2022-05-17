FROM  node:16.14.2

RUN npm install
RUN cd /server && npm install
RUN npm run test
CMD ["/startup.sh"]
