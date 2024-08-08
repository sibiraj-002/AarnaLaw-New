import Image from "next/image";

const TestimonialsCard = ({ testimonialDetails }) => {
  // console.log(testimonialDetails);

  return (
    <div className="flex flex-col gap-6 bg-white shadow-md my-3 p-3 w-auto md:w-[470px] ">
      <div className="flex justify-start gap-4">
        <Image
          // src={testimonialDetails.imageUrl}
          src="/home-page/dummy.png"
          width={60}
          height={60}
          className="rounded-full"
          alt=""
        />

        <div>
          <h3 className="text-custom-blue font-semibold text-xl md:text-2xl">
            {/* {testimonialDetails.name} */}
            Vinay Bhagwan
          </h3>
          <p className="text-custom-gray text-sm md:text-lg">
            {/* {testimonialDetails.post} */}
            Daimler Trucks India
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-xs text-custom-gray">
          {/* {testimonialDetails.desc} */}I wholeheartedly recommend Aarna Law
          and its outstanding team to anyone seeking top-notch legal
          representation".
        </p>
      </div>

      <a href="https://staging.aarnalaw.com/contact/" className="text-custom-blue">
        Read more
      </a>
    </div>
  );
};

export default TestimonialsCard;
