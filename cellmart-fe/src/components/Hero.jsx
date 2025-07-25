import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search");
  };

  return (
    <div className="">
      <div className="relative z-10 flex flex-col items-center  text-white justify-center px-8 pt-32 pb-32">
        <h1 className="text-4xl md:text-6xl font-bold  mb-8 text-center">
          Find Your Perfect Mobile Device
        </h1>
        <p className="text-xl  mb-12 text-center  max-w-2xl">
          Describe your dream mobile device and we'll find the perfect match just for you.
        </p>
        <form
          onSubmit={handleSearch}
          className="w-full max-w-3xl bg-black/10  backdrop-blur-md lg:h-16 rounded-full p-2 flex items-center"
        >
          <Input
            type="text"
            placeholder="Describe your needs, requirements, and budget..."          
            className="flex-grow  bg-transparent lg:text-lg  text-white placeholder:text-white/50 border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="rounded-full w-48 flex items-center gap-x-2 lg:h-12"
          >
            <span className="lg:text-lg">AI Search</span>
          </Button>
        </form>
      </div>
    </div>
  );
}