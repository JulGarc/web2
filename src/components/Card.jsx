export function Card({ count, info, state }) {
  return (
    <div className="relative flex w-48 flex-col rounded-xl bg-black text-white shadow-md 2 select-none">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-800 bg-clip-border text-white shadow-lg shadow-gray-800/40">
        <img
          className="object-cover w-full aspect-square"
          src={info?.img}
          alt="logo"
        />
      </div>
      <div className="p-5">
        <div className="grid grid-cols- ">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal">
            {info.title}
          </h5>
          {state || <p className="mt-2">LATIN GRAMMY: {count}</p>}
        </div>
        {state || (
          <p className="block font-sans text-base font-light leading-relaxed">
            {info.description}
          </p>
        )}
      </div>
      
    </div>
  );
}

