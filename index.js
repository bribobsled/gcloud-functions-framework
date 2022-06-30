
'use strict';

const functions = require('@google-cloud/functions-framework');


exports.helloPubSub = (message, context) => {
  const incomingMessage = message.data
    ? Buffer.from(message.data, 'base64').toString()
    : 'none'

  console.log(`New Message: ${incomingMessage}!`);

};
// [END functions_helloworld_pubsub]

// [START functions_helloworld_storage]
/**
 * Generic background Cloud Function to be triggered by Cloud Storage.
 * This sample works for all Cloud Storage CRUD operations.
 *
 * @param {object} file The Cloud Storage file metadata.
 * @param {object} context The event metadata.
 */
exports.helloGCS = (file, context) => {
  console.log(`  Event: ${context.eventId}`);
  console.log(`  Event Type: ${context.eventType}`);
  console.log(`  Bucket: ${file.bucket}`);
  console.log(`  File: ${file.name}`);
  console.log(`  Metageneration: ${file.metageneration}`);
  console.log(`  Created: ${file.timeCreated}`);
  console.log(`  Updated: ${file.updated}`);
};
// [END functions_helloworld_storage]

