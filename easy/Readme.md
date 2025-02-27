# 01*API_Basics*&\_Data_Handling

### 01_crud_api

- **Task**: Implement a RESTful API that allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a resource.
- **Requirements**:
  - Define a resource (e.g., `Product`, `User`, etc.) with attributes that can be created, updated, retrieved, and deleted.
  - Implement the API endpoints to handle these operations (`POST`, `GET`, `PUT/PATCH`, `DELETE`).
  - Ensure appropriate status codes are returned for each operation (e.g., `201 Created`, `200 OK`, `404 Not Found`, etc.).
  - Handle errors and edge cases, such as when a resource does not exist or invalid data is provided.

### 02_basic_pagination

- **Task**: Add pagination to your API for endpoints that return large datasets, allowing users to fetch data in smaller, manageable chunks.
- **Requirements**:
  - Implement pagination for a list endpoint (e.g., `GET /resources`).
  - Accept query parameters for page number and page size (e.g., `?page=1&size=20`).
  - Return paginated data along with metadata, such as total count, current page, and total pages.
  - Handle edge cases, such as invalid page or size values.

### 03_request_validation

- **Task**: Implement request validation to ensure that incoming data to your API is correct and meets the expected criteria before processing it.
- **Requirements**:
  - Validate data for both required and optional fields (e.g., ensure that a `name` field is present when creating a `Product`).
  - Check data types (e.g., ensure `price` is a numeric value) and enforce constraints (e.g., `age` should be greater than 18).
  - Return appropriate error messages for invalid data, detailing which fields are incorrect and why.

### 04_response_formatting

- **Task**: Standardize the format of API responses to ensure consistency and clarity across different endpoints.
- **Requirements**:
  - Define a consistent response structure, including status, data, and error messages (e.g., `{ status: "success", data: {...} }`).
  - Ensure that error responses are clear and contain useful information (e.g., error code, message, field validation errors).
  - Ensure that all successful responses have a similar format (e.g., always include a `data` field, even if it’s empty).

### 05_file_uploading

- **Task**: Implement functionality to upload files through your API, such as images, documents, etc.
- **Requirements**:
  - Provide an API endpoint (`POST /upload`) to upload files.
  - Ensure that the file upload supports multiple types (e.g., images, PDFs).
  - Validate file size and type (e.g., only allow image files, limit to 5MB).
  - Save the file to the server or a cloud storage service, and return a URL or path to access the file.

### 06_basic_authentication

- **Task**: Secure certain endpoints by implementing basic authentication (username and password) for your API.
- **Requirements**:
  - Implement basic authentication for protected endpoints.
  - Ensure that users must provide their credentials (e.g., `Authorization: Basic <base64encodedcredentials>`).
  - Handle failed authentication attempts by returning an appropriate error message (`401 Unauthorized`).
  - Ensure sensitive data is not exposed (e.g., do not return passwords in responses).

### 07_rate_limiting

- **Task**: Implement rate limiting to restrict the number of requests a client can make within a given time period to prevent abuse.
- **Requirements**:
  - Define a rate-limiting strategy (e.g., 100 requests per hour per user).
  - Track the number of requests made by each client (e.g., based on IP address or user ID).
  - Return an error message when a client exceeds the allowed rate limit (e.g., `429 Too Many Requests`).
  - Implement a way to reset the limit after a set period (e.g., after one hour).

### 08_basic_caching

- **Task**: Implement basic caching to improve the performance of your API by storing frequently accessed data in memory.
- **Requirements**:
  - Cache the results of common, non-sensitive queries (e.g., frequently accessed product listings).
  - Use a cache store (e.g., in-memory, Redis) to store and retrieve data.
  - Ensure that cached data is invalidated or refreshed after a certain period or when the underlying data changes.
  - Implement cache control headers to allow clients to use cached responses when appropriate.

# 02*Database*&\_Query_Optimization

This section focuses on understanding and applying key database concepts, including schema design, indexing, relationships, soft deletes, transactions, and data seeding. By completing these tasks, you will gain the knowledge needed to work with relational databases efficiently and optimize your queries for performance.

## Folder Structure

### 01_database_schema_design

- **Task**: Design a relational database schema for an application.
- **Requirements**:
  - Identify the core entities of your application (e.g., `Users`, `Orders`, `Products`, etc.).
  - Define the attributes for each entity and ensure normalization to avoid data redundancy.
  - Establish relationships between entities (one-to-many, many-to-many, etc.).
  - Consider data types, constraints (e.g., `NOT NULL`, `UNIQUE`), and indexing options for key columns.
  - Ensure the schema supports the application's scalability and future growth.
  - How would you ensure referential integrity through foreign keys?

### 02_basic_indexing

- **Task**: Implement basic indexing strategies to optimize database queries.
- **Requirements**:
  - Identify frequently queried columns and implement indexes on those columns to improve query performance.
  - Consider different types of indexes (e.g., single-column, composite indexes) and their appropriate use cases.
  - Analyze the trade-offs between read performance (improved by indexes) and write performance (which may be affected by the additional index maintenance).
  - Test queries before and after indexing to measure the performance improvement.

### 03_joins_relationships

- **Task**: Work with different types of joins and relationships between tables.
- **Requirements**:
  - Create and optimize queries that use various types of joins (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN).
  - Understand and implement relationships between tables (one-to-one, one-to-many, many-to-many).
  - Design queries that involve joining multiple tables and ensure the results are accurate.
  - Optimize queries to ensure they run efficiently, particularly when joining large tables.

### 04_soft_deletes

- **Task**: Implement soft deletes for your application’s entities instead of permanently removing data.
- **Requirements**:
  - Modify your database schema to include a `deleted_at` timestamp or `is_deleted` flag for entities.
  - Implement the necessary application logic to mark records as deleted while ensuring they are not physically removed from the database.
  - Ensure that deleted records are excluded from normal queries (e.g., by adding filters to all queries).
  - Consider how soft deletes affect referential integrity and cascade deletes, and handle these cases appropriately.

### 05_transaction_handling

- **Task**: Implement transaction handling in your database to ensure data consistency.
- **Requirements**:
  - Design database transactions to handle operations that need to be atomic (e.g., transferring money between accounts, placing an order).
  - Ensure that transactions are committed only when all operations succeed or rolled back in case of failure.
  - Consider the isolation levels (e.g., `READ COMMITTED`, `SERIALIZABLE`) to prevent issues like dirty reads, non-repeatable reads, and phantom reads.
  - Test transactions for edge cases, such as network failures, application crashes, or database deadlocks.

### 06_seeding_data

- **Task**: Create scripts or utilities to seed initial data into your database.
- **Requirements**:
  - Design and implement data seeding scripts that populate your database with sample data for development or testing purposes.
  - Ensure that your seed data respects relationships between entities (e.g., inserting users before inserting orders that belong to users).
  - Consider creating mock data generators or using real data samples for seeding.
  - Implement logic to handle seeding for different environments (development, testing, production), ensuring no conflicts with existing data.

# 03*API_Security*&\_Best_Practices

This section focuses on securing your API and ensuring best practices in terms of security, data protection, and access control. These tasks will guide you through various security mechanisms that are essential when developing a production-ready API.

## Folder Structure

### 01_environment_variables

- **Task**: Use environment variables to manage sensitive data and configuration settings securely.
- **Requirements**:
  - Store sensitive data such as database credentials, API keys, and secrets in environment variables, instead of hardcoding them in your codebase.
  - Ensure that environment variables are not exposed to version control (e.g., use `.env` files and `.gitignore` to exclude them).
  - Implement logic to load environment variables based on different environments (e.g., `development`, `production`).
  - How would you ensure that sensitive information is kept secure while being used in your application?

### 02_cors_handling

- **Task**: Implement Cross-Origin Resource Sharing (CORS) handling for your API.
- **Requirements**:
  - Configure CORS to allow your API to interact with frontend applications from different origins (domains).
  - Specify allowed methods (e.g., `GET`, `POST`, `PUT`, `DELETE`) and headers.
  - Restrict CORS to only allow trusted domains and block all others.
  - Implement and test CORS preflight requests and headers (`OPTIONS` request).
  - How would you ensure that your CORS configuration is secure and does not allow any malicious cross-origin requests?

### 03_helmet_security_headers

- **Task**: Secure your API by implementing HTTP security headers using Helmet.
- **Requirements**:
  - Add security headers like `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, and `X-XSS-Protection` to your API responses.
  - Configure `Content-Security-Policy` to specify which resources can be loaded by your API.
  - Ensure that `Strict-Transport-Security` is enabled to enforce HTTPS connections.
  - Test that the headers are correctly set and that your API is protected from common security vulnerabilities (e.g., clickjacking, MIME sniffing, XSS attacks).

### 04_password_hashing

- **Task**: Implement password hashing and salting to securely store user passwords.
- **Requirements**:
  - Use a secure hashing algorithm like bcrypt, Argon2, or PBKDF2 to hash user passwords before storing them in the database.
  - Implement password salting to add an extra layer of security.
  - Ensure that passwords are never stored in plain text and are always hashed.
  - Provide a secure method for verifying hashed passwords during login attempts.
  - How would you implement password policies (e.g., minimum length, special characters, etc.) to increase security?

### 05_input_sanitization

- **Task**: Implement input sanitization to protect against injection attacks, such as SQL injection and Cross-Site Scripting (XSS).
- **Requirements**:
  - Sanitize user input to remove potentially harmful characters or scripts from query parameters, form fields, and URL parameters.
  - Use prepared statements or ORM (Object-Relational Mapping) to prevent SQL injection vulnerabilities.
  - Ensure that inputs like usernames, email addresses, and other user data are validated and sanitized before being processed.
  - How would you implement a strategy to sanitize and validate data before it is stored or used in your application?

### 06_role_based_access_control

- **Task**: Implement Role-Based Access Control (RBAC) to manage user permissions.
- **Requirements**:
  - Define user roles (e.g., `Admin`, `User`, `Guest`) and the permissions each role has within the API.
  - Restrict access to sensitive endpoints based on the user's role (e.g., only `Admin` users can delete resources).
  - Implement middleware to check the user’s role and enforce access control at the API level.
  - How would you handle access to sensitive data for users who do not have sufficient privileges?

# 04*Background_Jobs*&\_File_Handling

This section focuses on working with background jobs and handling file operations in your applications. You will learn to offload time-consuming tasks to background workers, manage scheduled jobs, and integrate file uploads, including cloud storage. These tasks are essential for building efficient, scalable, and maintainable applications.

## Folder Structure

### 01_basic_background_jobs

- **Task**: Implement basic background jobs to offload time-consuming tasks.
- **Requirements**:
  - Set up a task queue using a background job processing system (e.g., Celery, RQ, or similar).
  - Create background jobs for tasks that may take a long time to process, such as sending emails, processing images, or generating reports.
  - Ensure that background jobs are executed asynchronously without blocking the main application thread.
  - Monitor the progress and status of the background jobs.
  - How would you handle retries or error management for failed background tasks?

### 02_scheduled_jobs

- **Task**: Implement scheduled jobs to run periodic tasks at specified intervals.
- **Requirements**:
  - Use a scheduling library (e.g., Celery Beat, APScheduler) to run jobs on a fixed schedule (e.g., daily, weekly).
  - Set up jobs for recurring tasks such as database clean-up, sending periodic reports, or synchronizing data with external services.
  - Ensure that scheduled jobs are executed reliably and manage potential failures (e.g., handling jobs that might not run due to server downtime).
  - How would you ensure that scheduled jobs do not overlap or conflict with each other if they run too frequently?

### 03_basic_file_processing

- **Task**: Implement basic file processing operations, such as reading, writing, and manipulating files.
- **Requirements**:
  - Write code to process different types of files (e.g., CSV, JSON, XML, etc.), including reading from and writing to files.
  - Implement logic to parse and process file contents, such as extracting specific data, transforming formats, or validating file content.
  - Handle edge cases like empty files, missing data, or malformed files.
  - Ensure that file processing does not affect the performance of the main application by considering offloading heavy processing tasks to background jobs if needed.
  - How would you optimize the performance of file processing tasks for large files or data sets?

### 04_uploading_to_cloud_storage

- **Task**: Implement file uploads to cloud storage services (e.g., AWS S3, Google Cloud Storage, Azure Blob Storage).
- **Requirements**:
  - Set up and configure a cloud storage service to store and retrieve files.
  - Implement functionality for uploading files from your application to cloud storage.
  - Ensure that the uploaded files are organized and managed properly (e.g., use folders/buckets for categorization).
  - Implement security measures, such as access control, encryption, and limiting file types and sizes.
  - Provide an option for users to download files from the cloud storage.
  - How would you handle large file uploads, and what strategies could you use to ensure a smooth user experience (e.g., chunking, resumable uploads

# 05*Logging*&\_Monitoring

This section focuses on implementing logging, error handling, and performance monitoring in your application. By establishing effective logging and monitoring practices, you will be able to track issues, ensure system reliability, and improve your application's overall performance.

## Folder Structure

### 01_basic_api_logging

- **Task**: Implement basic API logging to capture incoming requests and responses.
- **Requirements**:
  - Set up a logging system to record incoming requests, including HTTP method, request path, query parameters, headers, and body.
  - Log the response status codes and any relevant metadata (e.g., response time, request duration).
  - Ensure that sensitive data such as passwords or personal information is not logged.
  - Implement different log levels (e.g., `INFO`, `ERROR`, `DEBUG`) and ensure that logs are written in a structured format for easier analysis.
  - How would you ensure that the logs contain sufficient information for debugging and monitoring without overloading the log files?

### 02_error_handling_middleware

- **Task**: Implement custom error-handling middleware to capture and log errors in the application.
- **Requirements**:
  - Create middleware that can catch and handle different types of errors (e.g., validation errors, server errors, client errors).
  - Ensure that appropriate error messages are returned to the client without exposing sensitive application details (e.g., stack traces, database queries).
  - Log the error details with sufficient context to help with debugging (e.g., error type, request details, stack trace).
  - Implement custom error pages or messages for different HTTP status codes (e.g., 404 for "Not Found", 500 for "Internal Server Error").
  - How would you handle and log unexpected errors, and how would you prioritize the errors based on severity?

### 03_logging_to_a_file

- **Task**: Configure logging to store logs in a file for persistence and analysis.
- **Requirements**:
  - Set up a logging configuration that writes logs to a local file (e.g., `app.log` or `api.log`).
  - Implement log rotation to avoid log files becoming too large (e.g., use a timestamp-based rotation or size-based rotation).
  - Ensure that logs are stored with timestamps, log levels, and additional context (e.g., request ID, user ID) to help track issues over time.
  - Manage the log file storage and cleanup process to avoid consuming too much disk space.
  - How would you configure the logging system to ensure it works efficiently in both development and production environments?

### 04_basic_performance_monitoring

- **Task**: Implement basic performance monitoring to track the performance of your API and application.
- **Requirements**:
  - Set up monitoring tools (e.g., Prometheus, New Relic, Datadog) to track key performance metrics like response times, request rate, and error rates.
  - Capture and log performance data, such as the time it takes to process each API request or complete background tasks.
  - Identify and monitor slow or resource-heavy endpoints that might be causing performance bottlenecks.
  - Implement alerts to notify the team of significant performance issues or anomalies, such as unusually high error rates or request latency.
  - How would you track and optimize performance over time, and how would you scale the application based on performance data?

# 06*Docker*&\_Deployment_Basics

This section introduces you to the basics of Docker, multi-service application deployment, Continuous Integration (CI) / Continuous Deployment (CD) pipelines, and cloud platform deployment. Mastering these areas will enable you to develop, deploy, and maintain modern applications efficiently.

## Folder Structure

### 01_dockerize_simple_api

- **Task**: Dockerize a simple API to create a containerized application.
- **Requirements**:
  - Write a `Dockerfile` to containerize a simple API (could be a REST API, GraphQL API, or similar).
  - Ensure that the Docker container includes all necessary dependencies and configurations to run the application.
  - Create a `.dockerignore` file to exclude unnecessary files from the Docker build context.
  - Test the Dockerized API to ensure that it functions correctly within the container and is accessible via the appropriate ports.
  - How would you handle environment variables and configuration management for different environments (e.g., development, production)?

### 02_docker_compose_multi_service

- **Task**: Set up a multi-service application using Docker Compose.
- **Requirements**:
  - Use Docker Compose to manage multiple services (e.g., API, database, cache, etc.) as a part of a single application.
  - Create a `docker-compose.yml` file to define the services, networks, and volumes required by the application.
  - Ensure that the services can communicate with each other (e.g., the API can connect to the database).
  - Use environment variables to configure the services (e.g., database URL, secret keys).
  - Test the multi-service setup to ensure that all services are running properly and can interact with each other.
  - How would you manage service dependencies and ensure the correct order of service startup?

### 03_basic_ci_cd_pipeline

- **Task**: Set up a basic CI/CD pipeline to automate the build and deployment process.
- **Requirements**:
  - Configure a CI tool (e.g., GitHub Actions, GitLab CI, Jenkins) to automate the process of building the Docker images.
  - Set up the pipeline to run tests, linting, and other checks before building the Docker image.
  - Push the built image to a container registry (e.g., Docker Hub, GitHub Container Registry).
  - Set up a deployment step to automatically deploy the application to a cloud platform or a testing environment.
  - How would you ensure that the CI/CD pipeline is secure and reliable, and what strategies would you use for testing and error handling?

### 04_deploy_on_render

- **Task**: Deploy a Dockerized application to Render.
- **Requirements**:
  - Set up an account on Render and configure a new service for your Dockerized application.
  - Push the Docker image to a container registry or configure Render to build the image directly from the repository.
  - Set up environment variables for the application in Render (e.g., API keys, database credentials).
  - Configure Render to automatically deploy the application whenever there is a change to the code repository.
  - Test the deployed application to ensure that it is running properly in the cloud environment.
  - How would you monitor and scale the deployed application on Render to handle increased traffic or resource usage?
