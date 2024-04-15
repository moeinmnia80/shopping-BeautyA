import AboutUs from "@components/FooterAboutUs";
import Privacy from "@components/FooterPrivacy";
import SocialMedia from "@components/FooterSocialMedia";
import SuggestedValues from "@components/FooterSuggestedValues";

const Footer = () => {
  return (
    <>
      <footer className="">
        <SuggestedValues />
        <AboutUs />
        <SocialMedia />
        <Privacy />
      </footer>
    </>
  );
};

export default Footer;
