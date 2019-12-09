import React, { useState } from "react";
import { Button } from "react-md";

const ToggleButtonCutom = ({ value }) => {
  const [ToggleOn, setToggleOn] = useState(false);

  const handleChange = () => {
    setToggleOn(b => !b);
  };

  return (
    <Button
      onClick={handleChange}
      secondary
      flat
      swapTheming={ToggleOn}
      raised={ToggleOn}
    >
      {ToggleOn ? "내 모델에 추가됨" : "내 모델에 추가하기"}
    </Button>
    //     <DialogContainer
    //     id="speed-boost"
    //     visible={visible}
    //     title="Use Google's location service?"
    //     onHide={this.hide}
    //     aria-describedby="speed-boost-description"
    //     modal
    //     actions={actions}>
    //     <p id="speed-boost-description" className="md-color--secondary-text">
    //       Let Google help apps determine location. This means sending anonymous
    //       location data to Google, even when no apps are running.
    //     </p>
    //   </DialogContainer>
  );
};

export default ToggleButtonCutom;
