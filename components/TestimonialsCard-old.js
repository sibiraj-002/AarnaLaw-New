import Image from "next/image"

const TestimonialsCard = ({ testimonialDetails }) => {
  return (
    <div className="flex flex-col gap-6 bg-white shadow-lg my-3 p-3 w-auto md:w-[470px]">
      <div className="flex justify-start gap-4">
        <Image
          src={testimonialDetails.imageUrl}
          width={60}
          height={60}
          className="rounded-full"
          alt=""
        />

        <div>
          <h3 className="text-custom-blue font-semibold text-xl md:text-2xl">
            {testimonialDetails.name}
          </h3>
          <p className="text-custom-gray text-sm md:text-lg">
            {testimonialDetails.post}
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-xs text-custom-gray">{testimonialDetails.desc}</p>
      </div>
    </div>
  )
}

export default TestimonialsCard
