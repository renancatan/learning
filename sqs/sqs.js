const AWS = require("aws-sdk");

// AWS.config.update({region: 'ap-southeast-1'});

const PATH = "http://localhost:"
const PORT = 4566
// 1) Create an SQS client
AWS.config.update({
    endpoint: `${PATH + PORT}`,
    accessKeyId: 'na',
    secretAccessKey: 'na',
    region: 'ap-southeast-1' // region: "localhost",
});

const sqs = new AWS.SQS();  // create config instance, allocated in "sqs const"

// 2) Create a new sqs queue
const queueName = "test-queue";

const params = {
  QueueName: queueName, // Required, name of the queue to be created
  Attributes: { // Optional, queue attributes
    ReceiveMessageWaitTimeSeconds: "5", // Optional, specifies the time for which a ReceiveMessage call will wait for a message to arrive in the queue before returning. The default value is 0, which means the call will return immediately if there are no messages in the queue.
    VisibilityTimeout: "30", // Optional, specifies the visibility timeout for the queue. This is the amount of time during which a message that has been received from the queue will be hidden from other consumers. The default value is 30 seconds.
    MessageRetentionPeriod: "86400", // Optional, specifies the length of time, in seconds, for which Amazon SQS retains a message. The default value is 4 days.
    MaximumMessageSize: "262144", // Optional, specifies the limit of how many bytes a message can contain before Amazon SQS rejects it. The default value is 262,144 bytes (256 KB).
    ApproximateNumberOfMessages: "0", // Optional, represents the approximate number of messages available for retrieval from the queue.
    ApproximateNumberOfMessagesNotVisible: "0",  // Optional, represents the approximate number of messages in the queue that are not timed-out and not deleted.
  },
};

sqs.createQueue(params, function (err, data) {
  if (err) {
    console.error("Error creating SQS queue", err);
  } else {
    console.log(`Successfully created SQS queue: ${queueName}`);
  }
});

// 3) Publish a message to the SQS queue

// makefile example: 
// local-send-message-bill-gift:
// This order id should change everytime we use it, as omie don't allow more than one NF to each order.
// curl -v --location -g --request POST 'http://localhost:4566/000000000000/omie-events-queue.fifo?Action=SendMessage&MessageGroupId=OMIE&MessageBody={"type":"BILL_GIFT","data":{"orderId":"479c323a-7461-48b1-a84e-0c0f059209b7","scratch":true}}'


const messageParams = {
  QueueUrl: `${PATH + PORT}/000000000000/test-queue`, // Required, URL of the SQS queue
  MessageBody: "test message", // Required, the message body to be sent
  DelaySeconds: 0, // Optional, specifies the number of seconds to delay the delivery of the message. The default value is 0, which means the message will be delivered immediately.
  MessageAttributes: { // Optional, specifies a set of attributes for the message. The attributes are key-value pairs, and each key must be unique.
    attribute1: {
      DataType: "String",
      StringValue: "attribute value",
    },
    attribute2: {
      DataType: "Number",
      StringValue: "123",
    },
  },
};

sqs.sendMessage(messageParams, function (err, data) {
  if (err) {
    console.error("Error sending message to SQS queue", err);
  } else {
    console.log(`Successfully sent message to SQS queue: ${queueName}`);
  }
});

for (const x of Array(1000).keys()) {
  console.log(x, String.fromCharCode('A'.charCodeAt(0) + x));
};

// 4) Receive a message from the SQS queue
const receiveParams = {
  QueueUrl: `${PATH + PORT}/000000000000/test-queue`, // Required, URL of the SQS queue
  MaxNumberOfMessages: 1, // Optional, the maximum number of messages to retrieve. Default is 1
  WaitTimeSeconds: 20, // Optional, the time in seconds to wait for messages. Default is 0
  VisibilityTimeout: 30, // Optional, the time in seconds a message will be invisible to other consumers
  AttributeNames: [ // Optional, the message attributes to retrieve
    "All"
  ],
  MessageAttributeNames: [ // Optional, the names of the message attributes to retrieve
    "attribute1",
    "attribute2",
  ],
};

sqs.receiveMessage(receiveParams, function (err, data) {
  if (err) {
    console.error("Error receiving SQS message", err);
  } else {
    console.log("Successfully received SQS messages:", data.Messages);
  }
});

// wrap everything into a function or async function