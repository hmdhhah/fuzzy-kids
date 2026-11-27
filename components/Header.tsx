import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import { Show } from "@clerk/nextjs";

import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  console.log(user, "usersssssssss");
  return (
    <header className="bg-cream py-5">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        {/* NavButtons */}
        {/* <nav className="main-nav" aria-label="Main navigation">
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#gift-guide">Gift Guide</a>
        </nav> */}
        {/* NavAdmin */}
        <div className="w-auto md:w-1/3 flex items-center justify-end space-x-4">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
      
        <div className="mx-5 ">
           <Show when="signed-in">
          {" "}
          <UserButton />
        </Show>
        <ClerkLoaded>{!user && <SignIn />}</ClerkLoaded>
        </div>
         </div>
        {/* <div className="header-actions">
          <button aria-label="Search"><SearchIcon  /></button>
          <button aria-label="Shopping bag"><BagIcon/></button>
        </div> */}
      </Container>
    </header>
  );
};

export default Header;
