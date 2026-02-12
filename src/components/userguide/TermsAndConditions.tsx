const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-foreground text-background py-20 px-4">
      <div className="max-w-3xl mx-auto bg-background/5 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4">
          By using this website, you agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Content</h2>
        <p className="mb-4">
          All content on this site is for personal or informational purposes only. 
          You may not copy or redistribute content without permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Links to Other Sites</h2>
        <p className="mb-4">
          This site may contain links to external websites. I am not responsible 
          for the content or privacy practices of these external sites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          I am not liable for any damages arising from the use of this website or 
          the information contained herein.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Changes</h2>
        <p className="mb-4">
          I may update these terms at any time. Continued use of the website 
          constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
        <p>
          For any questions regarding these terms, contact me at 
          <a href="mailto:srinubabu.sara@gmail.com" className="underline hover:text-accent"> srinubabu.sara@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
