{
  "body": {
    "text": "describe('Security Test for Pickups API', () => { it('should return a successful response with correct headers', () => { cy.request({ method: 'POST', url: 'https://stg-app.bosta.co/api/v2/pickups', headers: { accept: 'application/json, text/plain, */*', 'accept-language': 'en', authorization: 'Bearer <token>', 'content-type': 'application/json', origin: 'https://stg-business.bosta.co', priority: 'u=1, i', referer: 'https://stg-business.bosta.co/', 'sec-ch-ua': '\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '\"Linux\"', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-site', 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'x-device-fingerprint': 'rvmsmy', 'x-device-id': 'eyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0=' } }).then((response) => { expect(response.status).to.eq(200) }) }) })"
  },
  "headers": {
    "server": "nginx/1.18.0 (Ubuntu)",
    "date": "Sun, 04 May 2025 09:20:37 GMT",
    "content-type": "application/json",
    "content-length": "1165",
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
    "content-length": 2401
  },
  "requestBody": "{\"messages\":[{\"role\":\"system\",\"content\":\"Only return valid, executable code with no explanation, comments, markdown, or formatting. Do not include triple backticks or any text before or after the code. Output must be raw, clean code only. Make sure the answer only includes ready to run cypress script format\"},{\"role\":\"user\",\"content\":\"analyze the below example..gather the required info to create a cypress security test for the below curl command and return the response. Create a security test like the below one and make sure it's a ready to use cypress code and every code line should be separated by a new line and the format is correct and brackets are in the correct place and the code is not too long and not too short and make sure to include the following headers in the request:\\n        dont add any explaination..just give me the code only and start with the describe and end with the last bracket\\n        remove body and text parts \\n        make sure to include the following headers in the request:\\n         'https://stg-app.bosta.co/api/v2/pickups' \\n//   -H 'accept: application/json, text/plain, */*' \\n//   -H 'accept-language: en' \\n//   -H 'authorization: Bearer <token>' \\n//   -H 'content-type: application/json' \\n//   -H 'origin: https://stg-business.bosta.co' \\n//   -H 'priority: u=1, i' \\n//   -H 'referer: https://stg-business.bosta.co/' \\n//   -H 'sec-ch-ua: \\\"Google Chrome\\\";v=\\\"135\\\", \\\"Not-A.Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"135\\\"' \\n//   -H 'sec-ch-ua-mobile: ?0' \\n//   -H 'sec-ch-ua-platform: \\\"Linux\\\"' \\n//   -H 'sec-fetch-dest: empty' \\n//   -H 'sec-fetch-mode: cors' \\n//   -H 'sec-fetch-site: same-site' \\n//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36' \\n//   -H 'x-device-fingerprint: rvmsmy' \\n//   -H 'x-device-id: eyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0=' \\n//   --data-raw '{\\\"businessLocationId\\\":\\\"Q1MCImvcs\\\",\\\"contactPerson\\\":{\\\"_id\\\":\\\"pvE7i1MA_8\\\",\\\"name\\\":\\\"Elkholaey\\\",\\\"phone\\\":\\\"+201202436309\\\"},\\\"scheduledDate\\\":\\\"2025-04-15\\\",\\\"numberOfParcels\\\":\\\"3\\\",\\\"hasBigItems\\\":false,\\\"repeatedData\\\":{\\\"repeatedType\\\":\\\"One Time\\\"},\\\"creationSrc\\\":\\\"Web\\\"}\"}],\"stop\":[\"\\n\"],\"model\":\"openai\"}",
  "duration": 5604,
  "allRequestResponses": [
    {
      "Request Body": "{\"messages\":[{\"role\":\"system\",\"content\":\"Only return valid, executable code with no explanation, comments, markdown, or formatting. Do not include triple backticks or any text before or after the code. Output must be raw, clean code only. Make sure the answer only includes ready to run cypress script format\"},{\"role\":\"user\",\"content\":\"analyze the below example..gather the required info to create a cypress security test for the below curl command and return the response. Create a security test like the below one and make sure it's a ready to use cypress code and every code line should be separated by a new line and the format is correct and brackets are in the correct place and the code is not too long and not too short and make sure to include the following headers in the request:\\n        dont add any explaination..just give me the code only and start with the describe and end with the last bracket\\n        remove body and text parts \\n        make sure to include the following headers in the request:\\n         'https://stg-app.bosta.co/api/v2/pickups' \\n//   -H 'accept: application/json, text/plain, */*' \\n//   -H 'accept-language: en' \\n//   -H 'authorization: Bearer <token>' \\n//   -H 'content-type: application/json' \\n//   -H 'origin: https://stg-business.bosta.co' \\n//   -H 'priority: u=1, i' \\n//   -H 'referer: https://stg-business.bosta.co/' \\n//   -H 'sec-ch-ua: \\\"Google Chrome\\\";v=\\\"135\\\", \\\"Not-A.Brand\\\";v=\\\"8\\\", \\\"Chromium\\\";v=\\\"135\\\"' \\n//   -H 'sec-ch-ua-mobile: ?0' \\n//   -H 'sec-ch-ua-platform: \\\"Linux\\\"' \\n//   -H 'sec-fetch-dest: empty' \\n//   -H 'sec-fetch-mode: cors' \\n//   -H 'sec-fetch-site: same-site' \\n//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36' \\n//   -H 'x-device-fingerprint: rvmsmy' \\n//   -H 'x-device-id: eyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0=' \\n//   --data-raw '{\\\"businessLocationId\\\":\\\"Q1MCImvcs\\\",\\\"contactPerson\\\":{\\\"_id\\\":\\\"pvE7i1MA_8\\\",\\\"name\\\":\\\"Elkholaey\\\",\\\"phone\\\":\\\"+201202436309\\\"},\\\"scheduledDate\\\":\\\"2025-04-15\\\",\\\"numberOfParcels\\\":\\\"3\\\",\\\"hasBigItems\\\":false,\\\"repeatedData\\\":{\\\"repeatedType\\\":\\\"One Time\\\"},\\\"creationSrc\\\":\\\"Web\\\"}\"}],\"stop\":[\"\\n\"],\"model\":\"openai\"}",
      "Request Headers": {
        "Connection": "keep-alive",
        "X-API-Key": "f3eff8f63131666272bb8cecdae5c6de8685ea3720548c42952db948b71f92b6",
        "Content-Type": "application/json",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/14.3.2 Chrome/130.0.6723.137 Electron/33.2.1 Safari/537.36",
        "accept": "*/*",
        "accept-encoding": "gzip, deflate",
        "content-length": 2401
      },
      "Request URL": "https://api.zero2launch.com/generate-text",
      "Response Body": {
        "text": "describe('Security Test for Pickups API', () => { it('should return a successful response with correct headers', () => { cy.request({ method: 'POST', url: 'https://stg-app.bosta.co/api/v2/pickups', headers: { accept: 'application/json, text/plain, */*', 'accept-language': 'en', authorization: 'Bearer <token>', 'content-type': 'application/json', origin: 'https://stg-business.bosta.co', priority: 'u=1, i', referer: 'https://stg-business.bosta.co/', 'sec-ch-ua': '\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"', 'sec-ch-ua-mobile': '?0', 'sec-ch-ua-platform': '\"Linux\"', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-site', 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 'x-device-fingerprint': 'rvmsmy', 'x-device-id': 'eyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0=' } }).then((response) => { expect(response.status).to.eq(200) }) }) })"
      },
      "Response Headers": {
        "server": "nginx/1.18.0 (Ubuntu)",
        "date": "Sun, 04 May 2025 09:20:37 GMT",
        "content-type": "application/json",
        "content-length": "1165",
        "connection": "keep-alive"
      },
      "Response Status": 200
    }
  ]
}