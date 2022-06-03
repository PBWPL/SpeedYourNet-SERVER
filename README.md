# Speed Your Net REST - API
-----
## Endpoints list
| HTTP method | URI path | Description |
| ----- | ----- | ----- |
| GET | / |  |
| GET | /files | /128, /512, /1024, /2048 etc. |
| POST | /upload |  |
-----
### `GET /`
| Example Request (cURL) |
| ----- |
| ```$ curl -Lk --request GET 'https://localhost:3001' ``` |
#### Example Response (JSON):
* {<br>"message": "Server is running!",<br>"success": true<br>}
-----
### `GET /files`
| Example Request (cURL) |
| ----- |
| ```$ curl -Lk --output 128 --request GET 'https://localhost:3001/files/128'``` |

#### Example Response (octet-stream):
* file 128k
-----
### `POST /upload`
| Example Request (cURL) |
| ----- |
| ```$ curl -Lk -d 'data=@128' --request POST 'https://localhost:3001/upload' ``` |
#### Example Response (JSON):
* {<br>"message": "File uploaded!",<br>"success": true<br>}