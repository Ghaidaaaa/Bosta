{
  "body": {
    "text": "describe('Security Test for forget-password API', () => { it('should call forget-password endpoint with required headers', () => { cy.request({ method: 'POST', url: 'https://stg-app.bosta.co/api/v2/users/forget-password', headers: { accept: 'application/json, text/plain, */*', 'accept-language': 'en', 'content-type': 'application/json', origin: 'https://stg-business.bosta.co', priority: 'u=1, i', referer: 'https://stg-business.bosta.co/', 'sec-ch-ua': '\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '\"Linux\"', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-site', 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'x-device-id': 'eyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0=' } }).then((response) => { cy.log(JSON.stringify(response.body)) }) }) })"
  },
  "headers": {
    "server": "nginx/1.18.0 (Ubuntu)",
    "date": "Sun, 04 May 2025 09:20:24 GMT",
    "content-type": "application/json",
    "content-length": "1125",
    "connection": "keep-alive"
  },
  "status": 200,
  "statusText": "OK",
  "isOkStatusCode": true,
  "requestHeaders": {
    "Connection": "keep-alive",
    "X-API-Key": "f3eff8f63131666272bb8cecdae5c6de8685ea3720548c42952db948b71f92b6",
    "Content-Type": "application/json",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/14.3.2 Chrome/130.0.6723.137 Electron/33.2.1 Safari/537.36",
    "accept": "*/*",
    "accept-encoding": "gzip, deflate",
    "content-length": 2069
  },
  "requestBody": "{\"messages\":[{\"role\":\"system\",\"content\":\"Only return valid, executable code with no explanation, comments, markdown, or formatting. Do not include triple backticks or any text before or after the code. Output must be raw, clean code only. Make sure the answer only includes ready to run cypress script format\"},{\"role\":\"user\",\"content\":\"analyze the below example..gather the required info to create a cypress security test for the below curl command and return the response. Create a security test like the below one and make sure it's a ready to use cypress code and every code line should be separated by a new line and the format is correct and brackets are in the correct place and the code is not too long and not too short and make sure to include the following headers in the request:\\n        dont add any explaination..just give me the code only and start with the describe and end with the last bracket\\n        remove body and text parts \\n        make sure to include the following headers in the request:\\n         'https://stg-app.bosta.co/api/v2/pickups' \\ncurl 'https://stg-app.bosta.co/api/v2/users/forget-password' \\n\\\\ -H 'accept: application/json,\\ntext/plain, */*'  -H 'accept-language: en'  -H 'content-type: application/json'  -H 'origin:\\nhttps://stg-business.bosta.co'  -H 'priority: u=1, i'  -H 'referer:\\nhttps://stg-business.bosta.co/'  -H 'sec-ch-ua: \\\"Google Chrome\\\";v=\\\"135\\\",\\n\\\"Not-A.Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"135\\\"'  -H 'sec-ch-ua-mobile: ?0'  -H\\n'sec-ch-ua-platform: \\\"Linux\\\"'  -H 'sec-fetch-dest: empty'  -H 'sec-fetch-mode: cors'  -H\\n'sec-fetch-site: same-site'  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64)\\nAppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'  -H\\n'x-device-id:\\neyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2Vud\\nCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82N\\nCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lL\\nzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0='  --data-raw\\n'{\\\"email\\\":\\\"firstname.lastname@bosta.co\\\"}'\"}],\"stop\":[\"\\n\"],\"model\":\"openai\"}",
  "duration": 5802,
  "allRequestResponses": [
    {
      "Request Body": "{\"messages\":[{\"role\":\"system\",\"content\":\"Only return valid, executable code with no explanation, comments, markdown, or formatting. Do not include triple backticks or any text before or after the code. Output must be raw, clean code only. Make sure the answer only includes ready to run cypress script format\"},{\"role\":\"user\",\"content\":\"analyze the below example..gather the required info to create a cypress security test for the below curl command and return the response. Create a security test like the below one and make sure it's a ready to use cypress code and every code line should be separated by a new line and the format is correct and brackets are in the correct place and the code is not too long and not too short and make sure to include the following headers in the request:\\n        dont add any explaination..just give me the code only and start with the describe and end with the last bracket\\n        remove body and text parts \\n        make sure to include the following headers in the request:\\n         'https://stg-app.bosta.co/api/v2/pickups' \\ncurl 'https://stg-app.bosta.co/api/v2/users/forget-password' \\n\\\\ -H 'accept: application/json,\\ntext/plain, */*'  -H 'accept-language: en'  -H 'content-type: application/json'  -H 'origin:\\nhttps://stg-business.bosta.co'  -H 'priority: u=1, i'  -H 'referer:\\nhttps://stg-business.bosta.co/'  -H 'sec-ch-ua: \\\"Google Chrome\\\";v=\\\"135\\\",\\n\\\"Not-A.Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"135\\\"'  -H 'sec-ch-ua-mobile: ?0'  -H\\n'sec-ch-ua-platform: \\\"Linux\\\"'  -H 'sec-fetch-dest: empty'  -H 'sec-fetch-mode: cors'  -H\\n'sec-fetch-site: same-site'  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64)\\nAppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'  -H\\n'x-device-id:\\neyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2Vud\\nCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82N\\nCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lL\\nzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0='  --data-raw\\n'{\\\"email\\\":\\\"firstname.lastname@bosta.co\\\"}'\"}],\"stop\":[\"\\n\"],\"model\":\"openai\"}",
      "Request Headers": {
        "Connection": "keep-alive",
        "X-API-Key": "f3eff8f63131666272bb8cecdae5c6de8685ea3720548c42952db948b71f92b6",
        "Content-Type": "application/json",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/14.3.2 Chrome/130.0.6723.137 Electron/33.2.1 Safari/537.36",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate",
        "content-length": 2069
      },
      "Request URL": "https://api.zero2launch.com/generate-text",
      "Response Body": {
        "text": "describe('Security Test for forget-password API', () => { it('should call forget-password endpoint with required headers', () => { cy.request({ method: 'POST', url: 'https://stg-app.bosta.co/api/v2/users/forget-password', headers: { accept: 'application/json, text/plain, */*', 'accept-language': 'en', 'content-type': 'application/json', origin: 'https://stg-business.bosta.co', priority: 'u=1, i', referer: 'https://stg-business.bosta.co/', 'sec-ch-ua': '\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '\"Linux\"', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-site', 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'x-device-id': 'eyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0=' } }).then((response) => { cy.log(JSON.stringify(response.body)) }) }) })"
      },
      "Response Headers": {
        "server": "nginx/1.18.0 (Ubuntu)",
        "date": "Sun, 04 May 2025 09:20:24 GMT",
        "content-type": "application/json",
        "content-length": "1125",
        "connection": "keep-alive"
      },
      "Response Status": 200
    }
  ]
}