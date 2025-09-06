import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Async Awake Referral Partner Guide</title>
        <meta
          name="description"
          content="Referral Partner Guide for Async Awake's AI-powered virtual assistants and automation services"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Header />
      <main className="min-h-screen  py-10 px-6 md:px-10 text-left" style={{ fontFamily: "'Onest', sans-serif" }}>
        <div className="max-w-4xl mx-auto">
          <section>
            <h1 className="text-4xl font-medium text-[#292929] mt-8 mb-8">Async Awake Referral Partner Guide</h1>
            <p className="text-lg text-[#292929]/80">
              Welcome to the Async Awake Referral Partner Program! This guide equips you with the information needed to refer our AI-powered virtual assistant and automation services to your network. By partnering with us, you can help businesses streamline operations and achieve their goals while earning rewards for your referrals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#292929] mt-6 mb-6">About Async Awake</h2>
            <p className="text-[#292929]/80">
              Async Awake specializes in delivering bespoke AI-powered virtual assistants and automation solutions to businesses worldwide. Our mission is to empower organizations by handling repetitive tasks, optimizing workflows, and providing proactive support, allowing clients to focus on growth and innovation. Founded in 2023, we combine cutting-edge technology with personalized service to deliver measurable results.
            </p>
            <ul className="list-disc list-inside text-[#292929]/80 mt-4">
              <li><span className="font-medium text-[#292929]">Mission</span>: To enhance business efficiency through tailored AI assistance and seamless automation.</li>
              <li><span className="font-medium text-[#292929]">Vision</span>: To redefine how businesses operate by integrating intelligent solutions that adapt to unique needs.</li>
              <li><span className="font-medium text-[#292929]">Core Values</span>: Innovation, reliability, and client-centricity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#292929] mt-6 mb-6">Our Services</h2>
            <p className="text-[#292929]/80">
              Async Awake offers two primary service categories designed to transform business operations:
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-medium text-[#292929] mt-4 mb-4">Chat Agent</h3>
              <ul className="list-disc list-inside text-[#292929]/80">
                <li>AI-powered virtual assistants customized to handle tasks such as scheduling, customer support, data entry, and more.</li>
                <li>Proactive task management to anticipate and address client needs.</li>
                <li>Seamless integration with existing tools and platforms.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-medium text-[#292929] mt-4 mb-4">Automation</h3>
              <ul className="list-disc list-inside text-[#292929]/80">
                <li>Custom workflows to automate repetitive tasks, including CRM integrations, email marketing, and data processing.</li>
                <li>Scalable solutions to improve efficiency and reduce operational costs.</li>
                <li>Ongoing maintenance to ensure optimal performance.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#292929] mt-6 mb-6">Unique Selling Point: Bespoke AI Assistants & Automation</h2>
            <p className="text-[#292929]/80">
              Async Awake stands out by offering highly customized AI assistants paired with advanced automation. Unlike generic solutions, our services are tailored to each client’s specific needs, ensuring maximum impact. Key differentiators include:
            </p>
            <ul className="list-disc list-inside text-[#292929]/80 mt-4">
              <li><span className="font-medium text-[#292929]">Personalization</span>: Assistants and workflows are designed to align with your business processes.</li>
              <li><span className="font-medium text-[#292929]">Proactivity</span>: Our AI anticipates needs, resolving issues before they escalate.</li>
              <li><span className="font-medium text-[#292929]">Scalability</span>: Solutions grow with your business, from startups to enterprises.</li>
              <li><span className="font-medium text-[#292929]">Integration</span>: Seamless compatibility with tools like CRMs, email platforms, and more.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#292929] mt-6 mb-6">Solutions: How We Can Help</h2>
            <p className="text-[#292929]/80">
              Async Awake addresses common business challenges, delivering tangible benefits to your referrals:
            </p>
            <ul className="list-disc list-inside text-[#292929]/80 mt-4">
              <li><span className="font-medium text-[#292929]">Time Savings</span>: Our AI assistants handle administrative tasks, freeing up time for strategic priorities.</li>
              <li><span className="font-medium text-[#292929]">Cost Efficiency</span>: Automation reduces manual labor and operational expenses.</li>
              <li><span className="font-medium text-[#292929]">Improved Productivity</span>: Streamlined workflows and proactive support boost team performance.</li>
              <li><span className="font-medium text-[#292929]">Customer Satisfaction</span>: Personalized engagement enhances client relationships.</li>
              <li><span className="font-medium text-[#292929]">Scalability</span>: Solutions adapt to growing demands, supporting long-term success.</li>
            </ul>
            <p className="text-[#292929]/80 mt-4">
              <span className="font-medium text-[#292929]">Example</span>: A mid-sized e-commerce company used our Chat Agent to manage customer inquiries and our Automation service to streamline order processing. The result? A 50% reduction in response time and a 30% increase in order processing efficiency.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#292929] mt-6 mb-6">Pricing Details</h2>
            <p className="text-[#292929]/80">
              Our pricing is structured to be transparent and flexible, catering to businesses of all sizes. Below are the details for our two main services:
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-medium text-[#292929] mt-4 mb-4">Automation</h3>
              <ul className="list-disc list-inside text-[#292929]/80">
                <li><span className="font-medium text-[#292929]">Upfront Payment</span>: One-time fee for setup with automation providers, based on project scope.</li>
                <li><span className="font-medium text-[#292929]">Service Fee</span>: Charged for designing and implementing custom workflows (varies by complexity).</li>
                <li><span className="font-medium text-[#292929]">Maintenance Fee</span>: Ongoing support to ensure automation systems run smoothly.</li>
                <li><span className="font-medium text-[#292929]">Monthly Payments</span>: Subscription for tokens or usage-based costs (e.g., API calls, cloud services).</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-medium text-[#292929] mt-4 mb-4">Chat Agent</h3>
              <ul className="list-disc list-inside text-[#292929]/80">
                <li><span className="font-medium text-[#292929]">Setup Fee</span>: €1,500 for initial configuration and integration.</li>
                <li><span className="font-medium text-[#292929]">Complexity Fee</span>: Variable cost based on the bot’s complexity and customization requirements.</li>
                <li><span className="font-medium text-[#292929]">Maintenance Fee</span>: Ongoing support to keep the bot updated and optimized.</li>
                <li><span className="font-medium text-[#292929]">Monthly Payments</span>: Subscription for tokens or usage-based costs (e.g., AI processing, integrations).</li>
              </ul>
            </div>
            <p className="text-[#292929]/80 mt-4">
              <span className="font-medium text-[#292929]">Note</span>: Exact costs are determined after a consultation to assess client needs. Contact us for a personalized quote.
            </p>
            <p className="text-[#292929]/80 mt-4">
              <span className="font-medium text-[#292929]">Referral Benefits</span>: Earn a 20% commission for each successful referral. For example, referring a client to an Chat Agent package with a €2,000 annual value earns you €400.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-[#292929] mt-6 mb-6">How to Refer Clients</h2>
            <ol className="list-decimal list-inside text-[#292929]/80">
              <li><span className="font-medium text-[#292929]">Introduce Async Awake</span>: Share our services using this guide or our website, <a href="https://asyncawake.com" className="text-[#292929] hover:underline">asyncawake.com</a>.</li>
              <li><span className="font-medium text-[#292929]">Facilitate Connection</span>: Provide your contact with our contact form or arrange an introduction to our team.</li>
              <li><span className="font-medium text-[#292929]">Track Your Referral</span>: Inform us of your referral via partnership@asyncawake.com to ensure commission tracking.</li>
              <li><span className="font-medium text-[#292929]">Earn Rewards</span>: Receive your commission within 30 days of the client’s first payment.</li>
            </ol>
          </section>

          {/* <section>
            <h2 className="text-2xl font-medium text-[#292929] mt-6 mb-6">Why Partner with Async Awake?</h2>
            <ul className="list-disc list-inside text-[#292929]/80">
              <li><span className="font-medium text-[#292929]">Proven Results</span>: 90% of clients report improved efficiency within the first month.</li>
              <li><span className="font-medium text-[#292929]">Generous Commissions</span>: Earn competitive rewards for every referral.</li>
              <li><span className="font-medium text-[#292929]">Marketing Support</span>: Access promotional materials and dedicated partner support.</li>
              <li><span className="font-medium text-[#292929]">Trusted Expertise</span>: Our team leverages AI and automation to deliver reliable, innovative solutions.</li>
            </ul>
          </section> */}

         

          <section className="mt-6">
            <p className="font-medium text-[#292929]">Async Awake</p>
            <p className="text-[#292929]/80">Transforming Businesses with AI and Automation</p>
            <p><a href="https://asyncawake.com" className="text-[#292929] hover:underline">asyncawake.com</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}