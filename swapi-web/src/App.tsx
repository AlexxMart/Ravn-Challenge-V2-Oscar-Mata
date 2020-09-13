import React,{useState} from 'react';
import { PersonDetails } from './components/PersonDetails';
import {SideBar} from './components/SideBar';

import './theme/App.css';

const App: React.FC = () => {
	const [selected, setSelected] = useState<string>('');

  return (
    <>
			<nav>
				<h1>Ravn Star Wars Registry</h1>
			</nav>
			<section>
				<SideBar setSelected={setSelected} />
				<PersonDetails id={selected} />
			</section>
    </>
  );
}

export default App;
