import Nav from "./components/nav";

export default function Home() {
  return (
    <section className="w-full h-full">
      <Nav />
      <main>
        <div>
        <style>
          @import url(https://fonts.googleapis.com/css2?family=Itim&display=swap);
        </style>
          <div style={{fontFamily: '"Itim"'}} className="text-4xl text-black text-center font-medium">INVESTING AT YOUR FINGERTIPS</div>
        </div>
        <div className="text-black text-center my-7 text-2xl font-normal">
          <div>Seamlessly connect with mutual fund</div>
          <div>Distributors, exploring top-performing</div>
          <div>funds, and track your investments-all</div>
          <div>in one place.</div>
        </div>
        <div className="flex space-x-8 justify-center">
          <div> <button className="px-5 py-1.5 rounded-lg border-0 text-center text-white" style={{backgroundColor: "#384347"}}>Get Started</button></div>
          <div> <button className="px-5 py-1.5 rounded-lg border-0 text-center text-zinc-800" style={{backgroundColor: "#7ED1ED"}}>Explore Funds</button></div>
        </div>
      </main>
      <footer>
        <div className="w-full h-[200px]"></div>
        <div className="w-full h-[86px] bg-blue-300"></div>
      </footer>
    </section>
  );
}
