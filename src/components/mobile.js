import React from "react";

export default function Mobile() {
  return (
    <div className="m-5">
      <div className="flex flex-col justify-center items-center pt-16 pb-4 p-2 text-center">
        <img
          src="https://cloud-cn1eo77un-hack-club-bot.vercel.app/0image.png"
          alt="acon cat logo"
          className="w-24 h-auto mb-2"
        />

        <Title />

        <p>i make things sometimes /ᐠ｡ꞈ｡ᐟ\</p>
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

      <div>
        <About />
      </div>

      <div className="mt-28">
        <Footer />
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        }
        name="github (@acornitum)"
        link="https://github.com/acornitum"
      />

      <Link
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="4 4 24 24"
            fill="white"
          >
            <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
          </svg>
        }
        name="instagram (@a.con.itum)"
        link="https://www.instagram.com/a.con.itum/"
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
        style={{
          width: "95%",
          background: "linear-gradient(to right, #7B489A, #3F80B5)",
        }}
      >
        <div className="p-4 flex items-center justify-center">
          {icon}
          <span className="ml-2 text-xl">{name}</span>
        </div>
      </div>
    </a>
  );
};

function Footer() {
  return (
    <footer>
      <div
        style={{
          marginTop: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>
          built by acon 2024 <br /> check out the{" "}
          <a
            href="https://github.com/acornitum/personalsite"
            className="text-cmykBlue"
            target="_blank"
            rel="noopener noreferrer"
          >
            github repo
          </a>
          !
        </p>
      </div>
    </footer>
  );
}

function About() {
  return (
    <div className="flex flex-col justify-cente items-center">
      <div
        style={{
          background: "#6BF6FF80",
          width: "300px",
        }}
      >
        <div
          className="w-[296px] h-[20px] flex absolute flex-col items-center justify-center m-[2px]"
          style={{ background: "blue" }}
        >
          <div
            style={{
              width: "99%",
              height: "20px",
              background: "blue",
              position: "absolute",
              top: "1px",
              color: "white",
            }}
          >
            <div
              style={{
                marginLeft: "5px",
                fontSize: "15px",
              }}
            >
              about.txt
            </div>{" "}
          </div>
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#6BF6FF80",
              position: "absolute",
              right: "2px",
              top: "2px",
            }}
          ></div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "40px",
            boxSizing: "border-box",
            color: "white",
            lineHeight: "1.2",
          }}
        >
          <p className="pb-4">greetings! i go by acon :3</p>

          <p className="pb-4">
            i'm currently building things @{" "}
            <a href="https://hackclub.com" className="text-cmykYel">
              hack club
            </a>
            . i graduated high school june 2024 and am taking a gap year!
          </p>

          <p className="pb-4">
            right now, i'm located in vermont, usa. but!! i grew up in waterloo,
            ontario, canada.{" "}
            <i>
              <s>rawhh</s>
            </i>
          </p>

          <p className="pb-2 pt-4">some things i do:</p>

          <ul className="">
            <li className="pb-2">
              code! i built this site using react + tailwind. check out my{" "}
              <s>wasteland</s>{" "}
              <a href="https://github.com/acornitum" className="text-cmykYel">
                github
              </a>
              !
            </li>
            <li className="pb-2">
              design + art stuff - i use figma and procreate!
            </li>
            <li className="pb-8">yap - i mean, debate~ (bp best format)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div
      className="relative inline-block text-center w-10 h-10 font-bold title-font2"
      style={{ fontSize: "36px" }}
    >
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
