import ScrollVelocity from "./ScrollVelocity";

function Scroll() {
  return (
    <>
      <ScrollVelocity
        texts={["React Bits", "Scroll Down"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </>
  );
}

export default Scroll;
