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
    if (rupees.includes("+")) {
      suffix = "+"
    }
    if (rupees.includes("K")) {
      suffix = "K"
    }
    if (rupees.includes("K+")) {
      suffix = "K+"
    }
    return suffix
  }

  return (
    <li className="">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl text-custom-blue font-semibold">
          <CountUp
            end={parseNumber(rupees)}
            duration={2.5}
            prefix={rupees.includes("$") ? "$ " : ""}
            suffix={getSuffix()}
          />
        </h1>
        <span className="text-custom-red font-semibold">
          - - - - - - - - - - - - - - -
        </span>
        <p className="text-custom-gray text-xl text-center">{title}</p>
      </div>
    </li>
  )
}

export default NumbersSpeakItem
