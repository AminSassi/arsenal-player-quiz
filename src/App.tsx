import { useDarkMode } from './hooks/useDarkMode';
import { useGameState } from './hooks/useGameState';
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
    startGame,
    submitAnswer,
    skipPlayer,
    nextPlayer,
    goHome,
    setPlayerName,
  } = useGameState();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Dark mode toggle - fixed top right */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle isDark={isDark} toggle={toggleDark} />
      </div>

      {game.screen === 'home' && (
        <HomeScreen onStart={startGame} bestScore={bestScore} />
      )}

      {game.screen === 'quiz' && currentPlayer && (
        <QuizScreen
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
          onPlayerNameChange={setPlayerName}
        />
      )}

      {game.screen === 'end' && (
        <EndScreen
          score={game.score}
          total={totalPlayers}
          bestScore={bestScore}
          onPlayAgain={startGame}
          onHome={goHome}
        />
      )}
    </div>
  );
}

export default App;
