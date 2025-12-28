-- Users, Study Spots, Reviews

-- Create a 'Users' table
CREATE TABLE IF NOT EXISTS users(
    id uuid PRIMARY KEY, --interal db identifier
    username text UNIQUE NOT NULL, --user-facing identifer
    email text UNIQUE NOT NULL,
    password_hash text NOT NULL
);

-- Create a "Spots" table
CREATE TABLE IF NOT EXISTS spots(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text UNIQUE NOT NULL,
    type text UNIQUE NOT NULL,
    cost text NOT NULL,
    has_wifi boolean NOT NULL
);

-- Create a "Reviews" table
CREATE TABLE IF NOT EXISTS reviews(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id uuid REFERENCES users(id) ON DELETE CASCADE,
    spot_id INT REFERENCES spots(id) ON DELETE CASCADE,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment text NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE (user_id, spot_id)
);