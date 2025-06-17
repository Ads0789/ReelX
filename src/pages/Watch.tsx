import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import CommentSection from "../components/CommentSection";
import VideoCard from "../components/VideoCard";

// Mock video data
const mockVideo = {
  id: "1",
  title: "Amazing Nature Documentary: Wildlife in 4K",
  description: "Join us on an incredible journey through the world's most beautiful natural landscapes. This documentary showcases stunning wildlife footage captured in ultra-high definition, bringing you closer to nature than ever before.",
  channelName: "Nature Explorer",
  channelAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64",
  subscribers: "2.3M",
  views: "2.3M views",
  uploadTime: "3 days ago",
  likes: 45000,
  dislikes: 1200,
  videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
};

const suggestedVideos = [
  {
    id: "2",
    title: "Learn React in 30 Minutes - Complete Tutorial",
    thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=320&h=180",
    channelName: "Code Academy",
    channelAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=32&h=32",
    views: "1.8M views",
    uploadTime: "1 week ago",
    duration: "30:15"
  },
  {
    id: "3",
    title: "Epic Mountain Climbing Adventure",
    thumbnail: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=320&h=180",
    channelName: "Adventure Seekers",
    channelAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32",
    views: "956K views",
    uploadTime: "5 days ago",
    duration: "22:33"
  }
];

function Watch() {
  const { videoId } = useParams();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Video Section */}
        <div className="lg:col-span-2">
          <VideoPlayer videoUrl={mockVideo.videoUrl} />
          
          {/* Video Info */}
          <div className="mt-4">
            <h1 className="text-xl font-bold text-gray-900 mb-2">{mockVideo.title}</h1>
            
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">
                {mockVideo.views} • {mockVideo.uploadTime}
              </div>
              
              {/* Like/Dislike Buttons */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{(mockVideo.likes / 1000).toFixed(0)}K</span>
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <svg className="h-5 w-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <span>{(mockVideo.dislikes / 1000).toFixed(1)}K</span>
                </button>
                
                <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  Share
                </button>
              </div>
            </div>
            
            {/* Channel Info */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={mockVideo.channelAvatar}
                  alt={mockVideo.channelName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{mockVideo.channelName}</h3>
                  <p className="text-sm text-gray-500">{mockVideo.subscribers} subscribers</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
            
            {/* Description */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-gray-700">{mockVideo.description}</p>
            </div>
          </div>
          
          {/* Comments Section */}
          <CommentSection videoId={videoId || ""} />
        </div>
        
        {/* Suggested Videos Sidebar */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Up Next</h3>
          {suggestedVideos.map((video) => (
            <div key={video.id} className="flex space-x-3">
              <div className="flex-shrink-0">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-40 h-24 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                  {video.title}
                </h4>
                <p className="text-xs text-gray-500">{video.channelName}</p>
                <p className="text-xs text-gray-500">{video.views} • {video.uploadTime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watch;