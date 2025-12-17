import { useEffect, useRef } from "react";
import styles from "./Star.module.css";

function Star({ position, id, destroyStar }) {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;
    if (star) {
      star.focus()
    }
  }, []);

  function handleClick() {
    destroyStar(id);
  }

  return (
    <div
      ref={starRef}
      tabIndex="0"
      onClick={handleClick}
      style={{left: position.x, top: position.y}}
      className={styles.star}     
    >&#9733;</div>
  );
}

export default Star;