import VideoCard from "../components/VideoCard";

// Mock data for demonstration
const mockVideos = [
  {
    id: "1",
    title: "Amazing Nature Documentary: Wildlife in 4K",
    thumbnail: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=640&h=360",
    channelName: "Nature Explorer",
    channelAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64",
    views: "2.3M views",
    uploadTime: "3 days ago",
    duration: "15:42"
  },
  {
    id: "2",
    title: "Learn React in 30 Minutes - Complete Tutorial",
    thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=640&h=360",
    channelName: "Code Academy",
    channelAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64",
    views: "1.8M views",
    uploadTime: "1 week ago",
    duration: "30:15"
  },
  {
    id: "3",
    title: "Epic Mountain Climbing Adventure",
    thumbnail: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=640&h=360",
    channelName: "Adventure Seekers",
    channelAvatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=64&h=64",
    views: "956K views",
    uploadTime: "5 days ago",
    duration: "22:33"
  },
  {
    id: "4",
    title: "Delicious Pasta Recipe - Italian Cooking",
    thumbnail: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=640&h=360",
    channelName: "Chef's Kitchen",
    channelAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64",
    views: "743K views",
    uploadTime: "2 days ago",
    duration: "12:18"
  },
  {
    id: "5",
    title: "Space Exploration: Journey to Mars",
    thumbnail: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=640&h=360",
    channelName: "Space Channel",
    channelAvatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=64&h=64",
    views: "3.2M views",
    uploadTime: "1 day ago",
    duration: "45:22"
  },
  {
    id: "6",
    title: "Modern Web Design Trends 2024",
    thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=640&h=360",
    channelName: "Design Pro",
    channelAvatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=64&h=64",
    views: "1.1M views",
    uploadTime: "4 days ago",
    duration: "18:45"
  }
];

function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome to ReelX</h1>
          <p className="text-lg opacity-90">Discover amazing videos from creators around the world</p>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {["All", "Music", "Gaming", "Sports", "News", "Education", "Entertainment", "Technology"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                category === "All"
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Videos */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>

      {/* Recommended Videos */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVideos.slice().reverse().map((video) => (
            <VideoCard key={`rec-${video.id}`} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;