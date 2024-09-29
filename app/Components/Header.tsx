export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="flex justify-center items-center h-[70px]">
        <div className="flex justify-between w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[60vw] 2xl:w-[60vw]">
          <h1>Logo</h1>
          <div className="flex gap-5">
            <h1>Tab1</h1>
            <h1>Tab2</h1>
            <h1>Tab3</h1>
          </div>
          <h1>Tabs</h1>
        </div>
      </div>
    </div>
  );
}
