const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export const handler = async (event, context) => {
   console.log('test');
  try {
   //  console.log('Function called with event:', event);
   //  const { to, name, email, message } = JSON.parse(event.body);

   //  console.log('Parsed JSON:', { to, subject, text });

    const msg = {
      to: 'dennidnguyen@yahoo.de',
      from: "info@somico-delivery.de",
      name: 'Dennis',
      email: 'test@test.de',
      message: 'Hallo du Gurke, gucken ob dis geht',
    };

    await sgMail.send(msg);

    console.log('Email sent successfully');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};
