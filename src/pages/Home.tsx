import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      <Header />
      <section
        className="w-full py-[20vh] px-[20vw]"
      >
        <h1 className="text-foreground text-5xl font-bold">First Section</h1>
        <div className="h-[1px] w-full bg-foreground/10 mt-[4vh]" />
        <h3 className="text-foreground/90 text-3xl font-semibold mt-[6vh]">
          Subheading 1
        </h3>
        <p className="text-foreground/80 mt-[4vh]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum
          magnam inventore assumenda consequuntur ex incidunt sapiente
          repudiandae a, minus quia vel ratione, cupiditate temporibus cumque
          asperiores eligendi dolore numquam, dignissimos reprehenderit
          molestiae. Neque, et explicabo voluptas modi itaque veniam totam fuga
          doloribus laborum nihil recusandae nam quas non reiciendis.
        </p>
        <h3 className="text-foreground/90 text-3xl font-semibold mt-[6vh]">
          Subheading 2
        </h3>
        <p className="text-foreground/80 mt-[4vh]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum
          magnam inventore assumenda consequuntur ex incidunt sapiente
          repudiandae a, minus quia vel ratione, cupiditate temporibus cumque
          asperiores eligendi dolore numquam, dignissimos reprehenderit
          molestiae. Neque, et explicabo voluptas modi itaque veniam totam fuga
          doloribus laborum nihil recusandae nam quas non reiciendis.
        </p>
        <h1 className="text-foreground text-5xl font-bold mt-[8vh]">
          New Section
        </h1>
        <div className="h-[1px] w-full bg-foreground/10 mt-[4vh]" />
        <h3 className="text-foreground/90 text-3xl font-semibold mt-[6vh]">
          Another Subheading
        </h3>
        <p className="text-foreground/80 mt-[4vh]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum
          magnam inventore assumenda consequuntur ex incidunt sapiente
          repudiandae a, minus quia vel ratione, cupiditate temporibus cumque
          asperiores eligendi dolore numquam, dignissimos reprehenderit
          molestiae. Neque, et explicabo voluptas modi itaque veniam totam fuga
          doloribus laborum nihil recusandae nam quas non reiciendis.
        </p>
      </section>
    </main>
  );
};

export default Home;
