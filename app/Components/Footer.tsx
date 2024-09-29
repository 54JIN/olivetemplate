const name = "adam";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-[70px]">
      <div className="flex justify-between w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[60vw] 2xl:w-[60vw]">
        <h1>Logo</h1>
        <button className="btn btn-primary">Support</button>
      </div>
    </div>
  );
}
