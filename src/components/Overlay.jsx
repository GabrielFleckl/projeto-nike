import { Scroll } from "@react-three/drei";
import Footer from "./Footer";

const Section = (props) => {
  return (
    <section
      className={`md:h-screen rounded-xl flex flex-col justify-center md:p-10 bg-slate-500 bg-opacity-20 backdrop-blur-md md:bg-transparent md:bg-opacity-100 md:backdrop-blur-none ${
        props.right ? "items-end" : "items-start"
      }`}
    >
      <div className="md:w-1/2 flex items-center md:gap-5 justify-center">
        <div className="md:max-w-xlg md:w-full">
          <div className="text-slate-100 rounded-xl px-8 py-10 md:bg-slate-500 md:bg-opacity-20 md:backdrop-blur-md md:shadow-lg">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

function Overlay() {
  const mobile = window.innerWidth > 500;

  return (
    <Scroll html>
      <div class="w-screen absolute top-[100vh]">
        <Section>
          <h1 className="font-semibold text-2xl text-primary">
            Discover the Power of Innovation: Nike TC 7900
          </h1>

          <p className="mt-5 font-semibold text-justify">
            Welcome to the future of athletic footwear with the Nike TC 7900.
            This revolutionary sneaker combines cutting-edge technology,
            innovative design, and exceptional comfort to provide a unique
            experience for athletes of all levels. With its high-grip rubber
            sole, responsive cushioning, and lightweight construction, the Nike
            TC 7900 is more than just footwear—it's an essential tool to boost
            your performance and reach new heights in any sporting activity.
            Explore the power of innovation and elevate your game with the Nike
            TC 7900.
          </p>

          <p className="animate-bounce text-lg mt-6">↓</p>
        </Section>

        <Section right>
          <h1 className="text-2xl text-primary font-semibold">
            Features and Technology
          </h1>
          <p className="mt-5 font-semibold text-justify">
            The Nike TC 7900 is more than just a sneaker—it's an example of what
            cutting-edge technology can offer modern athletes. Equipped with the
            latest Nike Air cushioning technology, this sneaker provides a
            feeling of lightness and responsiveness with every step, reducing
            impact and maximizing comfort.
          </p>
          <p className="animate-bounce text-lg mt-6">↓</p>
        </Section>

        <Section>
          <h1 className=" text-slate-200 text-2xl font-semibold">
            What Athletes Are Saying:{" "}
            <span className="text-primary">Real Testimonials</span>
          </h1>
          <div className="flex flex-col gap-3 mb-10 md:mb-0">
            <p className="mt-5 font-semibold text-justify">
              "The Nike TC 7900 has completely changed my running experience.
              Its cushioning technology is simply amazing, and I feel like I'm
              floating with every stride." <br />{" "}
              <span className="text-primary">Sarah R., Amateur Runner</span>.
            </p>
            <p className="mt-5 font-semibold text-justify">
              "As a competitive basketball player, I need a sneaker that
              provides support and traction without compromising agility. The
              Nike TC 7900 does just that—it's like it's glued to the floor,
              allowing me to move with confidence on the court." <br />{" "}
              <span className="text-primary">
                Michael W., Basketball Athlete
              </span>
              .
            </p>
            <p className="mt-5 font-semibold text-justify">
              "I'm impressed with the comfort and durability of the Nike TC
              7900. From day one, I felt a significant difference in my workouts
              and never looked back." <br />{" "}
              <span className="text-primary">David L., Fitness Enthusiast</span>
              .
            </p>
          </div>
        </Section>
        {mobile && <Footer />}
      </div>
    </Scroll>
  );
}

export default Overlay;
