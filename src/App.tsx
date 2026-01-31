import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TopBar from './components/layout/TopBar';
import BottomNav from './components/layout/BottomNav';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/screens/Dashboard';
import Colleges from './components/screens/Colleges';
import Courses from './components/screens/Courses';
import Chat from './components/screens/Chat';
import Profile from './components/screens/Profile';
import { SCREEN_TITLES } from './constants';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [unreadCount] = useState(3);

  const renderScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard key="dashboard" onNavigate={setActiveTab} />;
      case 'colleges':
        return <Colleges key="colleges" onSelectCollege={(id) => console.log('Select college', id)} />;
      case 'courses':
        return <Courses key="courses" onSelectCourse={(id) => console.log('Select course', id)} />;
      case 'chat':
        return <Chat key="chat" onSelectChat={(id) => console.log('Select chat', id)} />;
      case 'profile':
        return <Profile key="profile" />;
      case 'notifications':
        return (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
          >
            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/10 mb-6">
              <i className="fas fa-bell text-4xl"></i>
            </div>
            <h3 className="text-2xl font-black text-slate-800">Stay Tuned!</h3>
            <p className="text-slate-500 mt-2 max-w-xs mx-auto">You're all caught up for now. We'll notify you when interesting things happen.</p>
            <button
              onClick={() => setActiveTab('dashboard')}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all hover:-translate-y-1"
            >
              Back to Home
            </button>
          </motion.div>
        );
      default:
        return <Dashboard key="dashboard" onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex bg-[#f8fafc] min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} unreadCount={unreadCount} />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-h-screen lg:ml-72 transition-all duration-300">
        {/* Mobile TopBar - Hidden on LG */}
        <div className="lg:hidden">
          <TopBar
            title={SCREEN_TITLES[activeTab] || 'College Connect'}
            onSearchClick={() => console.log('Search clicked')}
            onNotificationsClick={() => setActiveTab('notifications')}
            unreadCount={unreadCount}
          />
        </div>

        {/* Desktop Header - Only on LG */}
        <header className="hidden lg:flex items-center justify-between px-10 py-6 sticky top-0 z-40 bg-[#f8fafc]/80 backdrop-blur-md">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">{SCREEN_TITLES[activeTab]}</h1>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search anything..."
                className="pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-2xl w-64 focus:w-80 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
            <button className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-500 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
              <i className="fas fa-cog" />
            </button>
          </div>
        </header>

        <main className="flex-grow px-4 lg:px-10 pt-4 pb-32 lg:pb-10 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </main>

        {/* Mobile Bottom Nav - Hidden on LG */}
        <div className="lg:hidden">
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
}

export default App;
