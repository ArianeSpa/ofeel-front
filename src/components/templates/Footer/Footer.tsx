// == Import : npm
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// == Import : local
import { Flex, LinkIcon, LinkIconProps, Typo } from "../../atoms";
import { useTheme } from "@/theme";

type SocialProps = {
  url: string;
  name: string;
  icon: JSX.Element;
  variant?: LinkIconProps["variant"];
  size?: LinkIconProps["size"];
  backgroundImage?: LinkIconProps["backgroundImage"];
};

// == Composant
export const Footer: React.FC = () => {
  const { color } = useTheme();
  const socials: SocialProps[] = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ariane-spanneut/",
      icon: <FaLinkedin color={color.socials.linkedin} fontSize="22px" />,
    },
    {
      name: "github",
      url: "https://github.com/ArianeSpa",
      icon: <FaGithub color={color.socials.github} fontSize="40px" />,
    },
    {
      url: "https://www.youtube.com/channel/UCVdtXmsbmewiS6N9QjO8LKA",
      name: "youtube",
      icon: <FaYoutube color={color.socials.youtube} fontSize="32px" />,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/suis_ton_fil/",
      icon: <FaInstagram color={color.socials.instagram} fontSize="18px" />,
      variant: "circle",
      size: "small",
      backgroundImage: "instagram",
    },
    {
      name: "email",
      url: "mailto:aspanneut.pro@gmail.com?subject=contact%20from%20Ofeel",
      icon: <SiGmail aria-hidden color={color.socials.gmail} fontSize="22px" />,
    },
  ];
  return (
    <Flex as="footer" gap={1} p={1}>
      <Typo fontStyle="italic" fontSize={12} color="background.bg2">
        &copy; O'Feel d'Ariane 2024
      </Typo>
      <Flex flexDirection="row" gap={10} p={2}>
        {socials.map(({ url, name, ...props }) => (
          <LinkIcon key={name} aria-label={name} to={url} {...props} />
        ))}
      </Flex>
    </Flex>
  );
};
