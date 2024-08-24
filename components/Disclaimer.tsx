import React from "react";

const DisclaimerPopup = ({ onAgree }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-lg font-bold mb-4">Disclaimer</h2>
        <p className="mb-4 z-50 text-gray-950">
        

<p className="text-gray-950">The exercise programs contained in the REPS app are general exercise programs that are not comprehensive or intended to be suitable for all people after stroke.</p>

<p>Macquarie University does not make any representations or warranties as to the effectiveness of the exercises contained in this video.</p>

<p>Use of the PUSH or TASK exercise programs contained in REPS should be prescribed by a healthcare professional and adapted to your individual needs.</p>

<p>This video should be used as a guide only and is not a substitute for the advice or prescribed course of treatment of qualified physiotherapists, occupational therapists or medical practitioners.</p>

<p>Should you have any questions or problems regarding the use of the PUSH or TASK programs please consult your relevant healthcare professional.</p>

<p>You hereby assume full responsibility for ensuring the appropriateness of any use of the PUSH or TASK exercise program, and you acknowledge that neither Macquarie University nor any of the developers of the PUSH or TASK programs accept any responsibility for decisions made by you based on the use of the PUSH or TASK programs.</p>

<p>Exclusion of Liability Participation in any of the exercises shown on this video is at your own risk. By viewing this demonstration exercise video or performing the exercises demonstrated, you acknowledge and accept that, to the extent permitted by law, Macquarie University or the developers of the PUSH or TASK exercise programs will be under any liability to you whatsoever, whether in contract or tort (including, without limitation, negligence), breach of statute or any other legal or equitable obligation, in respect of any injury, loss or damage (including loss of profit or savings), howsoever caused, which may be suffered or incurred by the viewer or any other person.</p>
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={onAgree}>I Agree</button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
