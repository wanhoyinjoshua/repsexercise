import { SESClient } from "@aws-sdk/client-ses";
// Set the AWS Region.
const REGION = "ap-southeast-2";

// Create SES service object.
const sesClient = new SESClient({ region: REGION , credentials: {
    accessKeyId: process.env.AWSKEY,
    secretAccessKey:process.env.AWSSECRET
  }});
export { sesClient };
// snippet-end:[ses.JavaScript.createclientv3]