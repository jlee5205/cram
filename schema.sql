-- Users, Study Spots, Reviews

-- Create a 'Users' table
CREATE TABLE users(
    id serial PRIMARY KEY, --interal db identifier
    username text UNIQUE NOT NULL, --user-facing identifer
    email text UNIQUE NOT NULL,
    password_hash text NOT NULL
);