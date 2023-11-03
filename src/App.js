import { BrowserRouter, Route, Routes } from "react-router-dom";

import Europa from "./assets/destination/destination pages/Europa";
import Technology from "./assets/technology/Technology";
import Vehicle from "./assets/technology/technologypages/Vehicle";
import Destination from "./assets/destination/Destination";
import Crew from "./assets/crew/Crew";
import Home from "./assets/home/Home";
import Moon from "./assets/destination/destination pages/Moon";
import Mars from "./assets/destination/destination pages/Mars";
import Titan from "./assets/destination/destination pages/Titan";
import Capsule from "./assets/technology/technologypages/Capsule";
import SpacePort from "./assets/technology/technologypages/SpacePort";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>

        <Route path="crew" element={<Crew />}></Route>

        <Route path="destination" element={<Destination />}>
          <Route index element={<Europa />} />
          <Route path="europa" element={<Europa />} />
          <Route path="mars" element={<Mars />} />
          <Route path="moon" element={<Moon />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        <Route path="technology" element={<Technology />}>
          <Route index element={<Vehicle />} />
          <Route path="launchVehicle" element={<Vehicle />} />
          <Route path="spaceCapsule" element={<Capsule />} />
          <Route path="spacePort" element={<SpacePort />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
