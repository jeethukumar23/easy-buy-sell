import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SubscriptionRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscriptionRequest = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending subscription confirmation to:", email);

    const emailResponse = await resend.emails.send({
      from: "EasyBuySell <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for Subscribing to EasyBuySell!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 12px; }
            h1 { margin: 0; }
            .highlight { color: #3b82f6; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Welcome to EasyBuySell!</h1>
            </div>
            <div class="content">
              <p>Hi there!</p>
              <p>Thank you for subscribing to our newsletter! We're thrilled to have you on board.</p>
              <p>As a subscriber, you'll be the first to know about:</p>
              <ul>
                <li><span class="highlight">Exclusive Sales</span> - Get early access to our biggest discounts</li>
                <li><span class="highlight">Special Offers</span> - Subscriber-only deals and promotions</li>
                <li><span class="highlight">New Arrivals</span> - Be the first to shop our latest products</li>
                <li><span class="highlight">Flash Discounts</span> - Limited-time offers you won't want to miss</li>
              </ul>
              <p>Stay tuned for amazing deals coming your way!</p>
              <p>Happy Shopping! 🛍️</p>
              <p>The EasyBuySell Team</p>
            </div>
            <div class="footer">
              <p>© 2024 EasyBuySell. All rights reserved.</p>
              <p>India, Andhra Pradesh, Tenali 522201</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-subscription-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
