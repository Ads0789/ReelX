import { Link } from "react-router-dom";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    channelName: string;
    channelAvatar: string;
    views: string;
    uploadTime: string;
    duration: string;
  };
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link to={`/watch/${video.id}`}>
        <div className="relative mb-3">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full aspect-video object-cover rounded-lg group-hover:rounded-none transition-all duration-200"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
            {video.duration}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <img
            src={video.channelAvatar}
            alt={video.channelName}
            className="w-9 h-9 rounded-full flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
              {video.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{video.channelName}</p>
            <p className="text-sm text-gray-500">
              {video.views} • {video.uploadTime}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;