import React from "react";

const TermsAndPolicies = () => {
  return (
    <div>
      <div className="bg-white">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-blue-700 sm:text-4xl lg:col-span-3">
            Terms of service
          </h2>

          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p>
            We offer a 100% refund on all returned items within 30 days of purchase, provided the product is unused, in its original packaging, and with the receipt or proof of purchase. To initiate a return, simply contact our customer support team. Please note that items that have been damaged or altered are not eligible for a refund. Refunds will be processed to the original payment method within 7-10 business days after the return is approved.
            </p>
          </div>
         
        </section>
      </div>

      <div className="bg-gray-100">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 border-b border-gray-300 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-gray-800 sm:text-4xl lg:col-span-3">
            Privacy Policy
          </h2>

          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p>
            Privacy Policy

At Adrenix, we prioritize your privacy. Here's how we handle your personal information:
<br/>
Information We Collect
We gather personal details (name, email, address) and payment information to process orders and enhance your experience.
<br/>
How We Use It
Your data helps us process orders, personalize your experience, and provide updates or offers. Sensitive payment data is never stored on our servers.
<br/>
Data Security
We use encryption and secure protocols to safeguard your information.
<br/>
Sharing Data
We share data only with trusted partners assisting in orders and payments, ensuring they uphold your privacy.
<br/>
Cookies
Cookies improve site functionality and analyze traffic. You can disable them in your browser settings.
<br/>
Your Rights
Access, update, or delete your data by contacting our support team.
<br/>
Updates
We may revise this policy. Changes will be posted here.
<br/>
Contact Us
For questions, email us at adrenix.store@gmail.com.
            </p>
          </div>
          
        </section>
      </div>

  
    </div>
  );
};

export default TermsAndPolicies;
