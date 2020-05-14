#!/bin/bash
set -e

echo "사용자 $POSTGRES_USER"
echo "DB  $POSTGRES_DB"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER postgres;
    CREATE DATABASE graphql-ts-server-boilerplate;
    GRANT ALL PRIVILEGES ON DATABASE graphql-ts-server-boilerplate TO postgres;
EOSQL