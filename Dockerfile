FROM python:3.8-slim-buster

EXPOSE 8000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

LABEL Name=bertflaskbot

ENV LISTEN_PORT=8000
ENV FLASK_RUN_PORT=8000
ENV FLASK_ENV = "delevopement"

COPY requirements.txt .
RUN python -m pip install --no-cache-dir -r requirements.txt

# COPY reqs.txt .
# RUN python -m pip install --no-cache-dir -r reqs.txt 

WORKDIR /app
COPY . /app

# CMD ["python", "app.py"]
# CMD ["flask", "run", "--host=0.0.0.0"]
# CMD [ "gunicorn", "--bind", "0.0.0.0:8000", "wsgi:app",  "--workers", "1", "--threads", "1"]
CMD [ "gunicorn", "--bind", "0.0.0.0:8000",  "--workers", "1", "wsgi:app", "--threads", "4"]

