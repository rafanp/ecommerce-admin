import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";

const AnotherLayout = (props) => {
  const { children } = props;
  return (
    <>
      {/* <Header /> */}
      <div>
        <Navigation />
        <main>{children}</main>
      </div>
      <h2>Another Layout</h2>
    </>
  );
};

export default AnotherLayout;
