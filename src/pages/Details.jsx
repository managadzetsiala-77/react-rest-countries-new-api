import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

const Details = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(0);
  useEffect(() => {
    async function getCountry() {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const data = await res.json();
      setCountry(data[0]);
      // console.log(data);
    }

    getCountry();
  }, [code]);
  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <div className="p-7">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 px-6 py-2 shadow bg-white"
        >
          ← Back
        </button>
        <div className="flex flex-col gap-3 items-center">
          <img
            src={country.flags.svg}
            className="w-80 h-72 "
          />
          <div className="flex flex-col ">
            <h1 className="text-2xl font-bold mb-6">{country.name.common}</h1>
            <div className="flex flex-col gap-8 mb-8">
              <div>
               
                <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">Native Name: <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8">{" "}
                  {Object.values(country.name.nativeName || {})[0]?.common}</span></p>
               
                <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
      Population:
      <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8">
        {" "}
        {country.population.toLocaleString()}
      </span>
    </p>
    <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
      Region:
      <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8"> {country.region}</span>
    </p>

    <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
      Sub Region:
      <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8"> {country.subregion}</span>
    </p>

    <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
      Capital:
      <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8"> {country.capital?.[0]}</span>
    </p>
              </div>

              <div>
              <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
      Top Level Domain:
      <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8"> {country.tld?.[0]}</span>
    </p>

    <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
      Currencies:
      <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8">
        {" "}
        {Object.values(country.currencies || {})[0]?.name}
      </span>
    </p>

    <p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
      Languages:
      <span className="text-neutral-900 text-sm font-normal font-['Nunito_Sans'] leading-8">
        {" "}
        {Object.values(country.languages || {}).join(", ")}
      </span>
    </p>
              </div>
            </div>
<div>
<p className="text-neutral-900 text-sm font-semibold font-['Nunito_Sans'] leading-8">
    Border Countries:
  </p>

      <div className="flex flex-wrap gap-2 mt-2">
    {country.borders?.length ? (
      country.borders.map((border) => (
        <button
          key={border}
          className="w-24 h-7 bg-white rounded-sm shadow-[0px_0px_4px_1px_rgba(0,0,0,0.10)]"
        >
          {border}
        </button>
      ))
    ) : (
      <span className="text-sm text-gray-500">None</span>
    )}
  </div>
</div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
