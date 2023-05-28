# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*
RUN rm /etc/nginx/nginx.conf

# Copy SSL files
COPY certs/private_wildcard.key /etc/nginx/private_wildcard.key
COPY certs/wildcard_cert.crt /etc/nginx/wildcard_cert.crt

# Copy config files
COPY ./includes /etc/nginx/includes
COPY ./conf/default.conf /etc/nginx/conf.d/
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose the listening port
EXPOSE 80
EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]