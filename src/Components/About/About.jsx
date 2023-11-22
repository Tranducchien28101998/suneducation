/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

function About({ targetRefAbout }) {
  return (
    <div ref={targetRefAbout}>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Nền tảng học online Marathon Education cải thiện và nâng cao học
              lực của bạn với nhiều loại hình giảng dạy kết hợp với công nghệ
              thu thập và xử lý dữ liệu theo từng buổi học.Start up giáo dục đầu
              tiên tại Đông Nam Á được rót vốn từ quỹ đầu tư đồng sáng lập
              Microsoft. Top 10 doanh nghiệp nhận giải "Thương hiệu dẫn đầu Việt
              Nam 2023".
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://cdn.marathon.edu.vn/uploads/SDpxrxgfVhsQQFQR4TH5opCO0XeF5QInsAQrnSBW.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              “Con vốn là một đứa trẻ sống khá khép kín nhưng khi học với thầy
              cô Marathon, chị thấy con chia sẻ nhiều hơn và rất hào hứng trong
              mỗi giờ học. Đặc biệt thầy Sỹ Đạt đã truyền cho con cảm hứng rất
              lớn đối với môn toán và để lại ấn tượng trong con.”
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-hai-anh.png&w=1920&q=75"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-hai-anh.png&w=1920&q=75"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Nghiêm Hải Anh
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-thien.png&w=1920&q=75"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-thien.png&w=1920&q=75"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Nguyễn Thiện
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-huynh-nhu.png&w=1920&q=75"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-huynh-nhu.png&w=1920&q=75"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Nguyễn Thị Như
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-quynh.png&w=1920&q=75"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://marathon.edu.vn/_next/image?url=%2Fimages%2Ffeedback-quynh.png&w=1920&q=75"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Đặng Thị Quỳnh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
