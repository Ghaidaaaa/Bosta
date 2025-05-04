const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        createTestFile({ content, fileName }) {
          const dir = path.join(__dirname, 'cypress/e2e/generated');

          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }

          const filePath = path.join(dir, `${fileName}.cy.js`);

          // Ensure content is a string
          const safeContent = typeof content === 'string'
            ? content
            : JSON.stringify(content, null, 2);

          fs.writeFileSync(filePath, safeContent, 'utf8');
          return filePath;
        }
      });

      return config;
    }
  }
};

