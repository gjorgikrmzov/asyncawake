import Footer from "@/components/footer";
import Header from "@/components/header";

const PrivacyPage = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-between bg-white text-gray-900">

        <head>
          <title>Privacy Policy: AsyncAwake</title>
          <meta
            name="description"
            content="AsyncAwake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
          />
        </head>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="max-w-4xl mt-10 px-6 md:px-10">
          <h1 className="text-4xl font-medium mb-8">
            Privacy Policy
          </h1>
          <p className="mb-4">
            <strong>Last Updated: April 12, 2025</strong>
          </p>
          <p className="mb-4">
            At AsyncAwake, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, store, and share
            information when you visit asyncawake.com or use our Chat Agent
            services.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            - <strong>Personal Information</strong>: Name, email address, and
            company details when you contact us or request a demo.
            <br />- <strong>Chat Agent Data</strong>: Chat transcripts or
            preferences from interactions with our clients’ Chat Agents.
            <br />- <strong>Usage Data</strong>: Non-identifying data like
            browser type or pages visited for analytics.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use your information to:
            <br />- Deliver and improve our Chat Agent services.
            <br />- Respond to inquiries and provide support.
            <br />- Comply with legal obligations.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">
            3. How We Share Your Information
          </h2>
          <p className="mb-4">
            We do not sell your data. We may share it with:
            <br />- <strong>Service Providers</strong>: Tools for hosting or
            analytics.
            <br />- <strong>Clients</strong>: Relevant Chat Agent data to fulfill
            their services.
            <br />- <strong>Legal Authorities</strong>: If required by law.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">4. Data Security</h2>
          <p className="mb-4">
            We use industry-standard measures to protect your data, but no
            system is 100% secure. Data is retained only as needed.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">5. Your Rights</h2>
          <p className="mb-4">
            You may have rights to access, correct, or delete your data,
            depending on your location. Contact us at contact@asyncawake.com to
            exercise these rights.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">
            6. Third-Party Links
          </h2>
          <p className="mb-4">
            Our site may link to external sites. We are not responsible for
            their privacy practices.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">
            7. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this policy. Check here for the latest version.
          </p>

          <h2 className="text-xl font-medium mt-6 mb-2">8. Contact Us</h2>
          <p className="mb-4">
            For questions, reach out at contact@asyncawake.com.
          </p>
        </main>

        <div></div>

      </div>
      {/* Footer outside to keep it fixed at the bottom */}
      <Footer />
    </>
  );
};

export default PrivacyPage;
