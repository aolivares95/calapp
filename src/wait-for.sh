#!/bin/sh

echo "Waiting for MySQL to be ready..."

until nc -z $DB_HOST 3306; do
  sleep 20
done
echo "Waiting for MySQL at $DB_HOST:3306..."
echo "MySQL is up. Starting the app..."
exec "$@"
