export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-10 text-white">
      <div className="flex flex-row justify-center items-center gap-5">
        <p className="font-extrabold text-xl">404</p>
        <div className="h-[5vh] border-white border"></div>
        <p className="text-sm font-semibold">This page could not be found.</p>
      </div>
      <button className="border border-white p-2 rounded-lg text-[12px] font-light hover:font-semibold hover:border-2">Go Home</button>
    </div>
  );
}
