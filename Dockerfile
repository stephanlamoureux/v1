# syntax=docker/dockerfile:1

FROM node:latest AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS prod
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Build and push Docker image:
# docker build -t slamoureux/portfolio:v1 .
# docker push slamoureux/portfolio:v1

# Run the frontend container:
# docker run -itd -p 8080:80 --rm --name portfolio-fe slamoureux/portfolio:v1