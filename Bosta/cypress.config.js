const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
module.exports = {
  projectId: "4aa9r3",
  viewportWidth: 1280,
  viewportHeight: 800,
  projectID: "4aa9r3",
  videoRecording: true,
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

