import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


const Home = () => {

  const [search,setSearch] = useState("")
  const [region, setRegion] = useState("all")
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,cca3",
        );
        const data = await response.json();
        setCountries(data);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    getCountries();
  }, []);
  const filteredCountries = countries
    .filter((item) =>
      item.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      region === "all" ? true : item.region === region
    );

  return (
    <div>
      <Header />
      <section className="bg-[#FAFAFA] px-4.5 lg:px-20">
        <div className=" py-6 px-4 flex flex-col gap-8 lg:flex-row lg:gap-150">

          <div className="w-80 h-12 flex items-center bg-white rounded-[5px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.05)] gap-6.5 pl-8">
            <img src="images/search.svg" alt="" />
            <form>
              <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a country…"
                className="justify-start text-stone-300 text-xs font-normal font-['Nunito_Sans'] leading-5 placeholder-gray-400"
                type="text"
                
              />
            </form>
          </div>
          <form>
            <select
             onChange={(e) => setRegion(e.target.value)}
              className="w-48 h-12 bg-white rounded-[5px] shadow-[0px_2px_9px_0px_rgba(0,0,0,0.05)]"
              name=""
              id=""
            >
              <option value="All">All region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>

        <main>
          {filteredCountries.map((item) => (
            <Link
              key={item.cca3}
              to={`/details/${item.cca3}`}
              className="w-64 h-80 bg-white rounded-[5px] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.03)] flex flex-col gap-6  mt-8 mx-9.5"
            >
              <img src={item.flags.svg} alt={item.name.common} />
              <div className="ml-6">
                <h2 className="justify-start text-neutral-900 text-lg font-extrabold font-['Nunito_Sans'] leading-6 mb-4.5">
                  {item.name.common}
                </h2>
                <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-4">
                  <span className="text-neutral-900 text-sm font-light font-['Nunito_Sans'] leading-4">
                    Populacion:
                  </span>{" "}
                  {item.population.toLocaleString()}
                </p>
                <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-4">
                  <span className="text-neutral-900 text-sm font-light font-['Nunito_Sans'] leading-4">
                    Region:
                  </span>
                  {item.region}
                </p>
                <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-4">
                  <span className="text-neutral-900 text-sm font-light font-['Nunito_Sans'] leading-4">
                    Capotal:
                  </span>{" "}
                  {item.capital?.[0] || "N/A"}
                </p>
              </div>
            </Link>
          ))}
        </main>
      </section>
    </div>
  );
};

export default Home;
