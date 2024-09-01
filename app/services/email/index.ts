import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../libs/sesClient";

const createSendEmailCommand = (toAddress, fromAddress,program_id,program_name) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress,
        /* more To-email addresses */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data:    `
           <html>
<head></head>
<body>
  <h1>Video Exercise Booklet </h1>
  <p>Clink <a href="https://www.repsexercise.com.au/ExerciseGallery?id=${program_id}">link</a> to access video booklet.</p>
  <p>This email was sent with
    <a href='https://www.repsexercise.com.au/'>REPS exercises.</a>
</body>
</html>

          
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data:"",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "REPS-Custom Video Booklet Program Link",
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

const run_sendEmail = async (program_id:any,email:string,program_name?:string) => {
  const sendEmailCommand = createSendEmailCommand(
    email,
    "notifications@repsexercise.com.au",
    program_id,
    program_name
  );

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (caught) {
    if (caught instanceof Error && caught.name === "MessageRejected") {
      /** @type { import('@aws-sdk/client-ses').MessageRejected} */
      const messageRejectedError = caught;
      return messageRejectedError;
    }
    else{
        return new Error
    }
    throw caught;
  }
};

// snippet-end:[ses.JavaScript.email.sendEmailV3]
export { run_sendEmail };