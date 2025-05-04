
// // import { baseURL, apiKey } from '../openai'; // Adjust the path as needed
import  '../support/commands.js'; // Adjust the path as needed

  
describe('Forgot Password Password', () => {

  
  const apiKey = 'f3eff8f63131666272bb8cecdae5c6de8685ea3720548c42952db948b71f92b6';

  const requestBody = {
    messages: [
      {
        role: 'system',
        content: 'Only return valid, executable code with no explanation, comments, markdown, or formatting. Do not include triple backticks or any text before or after the code. Output must be raw, clean code only. Make sure the answer only includes ready to run cypress script format'
      },
      {
        role: 'user',
        content: `analyze the below example..gather the required info to create a cypress security test for the below curl command and return the response. Create a security test like the below one and make sure it's a ready to use cypress code and every code line should be separated by a new line and the format is correct and brackets are in the correct place and the code is not too long and not too short and make sure to include the following headers in the request:
        dont add any explaination..just give me the code only and start with the describe and end with the last bracket
        remove body and text parts 
        make sure to include the following headers in the request:
         'https://stg-app.bosta.co/api/v2/pickups' 
curl 'https://stg-app.bosta.co/api/v2/businesses/add-bank-info' \ -H 'accept:
application/json, text/plain, */*' \ -H 'accept-language: en' \ -H 'authorization: Bearer
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1uN3FpVk9jQnFiWlNaTUFwbzFM
dyIsInJvbGVzIjpbIkJVU0lORVNTX0FETUlOIl0sImJ1c2luZX
NzQWRtaW5JbmZvIjp7ImJ1c2luZXNzSWQiOiJBWG5keU5kbXh6V2EweHVFdVJycmIiL
CJidXNpbmVzc05hbWUiOiLYqtiz2Kog2KjYstmG2LMifS
wiY291bnRyeSI6eyJfaWQiOiI2MGU0NDgyYzdjYjdkNGJjNDg0OWM0ZDUiLCJuYW1lIjoi
RWd5cHQiLCJuYW1lQXIiOiLZhdi12LEiLCJjb2RlIjoiRUcifSw
iZW1haWwiOiJtb2hhbWVkLmVsa2hvbGFleSsxQGJvc3RhLmNvIiwicGhvbmUiOiIrMjAx
MjAyNDM2MzA5IiwiZ3JvdXAiOnsiX2lkIjoiWGFxbENGQ
SIsIm5hbWUiOiJCVVNJTkVTU19GVUxMX0FDQ0VTUyIsImNvZGUiOjExNX0sInRva2V
uVHlwZSI6IkFDQ0VTUyIsInRva2VuVmVyc2lvbiI6IlYyIiwic2
Vzc2lvbklkIjoiMDFKUldKNDgzQVNGODQ2NktEWFBZWkZNUTIiLCJpYXQiOjE3NDQ3
MTUyNjAsImV4cCI6MTc0NTkyNDg2MH0.jjFo0wZ1Dx8_mp
A2tFPD3bsqVClRVxo4CWnFS2E3tpg' \ -H 'content-type: application/json' \ -H 'origin:
https://stg-business.bosta.co' \ -H 'priority: u=1, i' \ -H 'referer:
https://stg-business.bosta.co/' \ -H 'sec-ch-ua: "Google Chrome";v="135",
"Not-A.Brand";v="8", "Chromium";v="135"' \ -H 'sec-ch-ua-mobile: ?0' \ -H
'sec-ch-ua-platform: "Linux"' \ -H 'sec-fetch-dest: empty' \ -H 'sec-fetch-mode: cors' \ -H
'sec-fetch-site: same-site' \ -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64)
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36' \ -H
'x-device-fingerprint: rvmsmy' \ -H 'x-device-id:
eyJpcCI6IjQ1LjI0Mi43Ni4xNTUiLCJmaW5nZXJwcmludCI6InVibjF3MyIsInVzZXJBZ2Vud
CI6Ik1vemlsbGEvNS4wIChYMTE7IExpbnV4IHg4Nl82N
CkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lL
zEzMS4wLjAuMCBTYWZhcmkvNTM3LjM2In0=' \ --data-raw
'{"bankInfo":{"beneficiaryName":"asd asdasdddssss","bankName":"SCB - ةانق كنب
سیوسلا","accountNumber":"12131","ibanNumber":"asd2112dasadasasdasd221231","count
ryName":"Egypt"},"paymentInfoOtp":"1231"}'`
      }
    ],
    "stop": ["\n"]  ,
    
    model: 'openai'
  };




  it('should call generate-text endpoint and save response as test file', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.zero2launch.com/generate-text',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: requestBody,
      failOnStatusCode: false
    }).then((response) => {
      expect([200, 429, 401]).to.include(response.status);
      cy.log(JSON.stringify(response, null, 2));
    console.log(response);
   
      let content = response ;
      cy.task('createTestFile', {
        content,
        fileName: 'BankInfo-API'
      }).then((filePath) => {
        cy.log(`Generated test saved to: ${filePath}`);

        cy.readFile(filePath).should('include', 'describe');
      })})})
      

          
    })
