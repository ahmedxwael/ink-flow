export default function GlowingBackground() {
  return (
    <>
      <div className="absolute top-0 left-0 w-1/3 -translate-x-1/3 -translate-y-1/2 rounded-full h-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/5 blur-3xl to-transparent"></div>
      <div className="absolute top-5 right-0 w-1/2 translate-x-1/3 translate-y-1/2 rounded-full h-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/5 blur-3xl to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-1/4 -translate-x-1/3 rounded-full h-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/5 blur-3xl to-transparent"></div>
    </>
  );
}
