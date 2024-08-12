import React from "react";

const AnimatedLoader = () => {
  return (
    <>
      <div className="h-screen m-0 grid place-items-center bg-black overflow-hidden">
        <div className="relative flex justify-center items-center w-full">
          <div className="absolute w-[200px] h-[200px]">
            <div className="absolute inset-0">
              <div className="absolute w-[20px] h-[20px] bg-[#0f0] shadow-[0_0_0_8px_rgba(0,255,0,0.2),0_0_0_15px_rgba(0,255,0,0.1)] animate-[animateSquare_4s_linear_infinite]"></div>
              <span
                style={{ "--i": 0 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 1 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 2 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 3 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
            </div>
          </div>

          <div className="absolute w-[200px] h-[200px] transform -translate-x-1/4 -translate-y-1/4 rotate-x-180 filter hue-rotate-[60deg]">
            <div className="absolute inset-0">
              <div className="absolute w-[20px] h-[20px] bg-[#0f0] shadow-[0_0_0_8px_rgba(0,255,0,0.2),0_0_0_15px_rgba(0,255,0,0.1)] animate-[animateSquare_4s_linear_infinite]"></div>
              <span
                style={{ "--i": 0 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 1 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 2 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 3 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
            </div>
          </div>

          <div className="absolute w-[200px] h-[200px] transform translate-x-1/4 translate-y-1/4 rotate-180 filter hue-rotate-[180deg]">
            <div className="absolute inset-0">
              <div className="absolute w-[20px] h-[20px] bg-[#0f0] shadow-[0_0_0_8px_rgba(0,255,0,0.2),0_0_0_15px_rgba(0,255,0,0.1)] animate-[animateSquare_4s_linear_infinite]"></div>
              <span
                style={{ "--i": 0 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 1 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 2 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
              <span
                style={{ "--i": 3 }}
                className="absolute inset-2 transform rotate-[calc(90deg*var(--i))] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-[4px] bg-[#0f0] animate-[animate_4s_linear_infinite]"></span>
              </span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes animateSquare {
            0% {
              transform: translate(2px, 2px);
            }
            25% {
              transform: translate(178px, 2px);
            }
            50% {
              transform: translate(178px, 178px);
            }
            75% {
              transform: translate(2px, 178px);
            }
            100% {
              transform: translate(2px, 2px);
            }
          }

          @keyframes animate {
            0% {
              transform: translateX(-100%);
            }
            50%,
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default AnimatedLoader;
