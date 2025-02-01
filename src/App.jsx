// src/App.jsx
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Navigation/Layout";
import Reception from "./pages/Reception";
import QuestBoard from "./pages/QuestBoard";
import Library from "./pages/Library";
import BountyHall from "./pages/BountyHall";
import { GuildProvider } from "./context/GuildContext";
import QuestBoardPage from "./pages/QuestBoard";

function App() {
  return (
    <GuildProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Reception />} />
          <Route path="/quests" element={<QuestBoardPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/bounties" element={<BountyHall />} />
        </Route>
      </Routes>
    </GuildProvider>
  );
}

export default App;
