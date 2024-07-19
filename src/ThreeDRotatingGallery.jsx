import React from "react";

const ThreeDRotatingGallery = () => {
  return (
    <>
      <div className="gallery relative w-[300px] h-[168px]">
        {[
          "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_640.jpg",
          "https://cdn.pixabay.com/photo/2022/09/04/08/14/book-7431063_640.jpg",
          "https://cdn.pixabay.com/photo/2014/10/21/12/28/money-496229_640.jpg",
          "https://cdn.pixabay.com/photo/2014/11/04/20/21/dollars-517113_640.jpg",
          "https://cdn.pixabay.com/photo/2023/03/13/16/10/banknotes-7850299_640.jpg",
          "https://cdn.pixabay.com/photo/2014/12/14/16/05/arm-wrestling-567950_640.jpg",
          "https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330_1280.jpg",
          "https://cdn.pixabay.com/photo/2023/03/28/01/10/money-7881948_640.jpg",
        ].map((src, index) => (
          <span
            key={index}
            className="absolute w-full h-full"
            style={{
              "--i": index + 1,
              transform: `rotateY(calc(var(--i) * 45deg)) translateZ(380px)`,
            }}
          >
            <img src={src} className="absolute w-full h-full object-cover" />
          </span>
        ))}
      </div>
      <style jsx>{`
        .gallery {
          transform-style: preserve-3d;
          animation: rotate 35s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: perspective(1200px) rotateY(0deg);
          }
          to {
            transform: perspective(1200px) rotateY(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default ThreeDRotatingGallery;
