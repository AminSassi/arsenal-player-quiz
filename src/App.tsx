import { useDarkMode } from './hooks/useDarkMode';
import { useGameState } from './hooks/useGameState';
import { TeamSelector } from './components/TeamSelector';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { EndScreen } from './components/EndScreen';
import { DarkModeToggle } from './components/DarkModeToggle';

function App() {
  const { isDark, toggle: toggleDark } = useDarkMode();
  const {
    game,
    currentPlayer,
    totalPlayers,
    isLastQuestion,
    bestScore,
    imageLoaded,
    setImageLoaded,
    inputRef,
    selectTeam,
    submitAnswer,
    skipPlayer,
    nextPlayer,
    goToTeams,
    setPlayerName,
  } = useGameState();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle isDark={isDark} toggle={toggleDark} />
      </div>

      {game.screen === 'teams' && (
        <TeamSelector onSelect={selectTeam} />
      )}

      {game.screen === 'home' && game.selectedTeam && (
        <HomeScreen
          team={game.selectedTeam}
          onStart={() => selectTeam(game.selectedTeam!)}
          onBack={goToTeams}
          bestScore={bestScore}
        />
      )}

      {game.screen === 'quiz' && currentPlayer && (
        <QuizScreen
          team={game.selectedTeam!}
          currentPlayer={currentPlayer}
          currentIndex={game.currentIndex}
          totalPlayers={totalPlayers}
          score={game.score}
          answered={game.answered}
          isCorrect={game.isCorrect}
          showNext={game.showNext}
          isLastQuestion={isLastQuestion}
          playerName={game.playerName}
          imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}
          inputRef={inputRef}
          onSubmit={submitAnswer}
          onSkip={skipPlayer}
          onNext={nextPlayer}
          onBack={goToTeams}
          onPlayerNameChange={setPlayerName}
        />
      )}

      {game.screen === 'end' && (
        <EndScreen
          team={game.selectedTeam!}
          score={game.score}
          total={totalPlayers}
          bestScore={bestScore}
          onPlayAgain={() => selectTeam(game.selectedTeam!)}
          onHome={goToTeams}
        />
      )}
    </div>
  );
}

export default App;
