import { Rnd } from "react-rnd";
import React, { useState } from "react";

export default function Desktop() {
  return (
    <div>
      <Stickers />
      <div className="mt-28">
        <p
          className="absolute left-[38vw] text-4xl"
          style={{
            transform: "rotate(-6deg)",
          }}
        >
          hi! i'm
        </p>
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-10">
        <Title />
        <div className="absolute @apply top-[92px]">
          <Status />
        </div>
        <p
          className="pt-10 ml-5"
          style={{
            transform: "rotate(2deg)",
          }}
        >
          welcome to the corner of the internet i’m renting for $10.37 this year
          /ᐠ｡ꞈ｡ᐟ\
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-64 m-6">
          <About />
        </div>
        {/*<img src="https://cloud-f0tj1z2sp-hack-club-bot.vercel.app/0image.png" alt="Description" className="absolute w-[300px] h-auto top-[500px] right-[200px]" /> */}
      </div>

      <div className="flex flex-col justify-center items-center pt-16 pb-10">
        <div className="flex flex-col items-center pr-60">
          <Textbox
            width="350"
            height="120"
            name="tip.exe"
            text="also: i give stickers to those who chat with me in person! please say
              hi, i may be awkward but i don't bite :3"
          />
        </div>
      </div>

      <div className="flex flex-col items-center pt-60 pb-10">
        <div className="flex flex-col items-center">
          <Textbox
            width="300"
            height="80"
            name="midnight_thoughts.exe"
            text="this site is currently a wip!"
          />
        </div>
      </div>

      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}

function Status() {
  const textOptions = [
    "i hope this site isn't broken",
    "probably writing fanfiction",
    "squashing some bugs",
    "will respond in 1-3 business days",
    "captured in 4k!",
    "... mrow? ... ... :3",
    "hover over my name for a cool effect!",
  ];

  const [currentText, setCurrentText] = useState(textOptions[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    setCurrentText(textOptions[randomIndex]);
  };

  return (
    <Rnd
      style={{
        background: "#6BF6FF80",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      default={{
        x: 0,
        y: 0,
        width: 300,
        height: 80,
      }}
      enableResizing={false}
      onClick={handleClick}
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
          click_me.txt
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
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "14px",
          boxSizing: "border-box",
          color: "white",
        }}
      >
        {currentText}
      </div>
    </Rnd>
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

function About() {
  return (
    <Rnd
      style={{
        background: "#6BF6FF80",
        cursor: "pointer",
      }}
      default={{
        x: 0,
        y: 0,
        width: 400,
        height: 530,
      }}
      enableResizing={false}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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

        <ul className="pl-2">
          <li className="pb-2">
            code! i built this site using react + tailwind. check out my{" "}
            <s>wasteland</s>{" "}
            <a href="https://github.com/acornitum" className="text-cmykYel">
              github
            </a>
            !
          </li>
          <li className="pb-2">
            design + art stuff - i've plastered this site with stuff i've made
            :) ily figma + procreate
          </li>
          <li className="pb-2">yap - i mean, debate~ (bp best format)</li>
          <li className="pb-2">
            play magic the gathering! if you see me in person, feel free to ask
            for a game.
          </li>
        </ul>

        <p className="pt-8 pb-4 text-sm italic">
          by the way, you can interact with these boxes! drag 'em around, move
          'em offscreen, and prolly more.
        </p>
      </div>
    </Rnd>
  );
}

function Footer() {
  return (
    <footer>
      <div
        style={{
          padding: "40px",
          backgroundColor: "#222",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>
          built by acon 2024 // check out the{" "}
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
        <p className="text-gray-400">
          <i>
            happy. undisturbed. in my <s>lane</s> digital rundown site.
          </i>
        </p>
      </div>
    </footer>
  );
}

const Textbox = ({ width, height, name, text }) => {
  return (
    <Rnd
      style={{
        background: "#6BF6FF80",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "10px",
        height: `$(height)px`,
      }}
      default={{
        x: 0,
        y: 0,
        width: width,
        height: height,
      }}
      enableResizing={false}
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
          {name}
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
          justifyContent: "center",
          alignItems: "center",
          padding: "14px",
          paddingTop: "40px",
          boxSizing: "border-box",
          color: "white",
          lineHeight: "1.2",
        }}
      >
        {text}
      </div>
    </Rnd>
  );
};

function Stickers() {
  return (
    <div className="select-none opacity-50 sticker">
      <img
      src="https://cloud-f0tj1z2sp-hack-club-bot.vercel.app/0image.png"
      alt="sleep deprived anime sticker"
      className="absolute top-52 left-72 transform -translate-x-1/2 mx-auto w-72 h-auto -rotate-12"
      draggable="false"
    />
    <img
      src="https://cloud-ait4cefi2-hack-club-bot.vercel.app/0aconanime.png"
      alt="aconanimesticker"
      className="absolute top-96 right-12 transform -translate-x-1/2 mx-auto w-72 h-auto rotate-12"
      draggable="false"
    />
    </div>
    
  );
}
