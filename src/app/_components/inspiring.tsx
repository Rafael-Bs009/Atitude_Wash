import Family from "../../assets/img/family-on-couch.jpg";

export function Inspiring() {
  return (
    <div className="bg-orange-50 pt-7">
      <section className="bg-primary pt-20 pb-10 rounded-t-[30px]">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-montserrat font-bold md:text-3xl lg:text-4xl leading-tight text-white tracking-wide">
                Cuidar da sua casa é cuidar de quem você ama.{" "}
                <span className="text-orange-50">
                  Confie na{" "}
                  <span className="font-bold font-montserrat-alternates">
                    Atitude <span className="italic">Wash</span>
                  </span>
                </span>{" "}
                para transformar seu ambiente com carinho e qualidade.
              </h1>
              <p className="font-work-sans text-orange-50 lg:text-lg font-light">
                Transforme sua casa em um lar saudável e acolhedor com o cuidado
                que sua família merece.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={Family}
                alt="Familia no sofá"
                className="rounded-4xl opacity-90 shadow-lg transition-opacity duration-500 hover:opacity-100 w-full h-auto max-w-md lg:max-w-full"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
