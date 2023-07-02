# Use the official Python base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project to the working directory
COPY . .

# Expose the port the Flask app is listening on
EXPOSE 5000

# Set the environment variables
ENV MONGO_URI=mongodb+srv://ighoshsubho:oxXsDK5AHfuFjgoj@cluster0.tdbxqul.mongodb.net/

# Run the Flask app
CMD ["python", "run.py"]