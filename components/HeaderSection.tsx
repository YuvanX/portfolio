"use client";
import {
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  PersonStanding,
} from "lucide-react";
import { FloatingDock } from "./ui/floating-dock";
import { IconBulbFilled } from "@tabler/icons-react";

export default function HeaderSection() {
  const items = [
    {
      title: "Home",
      icon: <HomeIcon />,
      href: "#home",
    },
    {
      title: "About",
      icon: <PersonStanding />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconBulbFilled />,
      href: "#projects",
    },
    {
      title: "Github",
      icon: <GithubIcon />,
      href: "https://github.com/YuvanX",
    },
    {
      title: "LinkedIn",
      icon: <LinkedinIcon />,
      href: "https://www.linkedin.com/in/abhivignesh/",
    },
  ];
  return (
    <div id="home" className="py-16 px-10 lg:px-20 flex justify-between items-center">
      <div className="font-space text-2xl font-semibold">AbhiVignesh</div>
      <div>
        <FloatingDock items={items} />
      </div>
    </div>
  );
}
