"use client"

import CountUp from "react-countup"

const NumbersSpeakItem = ({ numberDetails }) => {
  const { rupees, title } = numberDetails

  const parseNumber = (str) => {
    const num = parseFloat(str.replace(/[^0-9.]/g, ""))
    return isNaN(num) ? 0 : num
  }

  const getSuffix = () => {
    let suffix = ""
    if (rupees.includes("Bn")) {
      suffix += "Bn "
    }
    if (rupees.includes("$")) {
      suffix += "$ "
    }
    if (rupees.includes("K")) {
      suffix += "K"
    }
    if (rupees.includes("+")) {
      suffix += "+"
    }
    return suffix.trim()
  }

  return (
    <li className="py-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl text-custom-blue px">
          <div className="inline-block w-96 text-center">
            <CountUp
              end={parseNumber(rupees)}
              duration={2}
              suffix={` ${getSuffix()}`}
            />
          </div>
        </h1>
        <p className="text-custom-gray text-xl text-center">{title}</p>
      </div>
    </li>
  )
}

export default NumbersSpeakItem
