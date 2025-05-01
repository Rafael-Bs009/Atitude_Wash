import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 mt-5">
            <div className="flex flex-col  max-w-sm items-center">
              <h3 className="font-bold font-montserrat-alternates text-2xl mb-2 ">
                Atitude <span className="italic">Wash</span>
              </h3>
              <p className="font-work-sans text-orange-50 lg:text-lg font-light text-center">
                Mais do que limpeza: conforto, saúde e bem-estar para sua
                família.
              </p>
            </div>
            <div className="flex flex-col   max-w-sm items-center" id="contact">
              <h3 className="font-bold font-montserrat-alternates text-2xl mb-2 ">
                Contatos
              </h3>
              <p className="font-work-sans text-orange-50 lg:text-lg font-light ">
                Email: test@teste.com
              </p>
              <p className="font-work-sans text-orange-50 lg:text-lg font-light ">
                Telefone: (xx) 123123123
              </p>
            </div>
            <div className="flex flex-col  max-w-sm items-center" id="redes">
              <h3 className="font-bold font-montserrat-alternates text-2xl mb-2 ">
                Redes sociais
              </h3>
              <div className="flex gap-4 items-center justify-center">
                <a
                  className="font-work-sans text-orange-50 lg:text-lg font-light "
                  href="#"
                  target="_blank"
                >
                  <InstagramLogo size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h3>
              © {new Date().getFullYear()} Atitude Wash. Todos os direitos
              reservados.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
