// == Import : npm
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// == Import : local
import { ButtonIcon, Flex, ButtonIconProps } from "../../atoms";
import { StyledCopyright, instaBackground } from "./Footer.style";

type SocialProps = {
  url: string;
  name: string;
  icon: JSX.Element;
  variant?: ButtonIconProps["variant"];
  size?: ButtonIconProps["size"];
  background?: string;
};
const socials: SocialProps[] = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ariane-spanneut/",
    icon: <FaLinkedin color="#0A66C2" fontSize="22px" />,
  },
  {
    name: "github",
    url: "https://github.com/ArianeSpa",
    icon: <FaGithub fontSize="40px" />,
  },
  {
    url: "https://www.youtube.com/channel/UCVdtXmsbmewiS6N9QjO8LKA",
    name: "youtube",
    icon: <FaYoutube color="#ff0033" fontSize="32px" />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/suis_ton_fil/",
    icon: <FaInstagram color="white" fontSize="18px" />,
    variant: "circle",
    size: "small",
    background: instaBackground,
  },
  {
    name: "email",
    url: "mailto:aspanneut.pro@gmail.com?subject=contact%20from%20Ofeel",
    icon: <SiGmail color="#bf211e" fontSize="22px" />,
  },
];

// == Composant
export const Footer: React.FC = () => {
  const handleClickSocial = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Flex flexDirection="column" gap={2}>
      <StyledCopyright>&copy; O'Feel d'Ariane 2024</StyledCopyright>
      <Flex gap={10}>
        {socials.map(({ url, name, ...props }) => (
          <ButtonIcon
            aria-label={name}
            role="link"
            onClick={() => handleClickSocial(url)}
            {...props}
          />
        ))}
      </Flex>
    </Flex>
  );
};
