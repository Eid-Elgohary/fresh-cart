import { ColorRing } from "react-loader-spinner";

function SmallSpinner({color='white'}) {
  return (
    <>
      <ColorRing
        visible={true}
        height="30"
        width="30"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={[{color}, {color}, {color}, {color}, {color}]}
      />
    </>
  );
}

export default SmallSpinner;
