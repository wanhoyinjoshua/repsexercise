import { SESClient } from "@aws-sdk/client-ses";
// Set the AWS Region.
const REGION = "ap-southeast-2";
const key=""
const secret=""
// Create SES service object.
const sesClient = new SESClient({ region: REGION , credentials: {
   
  }});
export { sesClient };
// snippet-end:[ses.JavaScript.createclientv3]