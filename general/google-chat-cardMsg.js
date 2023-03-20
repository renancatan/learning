const { google } = require('googleapis');

const chat = google.chat({ version: 'v1', auth });
// https://chat.googleapis.com/v1/spaces/AAAAUtNRnuA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=TLQlHbx3R7ighEQMHCTNaAVizcCeU2yaDju_zMvUVL8%3D'

// const spaceId = "AAAAUtNRnuA"
const message = {
  parent: `spaces/AAAAUtNRnuA`,
  requestBody: {
    text: 'Hello World!',
    cards: [
      {
        header: {
          title: 'Card Title',
          subtitle: 'Card Subtitle'
        },
        sections: [
          {
            widgets: [
              {
                textParagraph: {
                  text: 'olá'
                }
              }
            ]
          }
        ]
      }
    ]
  }
};

chat.spaces.messages.create(message);