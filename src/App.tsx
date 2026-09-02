import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionId } from './types';
import { NAV_ITEMS_MAIN, NAV_ITEMS_SECTIONS } from './data/caseStudyData';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { PlayerBar } from './components/PlayerBar';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Toast, ToastMessage } from './components/Toast';

import { HomeView } from './components/views/HomeView';
import { OverviewView } from './components/views/OverviewView';
import { ProblemView } from './components/views/ProblemView';
import { EmpathizeView } from './components/views/EmpathizeView';
import { DefineView } from './components/views/DefineView';
import { IdeateView } from './components/views/IdeateView';
import { PrototypeView } from './components/views/PrototypeView';
import { TestIterateView } from './components/views/TestIterateView';
import { ImpactView } from './components/views/ImpactView';
import { AnalysisView } from './components/views/AnalysisView';
import { LearningsView } from './components/views/LearningsView';
import { TeamView } from './components/views/TeamView';
import { ReferencesView } from './components/views/ReferencesView';
import { ToolsView } from './components/views/ToolsView';
import { SearchView } from './components/views/SearchView';
import { LibraryView } from './components/views/LibraryView';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [history, setHistory] = useState<SectionId[]>(['home']);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState<boolean>(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = useCallback((text: string, type: 'success' | 'info' | 'like' | 'music' = 'info') => {
    setToast({
      id: Date.now().toString(),
      text,
      type,
    });
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  // Keyboard shortcut (Ctrl+B / Cmd+B) to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsSidebarCollapsed((prev) => {
          const next = !prev;
          showToast(next ? 'Sidebar collapsed (Ctrl+B)' : 'Sidebar expanded (Ctrl+B)', 'info');
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle section navigation with history stack
  const handleNavigate = (section: SectionId) => {
    if (section === activeSection) return;
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(section);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setActiveSection(section);
    // Smoothly scroll content to top on view change
    const mainContainer = document.getElementById('main-content-scroll');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (historyIndex > 0) {
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setActiveSection(history[nextIndex]);
    }
  };

  const handleNext = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setActiveSection(history[nextIndex]);
    }
  };

  // Find track title / subtitle for bottom player
  const allNavItems = [...NAV_ITEMS_MAIN, ...NAV_ITEMS_SECTIONS];
  const currentNav = allNavItems.find((item) => item.id === activeSection);
  const trackTitle = currentNav?.trackTitle || 'Designing for Connection';
  const trackSubtitle = currentNav?.trackSubtitle || 'Spotify Case Study';

  // Next / Prev track triggers navigation through case study sections
  const sectionList: SectionId[] = [
    'home',
    'overview',
    'problem',
    'empathize',
    'define',
    'ideate',
    'prototype',
    'test',
    'impact',
    'analysis',
    'learnings',
    'team',
    'references',
  ];

  const handleNextTrack = () => {
    const currentIndex = sectionList.indexOf(activeSection);
    const nextSection = sectionList[(currentIndex + 1) % sectionList.length];
    handleNavigate(nextSection);
    showToast(`Playing track ${currentIndex + 2}: ${NAV_ITEMS_SECTIONS.find(s => s.id === nextSection)?.label || nextSection}`, 'music');
  };

  const handlePrevTrack = () => {
    const currentIndex = sectionList.indexOf(activeSection);
    const prevSection =
      sectionList[(currentIndex - 1 + sectionList.length) % sectionList.length];
    handleNavigate(prevSection);
    showToast(`Playing track: ${NAV_ITEMS_SECTIONS.find(s => s.id === prevSection)?.label || prevSection}`, 'music');
  };

  // Render current view component
  const renderCurrentView = () => {
    switch (activeSection) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} onShowToast={showToast} />;
      case 'search':
        return (
          <SearchView
            onNavigate={handleNavigate}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onShowToast={showToast}
          />
        );
      case 'library':
        return (
          <LibraryView
            onNavigate={handleNavigate}
            onOpenCaseStudy={() => setIsCaseStudyModalOpen(true)}
            onShowToast={showToast}
          />
        );
      case 'overview':
        return <OverviewView onNavigate={handleNavigate} />;
      case 'problem':
        return <ProblemView onNavigate={handleNavigate} />;
      case 'empathize':
        return <EmpathizeView onNavigate={handleNavigate} />;
      case 'define':
        return <DefineView onNavigate={handleNavigate} />;
      case 'ideate':
        return <IdeateView onNavigate={handleNavigate} />;
      case 'prototype':
        return <PrototypeView onNavigate={handleNavigate} />;
      case 'test':
        return <TestIterateView onNavigate={handleNavigate} />;
      case 'impact':
        return <ImpactView onNavigate={handleNavigate} />;
      case 'analysis':
        return <AnalysisView onNavigate={handleNavigate} />;
      case 'learnings':
        return <LearningsView onNavigate={handleNavigate} />;
      case 'team':
        return <TeamView onNavigate={handleNavigate} />;
      case 'references':
        return <ReferencesView onNavigate={handleNavigate} />;
      case 'tools':
        return <ToolsView onNavigate={handleNavigate} />;
      default:
        return <HomeView onNavigate={handleNavigate} onShowToast={showToast} />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      showToast(next ? 'Sidebar collapsed (Ctrl+B)' : 'Sidebar expanded (Ctrl+B)', 'info');
      return next;
    });
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#000000] text-white overflow-hidden pb-20 sm:pb-[90px] relative font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification HUD */}
      <Toast toast={toast} onClose={closeToast} />

      {/* Main Body Area: contains Sidebar + Main Content View Area */}
      <div className="flex-1 min-h-0 flex overflow-hidden relative p-0 lg:p-2 lg:pb-0 gap-2">
        {/* Left Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onSelectSection={handleNavigate}
          onOpenCaseStudyModal={() => setIsCaseStudyModalOpen(true)}
          isOpenMobile={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-[#121212] rounded-none lg:rounded-lg relative border border-[#282828]/30 transition-all duration-300">
          {/* Top Sticky Header */}
          <TopBar
            onPrev={handlePrev}
            onNext={handleNext}
            canPrev={historyIndex > 0}
            canNext={historyIndex < history.length - 1}
            showSearch={activeSection === 'search'}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onOpenTeam={() => handleNavigate('team')}
            onShowToast={showToast}
            isSidebarCollapsed={isSidebarCollapsed}
            onToggleSidebar={toggleSidebar}
          />

          {/* Scrollable View Area with Smooth Transitions and bottom padding */}
          <main
            id="main-content-scroll"
            className="flex-1 min-h-0 overflow-y-auto pb-16 sm:pb-20 lg:pb-24 custom-scrollbar relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full"
              >
                {renderCurrentView()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Persistent Bottom Audio Player Bar */}
      <PlayerBar
        currentSection={activeSection}
        trackTitle={trackTitle}
        trackSubtitle={trackSubtitle}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onOpenCaseStudy={() => setIsCaseStudyModalOpen(true)}
        onShowToast={showToast}
      />

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
        onShowToast={showToast}
      />
    </div>
  );
}

