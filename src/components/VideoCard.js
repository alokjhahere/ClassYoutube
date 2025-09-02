const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div className="m-2 p-3 w-72 shadow-lg bg-white rounded-xl hover:shadow-xl transition duration-200 ">
      {/* Ad badge will overlap here when wrapped */}
      <img
        className="rounded-lg w-full object-cover"
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <ul className="mt-2 space-y-1">
        <li className="font-semibold text-sm line-clamp-2">{snippet.title}</li>
        <li className="text-gray-600 text-sm">{snippet.channelTitle}</li>
        <li className="text-gray-500 text-xs">
          {Math.floor(statistics.viewCount / 1000)}K views
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = (VideoCard) => {
  return (props) => {
    return (
      <div className="absolute">
        {/* Overlapping Badge */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-md shadow-md z-10">
          Ad
        </div>
        <VideoCard {...props} />
      </div>
    );
  };
};

export default VideoCard;
