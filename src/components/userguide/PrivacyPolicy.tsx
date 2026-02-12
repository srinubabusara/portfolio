const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-foreground text-background py-20 px-4">
      <div className="max-w-3xl mx-auto bg-background/5 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to me. This Privacy Policy explains what
          information I collect, how it is used, and how I protect it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information Collection</h2>
        <p className="mb-4">
          I do not collect personal information unless you voluntarily provide it,
          such as via email or contact forms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Information</h2>
        <p className="mb-4">
          Any information provided will only be used to respond to your inquiries
          or provide requested services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="mb-4">
          My website may use third-party tools like analytics, but none of these
          store personal data directly tied to you.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p>
          If you have questions about this Privacy Policy, feel free to contact me
          at <a href="mailto:srinubabu.sara@gmail.com" className="underline hover:text-accent">srinubabu.sara@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
