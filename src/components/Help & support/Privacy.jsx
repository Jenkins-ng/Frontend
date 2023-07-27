import React from "react";
import Foot from "../Landing page/Footer/foot";

const Privacy = () => {
  return (
    <>
      <main className="relative top-[80px] w-5/6 m-auto">
        <h1 className="uppercase font-bold sm:text-2xl text-xl  text-gray-500">
          privacy Policy
        </h1>
        <section className="">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <span className="uppercase text-xl text-center font-bold mb-2 grid">
                Welcome to Jenkins.ng
              </span>
              <br />
              At <span className="uppercase font-bold">Jenkins.ng</span>, we are
              committed to protecting your privacy and ensuring the security of
              your personal information.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              This Privacy Policy outlines the types of information we collect,
              how we use and protect that information, and your rights and
              choices regarding your personal data. By accessing or using our
              Website, you acknowledge and agree to the practices described in
              this Privacy Policy.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Information We Collect{" "}
            </p>
            <ul className="text-gray-500 flex flex-col gap-4">
              <li>
                1.1 Personal Information: When you interact with our Website, we
                may collect personal information such as your name, email
                address, phone number, and mailing address. We only collect this
                information when you voluntarily provide it to us, such as when
                you register an account, make a purchase, apply for a job, or
                contact us for support.{" "}
              </li>
              <li>
                1.2 Usage Information: We may collect non-personal information
                about your interactions with our Website, such as your IP
                address, browser type, operating system, and the pages you
                visit. This information helps us analyze trends, administer the
                Website, track user movements, and improve our services.
              </li>
              <li>
                1.3 Cookies and Tracking Technologies: We use cookies and
                similar tracking technologies to enhance your browsing
                experience and provide personalized content. Cookies are small
                files stored on your device that enable us to recognize your
                preferences and offer relevant features. You can manage your
                cookie preferences through your browser settings. Use of
                Information
              </li>
              <li>
                2.1 Providing Services: We use your personal information to
                provide and improve our services, including electronic
                ticketing, online shopping, and job recruitment. This may
                involve processing your orders, facilitating payments,
                delivering tickets or products, and communicating with you about
                your transactions.{" "}
              </li>
              <li>
                2.2 Communication: We may use your contact information to send
                you updates, newsletters, marketing materials, and promotional
                offers related to our services. You can opt-out of these
                communications at any time by following the unsubscribe
                instructions provided in the email or contacting us directly.
              </li>
              <li>
                Customer Support: We may use your information to respond to your
                inquiries, provide technical support, and address any issues or
                complaints you may have.
              </li>
              <li>
                2.4 Legal Compliance: We may use and disclose your information
                to comply with applicable laws, regulations, legal processes, or
                enforceable governmental requests. We may also use your
                information to protect our rights, privacy, safety, or property,
                as well as those of our users or the public. Information Sharing{" "}
              </li>
              <li>
                3.1 Service Providers: We may share your personal information
                with trusted third-party service providers who assist us in
                operating our Website, conducting our business, and delivering
                services to you. These service providers have access to your
                information only to perform specific tasks on our behalf and are
                obligated to protect your privacy.
              </li>
              <li>
                3.2 Business Partners: We may share your information with our
                business partners or affiliates for marketing and promotional
                purposes, but only with your consent. These partners are
                required to handle your information in accordance with
                applicable privacy laws.
              </li>
              <li>
                3.3 Aggregated or Anonymized Data: We may share aggregated or
                anonymized data with third parties for various purposes,
                including analytics, research, and improving our services. This
                data does not identify you personally.
              </li>
              <li>
                3.4 Legal Requirements: We may disclose your information if
                required by law or in good faith belief that such action is
                necessary to comply with legal obligations, protect our rights,
                or investigate potential violations. Data Security{" "}
              </li>
              <li>
                4.1 We take reasonable measures to protect the security and
                integrity of your personal information. We use industry-standard
                security practices, including physical, technical, and
                administrative safeguards, to prevent unauthorized access, use,
                or disclosure.
              </li>
              <li>
                4.2 Despite our efforts, no data transmission or storage system
                can be guaranteed to be 100% secure. If you have reason to
                believe that your interaction with us is no longer secure,
                please notify us immediately. Your Rights and Choices
              </li>
              <li>
                5.1 Access and Correction: You have the right to access,
                correct, or update your personal information. You can review and
                modify your account information by logging into your account on
                our Website. If you need further assistance, please contact us.
              </li>
              <li>
                5.2 Opt-Out: You can opt-out of receiving marketing
                communications from us by following the instructions provided in
                the email or contacting us directly. However, please note that
                we may still send you non-promotional communications related to
                your account or transactions.
              </li>
              <li>
                5.3 Do Not Track Signals: Our Website does not currently respond
                to "Do Not Track" signals from browsers. However, you can manage
                your cookie preferences as described in Section 1.3.{" "}
              </li>
            </ul>
            <ul className="text-gray-500 gap-4 grid">
              <li>Children's Privacy</li>
              <li>
                6.1 Our Website is not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children without parental consent. If you believe that we have
                inadvertently collected personal information from a child,
                please contact us, and we will promptly delete the information.
              </li>
            </ul>
            <ul className="text-gray-500 gap-4 grid">
              <li>Changes to the Privacy Policy</li>
              <li>
                7.1 We reserve the right to update or modify this Privacy Policy
                at any time. We will notify you of any material changes by
                posting the updated Privacy Policy on our Website. Your
                continued use of the Website after the effective date of the
                revised Privacy Policy constitutes your acceptance of the
                changes.
              </li>
            </ul>
            <ul className="text-gray-500 gap-4 grid">
              <li>Contact Us</li>
              <li>
                8.1 If you have any questions, concerns, or requests regarding
                this Privacy Policy or our privacy practices, please contact us
                at [contact email address].
              </li>
            </ul>
            <ul className="text-gray-500 gap-4 grid">
              <li>Governing Law</li>
              <li>
                9.1 This Privacy Policy shall be governed by and construed in
                accordance with the laws of [Jurisdiction]. Any disputes arising
                under or in connection with this Privacy Policy shall be subject
                to the exclusive jurisdiction of the courts of [Jurisdiction].
              </li>
            </ul>
            <p className="text-gray-500 gap-4 grid">
              Thank you for reviewing our Privacy Policy.
            </p>
          </div>
        </section>
      </main>
      <footer className="invisible">
        <Foot />
      </footer>
    </>
  );
};

export default Privacy;
