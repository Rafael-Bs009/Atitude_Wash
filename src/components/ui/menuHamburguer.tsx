import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-8">
      <div>
        <h1 className="text-4xl  font-montserrat-alternates font-bold text-neutral-800 ">
          Atitude{" "}
          <span className="text-primary  font-semibold italic">Wash</span>
        </h1>
      </div>

      <div className="hidden lg:flex space-x-6  absolute left-1/2 -translate-x-1/2 top-11">
        <a
          href="/"
          className="text-lg font-montserrat text-gray-600 hover:text-primary "
        >
          Home
        </a>
        <a
          href="/about"
          className="text-lg font-montserrat text-gray-600 hover:text-primary "
        >
          Sobre
        </a>
        <a
          href="/services"
          className="text-lg font-montserrat text-gray-600 hover:text-primary "
        >
          Servições
        </a>
        <a
          href="/contact"
          className="text-lg font-montserrat text-gray-600 hover:text-primary "
        >
          Contato
        </a>
      </div>

      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        className="lg:hidden cursor-pointer"
      >
        <Bars3Icon
          className={`text-primary transform duration-500 ease-in-out absolute transition-all ${
            isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
          }`}
          style={{ width: "28px", height: "32px" }}
        />

        <XMarkIcon
          className={`text-primary transform duration-500 ease-in-out absolute transition-all ${
            isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
          }`}
          style={{ width: "28px", height: "32px" }}
        />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="rounded-2xl">
          <div>
            <nav>
              <a
                href="/"
                className="font-montserrat text-lg block w-80 rounded-2xl p-2 hover:bg-primary  hover:text-white  transition-all duration-300 mask-fade-lr"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="font-montserrat text-lg block w-80 rounded-2xl p-2 hover:bg-primary  hover:text-white  transition-all duration-300 mask-fade-lr"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a
                href="/services"
                className="font-montserrat text-lg block w-80 rounded-2xl p-2 hover:bg-primary  hover:text-white  transition-all duration-300 mask-fade-lr bg-opa"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </a>
              <a
                href="/contact"
                className="font-montserrat text-lg block w-80 rounded-2xl p-2 hover:bg-primary  hover:text-white  transition-all duration-300 mask-fade-lr"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};
