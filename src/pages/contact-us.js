import LayoutMain from "@/components/layout/LayoutMain";

export default function Contact() {
  return (
    <LayoutMain
      meta={{
        title: "Contact Us To Get Support | TikNotes.app",
        description:
          "Need help with TikNotes.app? Contact our support team, find answers in our FAQ, or connect on social media. We're here to assist you with downloading TikTok Notes photos.",
      }}
    >
      <div className="content">
        <h1>Contact Us</h1>
        <p>
          We&apos;re here to help! If you have any questions, concerns, or
          feedback about TikNotes.app, please don&apos;t hesitate to reach out
          to us. We strive to respond to all inquiries within 24-48 hours.
        </p>
        <h2>Get in Touch</h2>
        <p>
          Email:{" "}
          <a href="mailto:tiknotes.app@gmail.com">tiknotes.app@gmail.com</a>
        </p>
        <h2>Reporting Issues</h2>
        <p>
          If you encounter any technical issues or bugs while using
          TikNotes.app, please provide the following information when contacting
          us:
        </p>
        <ul className="list-disc mb-3">
          <li>A clear description of the problem</li>
          <li>The device and browser you&apos;re using</li>
          <li>Any error messages you received</li>
          <li>
            The TikTok Notes link you were trying to download from (if
            applicable)
          </li>
        </ul>
        <h2>Feedback and Suggestions</h2>
        <p>
          We&apos;re always looking to improve TikNotes.app. If you have any
          suggestions or feedback, we&apos;d love to hear from you! Use the
          email address above or reach out to us on social media. Thank you for
          using TikNotes.app. We appreciate your support and look forward to
          hearing from you!
        </p>
      </div>
    </LayoutMain>
  );
}
