import React, { useState } from "react";
import { MdSearch, MdShoppingBag, MdPerson, MdOutlineExitToApp, MdMenuBook, MdOutlineQuestionMark, MdReceipt } from "react-icons/md";
import { LuArrowDownCircle, LuArrowUpCircle } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Cart from "@/components/Cart"; // Ensure this path is correct

export default function TopNavigation({ modifier = "" }) {
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/", sections: [] },
    {
      name: "Shop",
      path: "/allproducts",
      sections: [
        { name: "Women", path: "/women", info: "Women's details" },
        { name: "Men", path: "/men", info: "Men's details" },
        { name: "Kids", path: "/kids", info: "Kids' details" },
        { name: "New", path: "/new", info: "New details" },
        { name: "Featured", path: "/featured", info: "Featured details" },
      ],
    },
    { name: "Sale", path: "/sale", sections: [] },
    { name: "About", path: "/about", sections: [] },
  ];

  const logo = (
    <HoverCard>
      <HoverCardTrigger>
        <img
          src="src/assets/Logo-6.png"
          alt="E-commerce Logo"
          className="h-14 w-14"
          onClick={() => navigate("/")}
        />
      </HoverCardTrigger>
      <HoverCardContent className="mt-2 grid grid-cols-2 w-[100vw] h-[335px] bg-zinc-100">
        <div className="w-[300px] h-[300px] bg-transparent">
          <div className="grid grid-rows-3 space-y-1 mt-1 items-center justify-center">
            <img
              src="src/assets/Logo-1.png"
              alt="branding1"
              className="w-[100px] h-[100px]"
            />
            <img
              src="src/assets/Logo-1.png"
              alt="branding2"
              className="w-[100px] h-[100px]"
            />
            <img
              src="src/assets/Logo-1.png"
              alt="branding3"
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>
        <div className="absolute top-[35px] left-[630px] h-[270px] w-[3px] bg-black"></div>
        <div className="grid grid-rows-3 bg-transparent w-[750px] h-[300px]">
          <p className="text-[25px] font-semibold mt-10">DISCOVER</p>
          <p className="text-[20px] font-normal text-justify bg-transparent text-black w-[700px]">
            Hover over the images to discover more!
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  return (
    <>
      <nav className="flex flex-row justify-between items-center py-2 px-12 h-14">
        <div className="flex flex-row items-center gap-8">
          {logo}
          {navItems.map((item, index) =>
            item.sections.length > 0 ? (
              <HoverDropDown
                key={index}
                name={item.name}
                sections={item.sections}
                onClick={() => {
                  navigate(item.path);
                  console.log("clicked");
                }}
              />
            ) : (
              <Button
                key={index}
                variant="ghost"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            )
          )}
        </div>
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-2 ">
            <Input id="search" placeholder="Search" />
            <Button variant="outline">
              <MdSearch className="h-6 w-6" />
            </Button>
          </div>
          <Popover>
            <PopoverTrigger>
              <div className="relative flex items-center justify-center">
                <Button variant="ghost">
                  <MdShoppingBag className="h-6 w-6" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <Cart />
            </PopoverContent>
          </Popover>
          <Button
            variant="ghost"
            onClick={() => navigate("/accountsec")}
          >
            <MdPerson className="h-6 w-6" />
          </Button>
          <Popover>
            <PopoverTrigger>
              <img
                src="src/assets/BurgerMenu.png"
                alt="Scent and Perfume logo"
                className="h-7"
              />
            </PopoverTrigger>
            <PopoverContent className="mt-1 grid grid-cols-2 w-[100vw] h-[340px] bg-zinc-50">
              <div className="bg-transparent">
                <div className="font-semibold text-[30px] ml-9 mt-5">
                  DISCOVER
                </div>
                <div
                  className="font-semibold text-[20px] ml-9 mt-4 w-[700px]"
                  style={{ textAlign: "justify" }}
                >
                  Discover more options here.
                </div>
              </div>
              <div className="bg-transparent">
                <div className="font-semibold text-[30px] mr-40 mt-5" style={{ textAlign: "right" }}>
                  DISCOVER
                </div>
                <div className="font-light text-[20px] mr-32 mt-2 hover:underline" style={{ textAlign: "right" }}>
                  <a href="/accountsec"> Account and Security <MdPerson className="inline-block ml-1" /></a>
                </div>
                <div className="font-light text-[20px] mr-32 mt-2 hover:underline" style={{ textAlign: "right" }}>
                  <a href="/vouchers"> Vouchers <MdMenuBook className="inline-block ml-1" /></a>
                </div>
                <div className="font-light text-[20px] mr-32 mt-2 hover:underline" style={{ textAlign: "right" }}>
                  <a href="/orderhistory"> Order History <MdReceipt className="inline-block ml-1" /></a>
                </div>
                <div className="font-light text-[20px] mr-32 mt-2 hover:underline" style={{ textAlign: "right" }}>
                  <a href="/faq"> FAQs <MdOutlineQuestionMark className="inline-block ml-1" /></a>
                </div>
                <div className="font-light text-[20px] mr-24 mt-2 hover:underline" style={{ textAlign: "right" }}>
                  _______________________________________
                </div>
                <div className="font-light text-[20px] mr-32 mt-2 hover:underline" style={{ textAlign: "right" }}>
                  <a href="/login"> Log out <MdOutlineExitToApp className="inline-block ml-1" /> </a>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
      <hr className="w-full" />
    </>
  );
}

function HoverDropDown({ name, sections, onClick, modifier = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredName, setHoveredName] = useState(sections[0]);

  return (
    <HoverCard>
      <HoverCardTrigger
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button variant="ghost" onClick={onClick}>
          {isHovered ? <LuArrowUpCircle /> : <LuArrowDownCircle />}
          {name}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-screen ">
        <div className="flex flex-row gap-8 justify-evenly">
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-3xl">Shop</h1>
            {sections.map((section, index) => (
              <a
                key={index}
                onMouseOver={() => setHoveredName(section)}
                variant="outline"
                href="#"
                className="w-full hover:bg-slate-200 px-8 py-3 rounded-lg"
              >
                {section.name}
              </a>
            ))}
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-3xl">{hoveredName.name}</h1>
            <p>{hoveredName.info}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
