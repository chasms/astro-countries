interface Props {
  onClick: () => void;
}

const CloseButton = ({ onClick }: Props) => (
  <div className="fixed bottom-1/3 translate-y-6 right-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0 sm:pr-4">
    <button
      type="button"
      onClick={onClick}
      className="relative rounded-md text-blue-400 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
    >
      <span className="absolute -inset-2.5"></span>
      <span className="sr-only">Close panel</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
        <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
);

export default CloseButton;
