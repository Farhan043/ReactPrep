import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, Video, MapPin, ExternalLink, Clock, User } from 'lucide-react';

// Sample event data
const events = [
  {
    id: 1,
    title: "React Performance Workshop",
    date: "2024-04-15T18:00:00",
    type: "Workshop",
    format: "Online",
    speaker: "Alex Morgan",
    speakerRole: "Senior React Developer at Meta",
    attendees: 156,
    image: "/images/events/performance-workshop.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Building Accessible React Applications",
    date: "2024-04-22T17:30:00",
    type: "Webinar",
    format: "Online",
    speaker: "Jessica Chen",
    speakerRole: "Accessibility Engineer at Google",
    attendees: 98,
    image: "/images/events/accessibility-webinar.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Local React Developer Meetup",
    date: "2024-04-30T19:00:00",
    type: "Meetup",
    format: "In-Person",
    location: "Tech Hub Downtown",
    attendees: 42,
    image: "/images/events/local-meetup.jpg",
    link: "#"
  }
];

// Community features data
const communityFeatures = [
  {
    title: "Discussion Forums",
    description: "Join topic-based discussions with React developers worldwide",
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
    count: "12K+ members"
  },
  {
    title: "Live Coding Sessions",
    description: "Weekly pair programming and code reviews with experts",
    icon: <Video className="w-6 h-6 text-green-400" />,
    count: "3 sessions weekly"
  },
  {
    title: "Local Chapters",
    description: "Connect with React developers in your city",
    icon: <MapPin className="w-6 h-6 text-red-400" />,
    count: "30+ cities worldwide"
  }
];

// Format date
const formatEventDate = (dateString) => {
  const date = new Date(dateString);
  return {
    day: date.toLocaleDateString('en-US', { day: 'numeric' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
    full: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
  };
};

// Event Card Component
const EventCard = ({ event }) => {
  const formattedDate = formatEventDate(event.date);

  return (
    <div className="bg-[#0f0f1a] border border-purple-900/30 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(128,0,255,0.3)] transition-all duration-300 h-full flex flex-col">
      {/* Event Image (placeholder) */}
      <div className="h-40 bg-gradient-to-r from-purple-900/50 to-blue-900/50 relative">
        {/* Date badge */}
        <div className="absolute top-3 left-3 bg-purple-600 text-white p-2 rounded-lg text-center min-w-[60px]">
          <div className="text-2xl font-bold leading-tight">{formattedDate.day}</div>
          <div className="text-xs uppercase">{formattedDate.month}</div>
        </div>
        
        {/* Event type badge */}
        <div className="absolute top-3 right-3 bg-[#1a1a2e] text-white px-3 py-1 rounded-full text-xs font-medium">
          {event.type}
        </div>
      </div>
      
      {/* Event Details */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        
        {/* Event metadata */}
        <div className="space-y-2 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-purple-400" />
            <span>{formattedDate.time}</span>
          </div>
          
          <div className="flex items-center gap-2">
            {event.format === "Online" ? (
              <Video size={16} className="text-green-400" />
            ) : (
              <MapPin size={16} className="text-red-400" />
            )}
            <span>{event.format} {event.location && `• ${event.location}`}</span>
          </div>
          
          {event.speaker && (
            <div className="flex items-center gap-2">
              <User size={16} className="text-blue-400" />
              <span>{event.speaker} • {event.speakerRole}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <Users size={16} className="text-amber-400" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <a 
          href={event.link} 
          className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
        >
          {event.format === "Online" ? "Join Online" : "RSVP Now"}
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default function CommunityEvents() {
  const [activeTab, setActiveTab] = useState('events');
  
  return (
    <div className="relative bg-[#0a0a1a] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,0,150,0.3),_transparent_70%)] blur-[160px] animate-float3" />
        <div className="absolute bottom-0 left-[25%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,255,150,0.25),_transparent_70%)] blur-[160px] animate-float4" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Community & Events</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Connect, learn, and grow with fellow React developers through our community and events
        </p>
      </div>
      
      {/* Tabs */}
      <div className="relative z-10 flex justify-center mb-8">
        <div className="inline-flex bg-[#0f0f1a] rounded-full p-1">
          <button 
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'events' 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Upcoming Events
          </button>
          <button 
            onClick={() => setActiveTab('community')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'community' 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Community Features
          </button>
        </div>
      </div>
      
      {/* Events Tab Content */}
      <div className={`relative z-10 max-w-6xl mx-auto transition-opacity duration-300 ${
        activeTab === 'events' ? 'opacity-100' : 'opacity-0 hidden'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {/* Calendar Link */}
        <div className="text-center mt-8">
          <a 
            href="/events" 
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            <Calendar size={16} />
            View Full Events Calendar
          </a>
        </div>
      </div>
      
      {/* Community Tab Content */}
      <div className={`relative z-10 max-w-6xl mx-auto transition-opacity duration-300 ${
        activeTab === 'community' ? 'opacity-100' : 'opacity-0 hidden'
      }`}>
        {/* Community Hero */}
        <div className="bg-[#0f0f1a] border border-purple-900/30 rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Join Our Global React Community</h3>
              <p className="text-gray-400 mb-6">
                Connect with over 15,000 React developers worldwide. Share knowledge, get help with coding challenges, and build your professional network.
              </p>
              <a 
                href="/community" 
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Join Community
                <Users size={16} />
              </a>
            </div>
            
            {/* Community stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#1a1a2e] p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-1">15K+</div>
                <div className="text-xs text-gray-400">Members</div>
              </div>
              <div className="bg-[#1a1a2e] p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-1">8K+</div>
                <div className="text-xs text-gray-400">Forum Posts</div>
              </div>
              <div className="bg-[#1a1a2e] p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-1">200+</div>
                <div className="text-xs text-gray-400">Live Events</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0f0f1a] border border-purple-900/30 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(128,0,255,0.2)] transition-all duration-300"
            >
              <div className="p-3 bg-[#1a1a2e] rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
              <div className="text-xs font-medium text-purple-400">{feature.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 