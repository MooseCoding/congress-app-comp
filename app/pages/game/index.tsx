import UserForm from '../../components/UserForm';
import NavBar from '../../components/NavBar'; 
import Link from 'next/link';
import Game from '../../components/Game';
import GameHeader from '../../components/GameHeader';
import Explanation from '../../components/LearningExplanation';

export default function Page() {
  return (
    <div>
    <NavBar />
    <GameHeader />
    <br /> 
      <Explanation /> 
    <br />
    <Game />
    </div>
  );
};

