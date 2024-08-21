export default function Footer() {
  const footerLinks = [
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className=" text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">MatDot</h2>
          <p>&copy; {new Date().getFullYear()} MatDot. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.path} className="hover:underline">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
