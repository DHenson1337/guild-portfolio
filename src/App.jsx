// App.jsx
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import Reception from "./pages/Reception";
import QuestBoard from "./pages/QuestBoard";
import Library from "./pages/Library";
import BountyHall from "./pages/BountyHall";
import { AnimatePresence } from "framer-motion";
import { GuildProvider } from "./context/GuildContext";

function App() {
  return (
    <GuildProvider>
      <AnimatePresence>
        <Routes>
          {/* Main layout wrapper */}
          <Route element={<Layout />}>
            {/* Reception/Home page */}
            <Route path="/" element={<Reception />} />

            {/* Quest Board (Projects) */}
            <Route path="/quests" element={<QuestBoard />} />

            {/* Library (Skills) */}
            <Route path="/library" element={<Library />} />

            {/* Bounty Hall (Experience) */}
            <Route path="/bounties" element={<BountyHall />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </GuildProvider>
  );
}

export default App;
