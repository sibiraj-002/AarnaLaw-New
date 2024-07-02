import Image from "next/image"

const OurLegacy = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse mb-14 md:flex-row">
      <div className="w-full md:w-1/2 p-8">
        <div className="flex flex-col justify-between items-start h-full w-full md:w-5/6">
          <h1 className="text-custom-blue text-2xl font-bold">
            Our Legacy
          </h1>
          <h2 className="text-custom-red text-4xl font-semibold mt-4 md:mt-0">
            Founded on over nine decades of commitment and service
          </h2>
          <p className="text-custom-gray mt-4 md:mt-0">
            Across varied domains, industries and international borders, our
            legal services and solutions are tailor-made to represent our
            clients’ best interest without compromising on our principles of
            natural law, justice and compassion.
          </p>
          <button className="border border-custom-blue px-4 py-2 text-custom-blue hover:bg-custom-blue hover:text-white mt-4 md:mt-0">
            Our Firm
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/home-page/Our_legacy.jpg"
          width={683}
          height={456}
          className="w-full"
          alt=""
        />
      </div>
    </div>
  )
}

export default OurLegacy
