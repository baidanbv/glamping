# Gittes Glamping

# Steps to Run the Client Part

If your server is set up and the database is connected, follow these steps to successfully run the client side:

1. Navigate to the client folder:
    ```
     cd ./client
    ```
2. Run the following command to install all necessary packages:
    ```
    npm i
    ```
3. Create a `.env.local` file inside the `client` folder and add the following content:
    ```
    NEXT_PUBLIC_SERVER_PATH=http://localhost:3042
    ```

4. Go back to the root of the project and in the `.env.local` file, change the value of `USE_JWT` to `true`.

5. Then, run the following commands:
    ```
    npm run "Start Server"
    npm run dev:client
    ```

Now the client part should be up and running.
