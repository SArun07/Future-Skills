# FUTURE SKILLS


 **backend**
   1. **Clone the repository:**

    ```bash
   git clone https://github.com/SArun07/Future-Skills.git
   cd backend
   ```
   2. # install dependensis
    ```bash
   npm install
   ```

   3. **Set up environment variables:**

   Create a `.env` file in the root directory of the project:

   ```plaintext
   PORT=3000
   DATABASE_PATH=./db/help_center.sqlite
   HOST=localhost
   NODE_ENV=development
   ```

   4. # start
    ```bash
   node server.js
   ```
   The server will start on `http://localhost:8000`.

### API Endpoints

- **Ping the server:**

  - **GET** `/ping`
  - **Description:** Check if the server is running.

  **Example:**

  ```bash
  curl -X GET http://localhost:8000/ping
  ```

- **Create a Card:**

  - **POST** `/cards`
  - **Description:** Create a new help center card.
  - **Body Parameters:** `title` (string), `description` (string) don't put id because it taken autometically

  **Example:**

  ```bash
  curl -X POST http://localhost:8000/cards \
  -H "Content-Type: application/json" \
  -d '{"title": "Manage Billing", "description": "Information about managing your billing details."}'
  ```

- **Retrieve All Cards:**

  - **GET** `/api/cards`
  - **Description:** Retrieve all help center cards.

  **Example:**

  ```bash
  curl -X GET http://localhost:8000/cards
  ```

- **Retrieve a Specific Card by Title:**

  - **GET** `/cards/<title>`
  - **Description:** Retrieve a specific help center card by its title.

  **Example:**

  ```bash
  curl -X GET http://localhost:8000/cards/Manage%20Billing
  ```


**frontend**

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SArun07/Future-Skills.git
   cd frontend
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Run the server:**

   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`.

### API Endpoints

- **Create a Card:**
   Inside Postman curl -X POST -> body -> raw -> Text -> JSON 

  - **POST** `/cards`
  - **Description:** Create a new help center card.
  - **Body Parameters:** `title` (string), `description` (string) don't put id because it taken autometically

  **Example:**
   
  ```bash
  curl -X POST http://localhost:8000/cards \
  -H "Content-Type: application/json" \
  -d '{"title": "Manage Billing", "description": "Information about managing your billing details."}'
  ```

- **Retrieve All Cards:**

  - **GET** `/cards`
  - **Description:** Retrieve all help center cards.

  **Example:**

  ```bash
  curl -X GET http://localhost:3000/cards
  ```

- **Retrieve a Specific Card by Title:**

  - **GET** `/cards/<title>`
  - **Description:** Retrieve a specific help center card by its title.

  **Example:**

  ```bash
  curl -X GET http://localhost:3000/cards/Branches
  ```