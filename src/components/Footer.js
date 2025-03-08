const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-300 text-black py-6 mt-auto">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-base">Prime John Clara</p>
          </div>
          
          <div className="text-sm text-black">
            <p>Copyright © {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;