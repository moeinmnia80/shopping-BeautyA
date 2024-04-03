import AboutUsFooter from "@components/ui/AboutUsFooter";
import Privacy from "@components/ui/Privacy";
import SocialMedia from "@components/ui/SocialMedia";
import SuggestedValues from "@components/ui/SuggestedValues";

const Footer = () => {
  return (
    <>
      <footer className="">
        <SuggestedValues />
        <AboutUsFooter />
        <SocialMedia />
        <Privacy />
      </footer>
    </>
  );
};

export default Footer;
