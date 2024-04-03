import LocationIcon from "@assets/icons/LocationIcon";
import PhoneIcon from "@assets/icons/PhoneIcon";
import { socialMedia } from "@constants/SocialMedia";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <>
      <section className="bg-primary-800">
        <div className="lg:container flex flex-col md:flex-row justify-between gap-3 px-8 py-4">
          <div className="flex flex-col items-start md:flex-row md:items-center gap-3 text-white">
            <span className="flex gap-1.5">
              <LocationIcon style="w-5 h-5 text-primary-200" />
              <p className="social-media__text mt-[3px]">
                Dr. Richardson, California
              </p>
            </span>
            <div className="hidden md:block w-[1px] h-5 bg-primary-200" />
            <span className="flex gap-1 ml-1 md:ml-0">
              <PhoneIcon style="w-5 h-5 text-primary-200" />
              <p className="social-media__text mt-[3px]">1-802-526-2463</p>
            </span>
          </div>
          <div className="flex w-full justify-between md:w-max md:gap-3 h-full">
            {socialMedia.map((media) => (
              <Link to={"/"}>
                <img
                  key={media.id}
                  src={`${media.src}`}
                  alt="social media"
                  className="w-2/3 h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
