# Step 1: Use an official, lightweight Nginx image as the base
FROM nginx:alpine

# Step 2: Copy your HTML, CSS, and JS files into the Nginx server directory
COPY . /usr/share/nginx/html

# Step 3: Expose port 80 so the web server can receive traffic
EXPOSE 80