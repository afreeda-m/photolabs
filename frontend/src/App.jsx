import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <HomeRoute/>
      {/* {isModalOpen && <PhotoDetailsModal />} */}
    </div>
  );
};

export default App;
