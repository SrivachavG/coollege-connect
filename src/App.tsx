import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TopBar from './components/layout/TopBar';
import BottomNav from './components/layout/BottomNav';
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8 text-center"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bell text-3xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-800">No new notifications</h3>
            <p className="text-sm text-gray-500 mt-1">We'll let you know when something happens.</p>
            <button
              onClick={() => setActiveTab('dashboard')}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all"
            >
              Back Home
            </button>
          </motion.div>
        );
      default:
        return <Dashboard key="dashboard" onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f2f5] max-w-md mx-auto shadow-2xl overflow-hidden min-h-screen relative border-x border-gray-100">
      <TopBar
        title={SCREEN_TITLES[activeTab] || 'College Connect'}
        onSearchClick={() => console.log('Search clicked')}
        onNotificationsClick={() => setActiveTab('notifications')}
        unreadCount={unreadCount}
      />

      <main className="flex-grow overflow-x-hidden overflow-y-auto px-4 pt-4 pb-32 scroll-smooth">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
