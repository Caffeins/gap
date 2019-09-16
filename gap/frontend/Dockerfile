FROM node:latest
RUN mkdir /frontend
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY ./ /frontend
CMD yarn start