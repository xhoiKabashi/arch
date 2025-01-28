export default function Page() {
    return (
      <div className="pt-32 px-2 md:px-40">
        <div className="text-center py-7 md:py-14 space-y-5">
          <p className="text-4xl md:text-6xl tracking-widest font-light">About Arki</p>
          <p className="text-base md:text-2xl text-slate-600">Explore our services</p>
        </div>
  
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white  rounded-lg p-6 max-w-sm">
            <p className="font-semibold text-2xl py-4 uppercase">Architecture</p>
            <p className="font-light text-slate-500">Non nisi est sit amet facilisis magna isci etiam por stasma fringilla hasellus ius scelerisque fas ifendre aenean odcilie diam.</p>
          </div>
          <div className="bg-white  rounded-lg p-6 max-w-sm">
            <p className="font-semibold text-2xl py-4 uppercase">Exterior</p>
            <p className="font-light text-slate-500">Non nisi est sit amet facilisis magna isci etiam por stasma fringilla hasellus ius scelerisque fas ifendre aenean odcilie diam.</p>
          </div>
          <div className="bg-white  rounded-lg p-6 max-w-sm">
            <p className="font-semibold text-2xl py-4 uppercase">Interior</p>
            <p className="font-light text-slate-500">Non nisi est sit amet facilisis magna isci etiam por stasma fringilla hasellus ius scelerisque fas ifendre aenean odcilie diam.</p>
          </div>
        </div>
      </div>
    );
  }