// == Import
import Dice from '../Dice/Dice';
import Encounter from '../Encounter/Encounter';
import Encounter2 from '../Encounter/Encounter2';
import Encounter3 from '../Encounter/Encounter3';
import Encounter4 from '../Encounter/Encounter4';
import Encounter5 from '../Encounter/Encounter5';
import Encounter6 from '../Encounter/Encounter6';
import Endurance from '../Endurance/Endurance';
import Equipments from '../Equipments/Equipments';
import Host from '../Host/Host';
import Luck from '../Luck/Luck';
import Power from '../Power/Power';
import Skill from '../Skill/Skill';
import Will from '../Will/Will';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <h1>Companion-App</h1>
      <h2>La feuille d'aventure</h2>
<Skill />
<Endurance />
<Luck />
<Will />
<Power />
<Host />
<Equipments />
<Dice />
<Encounter />
<Encounter2 />
<Encounter3 />
<Encounter4 />
<Encounter5 />
<Encounter6 />
    </div>
  );
}

// == Export
export default App;
