import { Link } from "react-router-dom";

interface VideoCardProps {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail: string;
  channelAvatar: string;
}

function VideoCard({
  id,
  title,
  channel,
  views,
  timestamp,
  duration,
  thumbnail,
  channelAvatar,
}: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link to={`/watch?v=${id}`}>
        {/* Thumbnail */}
        <div className="relative mb-3 rounded-xl overflow-hidden bg-gray-200">
          <img
            src={thumbnail}
            alt={title}
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
            {duration}
          </div>
        </div>

        {/* Video Info */}
        <div className="flex space-x-3">
          <Link
            to={`/channel/${channel.toLowerCase().replace(" ", "-")}`}
            className="flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              {channelAvatar}
            </div>
          </Link>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-5 mb-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <Link
              to={`/channel/${channel.toLowerCase().replace(" ", "-")}`}
              className="text-gray-600 hover:text-gray-900 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {channel}
            </Link>
            <div className="text-gray-600 text-sm">
              {views} • {timestamp}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;