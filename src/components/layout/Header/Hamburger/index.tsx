export const Hamburger = () => {
  return (
    <button
      type="button"
      className="grid h-[21px] w-8 gap-[6px]"
      aria-label="Close navigation menu"
    >
      <span className="h-[3px] w-full rounded-[1.5px] bg-secondary"></span>
      <span className="h-[3px] w-full rounded-[1.5px] bg-secondary"></span>
      <span className="h-[3px] w-full rounded-[1.5px] bg-secondary"></span>
    </button>
  );
};
