interface Props {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const CloseButton = ({ isOpen, setIsOpen }: Props) => (
  <div
    className={`border-r-4 border-b-4 w-6 h-6 fixed right-1/2 translate-x-3 hover:w-7 hover:h-7 hover:translate-x-3.5 cursor-pointer transition-all duration-100 ease-in-out z-10 ${isOpen ? "bottom-1/3 -translate-y-2 rotate-45 border-blue-400 hover:border-blue-200" : "bottom-12 rotate-225 border-blue-900 hover:border-blue-400"}`}
    onClick={() => setIsOpen(!isOpen)}
  />
);

export default CloseButton;
