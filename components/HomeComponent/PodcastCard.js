import { pause, play } from "@utils/Icon";
import { useState, useRef } from "react";

const PodcastCard = ({ podcastDetails }) => {
  const { formattedDate, imageUrl, title, player_link } = podcastDetails;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <li className="w-full md:w-[585px] h-auto shadow-lg group transition-colors duration-300 hover:bg-custom-blue hover:text-white">
      <div className="flex flex-col md:flex-row items-center h-full">
        <img
          src={imageUrl}
          width={201}
          height={150}
          alt=""
          className="md:w-48 md:h-auto"
        />
        <div className="p-4 flex flex-col justify-between flex-1">
          <h1
            className="text-custom-blue text-center md:text-start text-xl md:text-2xl font-semibold mb-4 md:mb-0 group-hover:text-white transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-custom-gray mb-4 md:mb-0 group-hover:text-white transition-colors duration-300">
              Posted On {formattedDate}
            </p>
            <button
              className="bg-custom-blue text-white p-3 rounded-full hover:bg-custom-red md:ml-4"
              onClick={handlePlayPause}
            >
              {isPlaying ? pause : play}
            </button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={player_link} className="hidden md:block" />
    </li>
  );
};

export default PodcastCard;
