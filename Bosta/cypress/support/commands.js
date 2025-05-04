// Cypress.Commands.add('createTestFile', (params) => {
//   return cy.task('createTestFile', {
//     method: params.method || 'GET',
//     url: params.url || '/',
//     headers: params.headers || {},
//     body: params.body || null,
//     status: params.status || 200,
//     filename: params.filename || 'generatedTest'
//   })
// })

Cypress.Commands.add('generateApiTest', ({ method, url, headers, body, fileName }) => {
  const formattedHeaders = JSON.stringify(headers, null, 2);
  const formattedBody = JSON.stringify(body, null, 2);

  const testContent = `
describe('Generated Security Test', () => {
  it('should perform API request to ${url}', () => {
    cy.request({
      method: '${method}',
      url: '${url}',
      headers: ${formattedHeaders},
      body: ${formattedBody},
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
  `;

  cy.task('generateTestFile', { content: testContent, fileName });
});
Cypress.Commands.add('createTestFile', (params) => {
  return cy.task('createTestFile', {
    method: params.method || 'GET',
    url: params.url || '/',
    headers: params.headers || {},
    body: params.body || null,
    status: params.status || 200,
    filename: params.filename || 'generatedTest'
  })
})