import VideoCard from "../components/VideoCard";

function Home() {
  // Sample video data
  const videos = [
    {
      id: "1",
      title: "Building a Modern React App with TypeScript and Tailwind CSS",
      channel: "Tech Tutorials",
      views: "125K views",
      timestamp: "2 days ago",
      duration: "15:42",
      thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "T",
    },
    {
      id: "2",
      title: "Amazing Nature Documentary: Wildlife in 4K",
      channel: "Nature Hub",
      views: "2.3M views",
      timestamp: "1 week ago",
      duration: "45:18",
      thumbnail: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "N",
    },
    {
      id: "3",
      title: "Top 10 JavaScript Tips Every Developer Should Know",
      channel: "Code Masters",
      views: "89K views",
      timestamp: "3 days ago",
      duration: "12:35",
      thumbnail: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "C",
    },
    {
      id: "4",
      title: "Relaxing Piano Music for Study and Work",
      channel: "Music Zone",
      views: "456K views",
      timestamp: "5 days ago",
      duration: "2:15:30",
      thumbnail: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "M",
    },
    {
      id: "5",
      title: "Epic Gaming Moments Compilation 2024",
      channel: "Gaming Central",
      views: "1.8M views",
      timestamp: "4 days ago",
      duration: "18:22",
      thumbnail: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "G",
    },
    {
      id: "6",
      title: "Healthy Breakfast Recipes in 10 Minutes",
      channel: "Cooking Corner",
      views: "234K views",
      timestamp: "1 day ago",
      duration: "8:45",
      thumbnail: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "C",
    },
    {
      id: "7",
      title: "Space Exploration: Journey to Mars",
      channel: "Science Today",
      views: "3.2M views",
      timestamp: "2 weeks ago",
      duration: "32:15",
      thumbnail: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "S",
    },
    {
      id: "8",
      title: "Fashion Trends 2024: What's Hot This Season",
      channel: "Style Guide",
      views: "167K views",
      timestamp: "6 days ago",
      duration: "11:28",
      thumbnail: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "S",
    },
    {
      id: "9",
      title: "DIY Home Improvement Projects on a Budget",
      channel: "Home & Garden",
      views: "445K views",
      timestamp: "1 week ago",
      duration: "25:33",
      thumbnail: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "H",
    },
    {
      id: "10",
      title: "Cryptocurrency Explained: A Beginner's Guide",
      channel: "Finance Pro",
      views: "678K views",
      timestamp: "3 days ago",
      duration: "19:47",
      thumbnail: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "F",
    },
    {
      id: "11",
      title: "Meditation and Mindfulness for Beginners",
      channel: "Wellness Way",
      views: "298K views",
      timestamp: "5 days ago",
      duration: "22:10",
      thumbnail: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "W",
    },
    {
      id: "12",
      title: "Travel Vlog: Exploring Tokyo's Hidden Gems",
      channel: "Adventure Seekers",
      views: "892K views",
      timestamp: "1 week ago",
      duration: "28:55",
      thumbnail: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800",
      channelAvatar: "A",
    },
  ];

  const categories = [
    "All", "Music", "Gaming", "News", "Sports", "Entertainment", "Education", 
    "Science & Technology", "Travel", "Cooking", "Fashion", "DIY"
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Category Pills */}
      <div className="sticky top-16 bg-white border-b border-gray-200 px-6 py-3 z-40">
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;