import Carousel from '../../components/ui/Carousel';

const About = () => {
  return (
    <section className="bg-[#F58E26] py-12 text-white md:mt-4 p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center ">
        {/* Carousel */}
        <div className="w-full md:w-1/2 sm:w-2/3 lg:w-1/3 mb-6 md:mb-0 flex justify-center flex-1">
          <Carousel />
        </div>

        {/* Text and Stats */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start flex-1">
          <h2 className="text-[3em] uppercase font-bold text-[#3a3a3a] text-white">
            We are Kangina.
          </h2>
          <p className="max-w-[53ch] font-light text-lg mb-6">
            Our adventure began in a humble kitchen where we discovered that the true secret ingredient wasn’t in the pantry—it was in the playful spirit of every “tarantado” who dared to break the rules. We take pride in transforming everyday ingredients into masterpieces that carry the soul of Filipino cooking, spiced up with a hint of rebellious wit.
          </p>

          {/* Statistics Section */}
          <div className="flex justify-center md:justify-start gap-8 mb-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">5k+</span>
              <span className="block text-sm font-light">active customers</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-bold">9k+</span>
              <span className="block text-sm font-light">satisfied diners</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-bold">10+</span>
              <span className="block text-sm font-light">award winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
