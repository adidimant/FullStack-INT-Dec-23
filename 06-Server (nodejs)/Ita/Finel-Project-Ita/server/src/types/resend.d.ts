declare module 'resend' {
    export class Resend {
      constructor(apiKey: string);
  
      sendEmail(data: {
        from: string;
        to: string[];
        subject: string;
        html: string;
      }): Promise<{ id: string }>;
    }
  }
  