import * as React from "react";
import type * as css from 'csstype';

interface Props {
  thumbsUpPressed: string;
  thumbsUpUnpressed: string;
  thumbsDownPressed: string;
  thumbsDownUnpressed: string;
  twoThumbsUpPressed: string;
  twoThumbsUpUnpressed: string;
  onPress: (value: number) => void;
}

const iconStyle: css.Properties = {
  width: "50px",
  height: "50px",
  padding: "10px",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
};

const pressedStyle: css.Properties = {
  transform: "scale(1.2)",
};

const unpressedStyle: css.Properties = {
  transform: "scale(1)",
};

const ThumbsRating: React.FC<Props> = ({
  thumbsUpPressed,
  thumbsUpUnpressed,
  thumbsDownPressed,
  thumbsDownUnpressed,
  twoThumbsUpPressed,
  twoThumbsUpUnpressed,
  onPress,
}: Props) => {
  const [thumbsUp, setThumbsUp] = React.useState<boolean>(false);
  const [thumbsDown, setThumbsDown] = React.useState<boolean>(false);
  const [twoThumbsUp, setTwoThumbsUp] = React.useState<boolean>(false);

  const handleThumbsUpClick = () => {
    setThumbsUp(true);
    setThumbsDown(false);
    setTwoThumbsUp(false);
    onPress(1);
  };

  const handleThumbsDownClick = () => {
    setThumbsUp(false);
    setThumbsDown(true);
    setTwoThumbsUp(false);
    onPress(-1);
  };

  const handleTwoThumbsUpClick = () => {
    setThumbsUp(false);
    setThumbsDown(false);
    setTwoThumbsUp(true);
    onPress(1.5);
  };

  return (
    <>
      <img
        src={thumbsUp ? thumbsUpPressed : thumbsUpUnpressed}
        style={{
          ...iconStyle,
          ...(thumbsUp ? pressedStyle : unpressedStyle),
        }}
        alt="thumbs up"
        onClick={handleThumbsUpClick}
      />
      <img
        src={thumbsDown ? thumbsDownPressed : thumbsDownUnpressed}
        style={{
          ...iconStyle,
          ...(thumbsDown ? pressedStyle : unpressedStyle),
        }}
        alt="thumbs down"
        onClick={handleThumbsDownClick}
      />
      <img
        src={twoThumbsUp ? twoThumbsUpPressed : twoThumbsUpUnpressed}
        style={{
          ...iconStyle,
          ...(twoThumbsUp ? pressedStyle : unpressedStyle),
        }}
        alt="two thumbs up"
        onClick={handleTwoThumbsUpClick}
      />
    </>
  );
};

export default ThumbsRating;

