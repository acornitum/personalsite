import React from "react";

export default function Mobile() {
  return (
    <div className="m-5">
      <div className="flex flex-col justify-center items-center pt-16 pb-4 p-2 text-center">
        <p className="text-2xl flex flex-col justify-center items-center pb-6">
          hi! i'm
        </p>
        <Title />
        <p className="pt-10 p-2">
          welcome to the mobile version of my site! /ᐠ｡ꞈ｡ᐟ\
        </p>
      </div>

      <div>
        <Socials />
      </div>

      <div className="flex flex-col justify-center items-center pt-4 pb-10 p-2 text-center">
        <p className="pt-4 p-2">
          for the full exp{" "}
          <span className="text-gray-400">
            <i>
              (see also: draggable boxes, Things You Can Click On, and more
              about me)
            </i>
          </span>{" "}
          please go on desktop :3
        </p>
      </div>

    </div>
  );
}

function Title() {
  return (
    <div className="relative text-9xl inline-block text-center w-10 h-10 font-bold title-font2">
      <div className="absolute @apply -translate-x-[46%] -translate-y-[54%] left-2/4 top-2/4 text-cmykYel title-font">
        acon
      </div>
      <div className="absolute @apply -translate-x-[48%] -translate-y-[52%] left-2/4 top-2/4 text-cmykBlue title-font2">
        acon
      </div>
      <div className="absolute @apply -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-cmykMag title-font3">
        acon
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div>

      <Link
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="white"
          >
            <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
          </svg>
        }
        name="instagram (@a.con.itum)"
        link="https://instagram.com"
      />

      <Link
        icon={
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="white"
            stroke="white"
            stroke-width="1"
          >
            <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
          </svg>
        }
        name="this site! (in a new tab!)"
        link="https://aconlin.vercel.app"
      />
    </div>
  );
}

const Link = ({ icon, name, link }) => {
  return (
    <a href={`${link}`} target="_blank" rel="noopener noreferrer">
      <div
        className="bg-cmykMag bg-opacity-50 h-18 rounded-lg mx-auto my-4"
        style={{ width: "95%" }}
      >
        <div className="p-4 flex items-center justify-center">
          {icon}
          <span className="ml-2 text-xl">{name}</span>
        </div>
      </div>
    </a>
  );
};

{
  /*
    site link??
    insta
    email
    locations */
}
