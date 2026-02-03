"use client";
import { useState, useRef } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep I'm dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const moveNoButton = () => {
    const btn = noButtonRef.current;
    if (!btn) return;

    // Only becomes absolute AFTER hover so it starts centered
    btn.style.position = "absolute";

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          {/* YES PAGE GIF */}
          <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJiNm52aW4xMnppaWExMjBxbWY0OWNnNXlvemhxMHduMTcxNDAxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/e5xL4bU0ETgLm/giphy.gif" />
          <div className="my-4 text-4xl font-bold">
            YAYYYYYYY! You Had no Choice pookie bear (;
          </div>
        </>
      ) : (
        <>
          {/* MAIN PAGE GIF (POMPOMPURIN) */}
          <img
            className="h-[200px]"
            src="https://media.tenor.com/-juTtqvaH5sAAAAi/pompompurin.gif"
          />

          <h1 className="my-4 text-4xl text-center">
            Will you be my Valentine, Jessica? (There is only one correct answer Litrally.)
          </h1>

          {/* CENTERED BUTTONS */}
          <div className="relative w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4">

              {/* YES BUTTON WITH SPARKLES */}
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-pink-300 opacity-40"></div>
                <button
                  className="relative rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 shadow-lg shadow-pink-300"
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
              </div>

              {/* NO BUTTON */}
              <button
                ref={noButtonRef}
                onMouseEnter={moveNoButton}
                onClick={handleNoClick}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all duration-200"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>

            </div>
          </div>
        </>
      )}
    </div>
  );
}
