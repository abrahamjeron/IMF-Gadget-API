# IMF Gadgets API - Postman Collection

This Postman collection includes API requests for testing the IMF Gadgets API.

## Collection Information

- **Collection Name:** IMF Gadgets API testing
- **Postman Collection Schema:** [v2.1.0](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)

---

## API Endpoints

### 1. **Register User**
- **Method:** `POST`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/auth/register`
- **Headers:**
  - `token`: `Bearer <your_jwt_token>`
- **Request Body (JSON):**
  ```json
  {
    "username": "testuser003",
    "password": "testpassword003"
  }

### 2. **Login User**
- **Method:** `POST`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/auth/login`
- **Headers:**
  - `token`: `Bearer <your_jwt_token>`
- **Request Body (JSON):**
  ```json
  {
    "username": "testuser003",
    "password": "testpassword003"
  }
- **Request Body (JSON):**
  ```json
    {
    "token": "<your_jwt_token>"
    }

### 3. **Get All Gadgets**
- **Method:** `GET`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/gadgets/`
- **Headers:**
  - `token`: `Bearer <your_jwt_token>`
- **Response Example (JSON):**
  ```json
    [
    {
        "id": "12345678-90ab-cdef-1234-567890abcdef",
        "name": "Camera",
        "status": "Available",
        "decommissionedAt": null
    },
    {
        "id": "abcdef12-3456-7890-abcd-ef1234567890",
        "name": "Tripod",
        "status": "Checked Out",
        "decommissionedAt": null
    }
    ]

### 4. **Get Gadget by Status**
- **Method:** `GET`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/gadgets/{id}`
- **Headers:**
  - `token`: `Bearer <your_jwt_token>`
- **Response Example (JSON):**
  ```json
    {
    "id": "12345678-90ab-cdef-1234-567890abcdef",
    "name": "Camera",
    "status": "Available",
    "decommissionedAt": null
    }

### 5. **Add New Gadget**
- **Method:** `POST`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/gadgets/`
- **Headers:**
  - `token`: `Bearer <your_jwt_token>`
  - `Content-Type`: `application/json`

- **Request Body (JSON):**
  ```json
    {
    "name": "Tripod",
    "status": "Available",
    "decommissionedAt": null
    }

- **Response Example (JSON):**
  ```json
    {
    "message": "Gadget added successfully",
    "gadget": {
        "id": "beebaa62-d1d6-45aa-a911-65a29f6e30c4",
        "name": "Tripod",
        "status": "Available",
        "decommissionedAt": null
    }
    }

### 6. **Update Existing Gadget**
- **Method:** `PATCH`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/gadgets/`
- **Headers:**
  - `token`: `Bearer <your_jwt_token>`
  - `Content-Type`: `application/json`

- **Request Body (JSON):**
  ```json
    {
    "id": "beebaa62-d1d6-45aa-a911-65a29f6e30c4",
    "name": "Tripod for mobile Shadow Fang",
    "status": "Available",
    "decommissionedAt": null
    }


- **Response Example (JSON):**
  ```json
    {
    "message": "Gadget updated successfully",
    "gadget": {
        "id": "beebaa62-d1d6-45aa-a911-65a29f6e30c4",
        "name": "Tripod for mobile Shadow Fang",
        "status": "Available",
        "decommissionedAt": null
    }
    }


### 7. **Delete Gadget**
- **Method:** `PATCH`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/gadgets/{id}`
- **Headers:**
  - `token`: `Bearer <your_jwt_token>`

- **Response Example (JSON):**
  ```json
    {
    "message": "Gadget deleted successfully"
    }

### 8. **Gadget Self-Destruction**
- **Method:** `POST`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/gadgets/{gadget_id}/self-destruct`
- **Headers:**
  - `Authorization`: `Bearer <your_jwt_token>`

- **Response Example (JSON):**
  ```json
  {
    "message": "Gadget deleted successfully"
  }

### 9. **Get Gadgets Based on Status**
- **Method:** `GET`
- **URL:** `https://imf-gadget-api-hvxk.onrender.com/gadgets?status={status}`
- **Headers:**
  - `Authorization`: `Bearer <your_jwt_token>`

- **Query Parameters:**
  - `status` (string) - Filter gadgets by status (e.g., `Decommissioned`).

- **Response Example (JSON):**
  ```json
  [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Spy Camera",
      "status": "Decommissioned",
      "createdAt": "2024-03-01T12:00:00Z",
      "decommissionedAt": "2024-06-01T12:00:00Z"
    },
    {
      "id": "789e1234-e89b-12d3-a456-426614174001",
      "name": "GPS Tracker",
      "status": "Decommissioned",
      "createdAt": "2024-01-15T10:30:00Z",
      "decommissionedAt": "2024-05-20T15:45:00Z"
    }
  ]


## Usage Instructions

### Import the Collection into Postman
- Download the Postman collection JSON file and import it into Postman.
- Ensure you replace `<your_jwt_token>` with a valid JWT token.

### Run API Requests
1. Start by registering a user.
2. Log in to retrieve a JWT token.
3. Use the token for authenticated requests such as fetching, adding, or updating gadgets.

---

## Authentication Details
- The API uses **JWT authentication** (`HS256` algorithm).
- Include the token in the request headers as:

```plaintext
Authorization: Bearer <your_jwt_token>

