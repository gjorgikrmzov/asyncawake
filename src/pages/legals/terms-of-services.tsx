import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

const TermsPage = () => {
  return (
    <div className="h-full flex flex-col justify-between  text-gray-900">
      <Head>
        <title>Terms of Services: Async Awake</title>
        <meta
          name="description"
          content="Async Awake: AI agency crafting smart Chat Agent and automation to boost efficiency, engagement, and growth for businesses."
        />
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-4xl mt-10 px-6 md:px-10">
        <h1 className="text-4xl font-medium mb-8">Terms of Service</h1>
        <p className="mb-4">
          <strong>Last Updated: April 12, 2025</strong>
        </p>
        <p className="mb-4">
          These Terms of Service govern your use of Async Awake’s website
          (asyncawake.com) and Chat Agent services. By using our services, you
          agree to these terms.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">1. Services</h2>
        <p className="mb-4">
          Async Awake provides custom AI Chat Agent solutions, including design,
          deployment, and maintenance. We aim for quality but do not guarantee
          specific outcomes.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">2. Client Responsibilities</h2>
        <p className="mb-4">
          You agree to:
          <br />- Provide accurate information for Chat Agent development.
          <br />- Use our services lawfully.
          <br />- Pay agreed fees on time.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">3. Payment Terms</h2>
        <p className="mb-4">
          Pricing is outlined in your service agreement. Payments are due as
          invoiced. Late payments may incur fees or service suspension.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">4. Intellectual Property</h2>
        <p className="mb-4">
          We retain ownership of our tools and code. You own your Chat Agent’s
          custom content and branding. You grant us permission to use your logo
          in our portfolio unless otherwise agreed.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">5. Termination</h2>
        <p className="mb-4">
          Either party may terminate with 30 days’ written notice. No refunds
          for completed work unless specified.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">6. Limitation of Liability</h2>
        <p className="mb-4">
          Async Awake is not liable for indirect damages or losses. Our liability
          is limited to fees paid in the prior 6 months.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">7. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms. Continued use constitutes acceptance.
        </p>

        <h2 className="text-xl font-medium mt-6 mb-2">8. Contact Us</h2>
        <p className="mb-4">For questions, contact support@asyncawake.com.</p>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
