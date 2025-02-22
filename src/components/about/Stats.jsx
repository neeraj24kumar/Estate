const Stats = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="heading">
          we specialize in quality home findings <br /> you've just found it
          - we can realize any projects
        </h1>
        {/* <p className="mt-4">
        we believe your home should be a reflection of your unique style and a sanctuary of comfort. We go beyond simply decorating; we transform your living spaces into environments that inspire, rejuvenate, and perfectly suit your lifestyle.
        </p> */}
      </div>
      <div className="flex flex-wrap gap-24 mt-8">
        <div className="relative flex-1 basis-[18rem]">
          <img
            src="/images/property (16).jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-4/5 p-3 -translate-x-1/2 border-4 border-white rounded-lg -bottom-10 left-1/2 dark:border-main-dark bg-secondary text-slate-200">
            <div className="gap-5 flex-center-between">
              <h1 className="font-semibold">
                Come & join with our Leading Technology Firm
              </h1>

              <div>
                <h1 className="text-2xl font-bold text-primary">15250+</h1>
                <p>People Joined</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 basis-[22rem]">
          <p>
          At MartVilla, we believe your home should be a reflection of your unique style and a sanctuary of comfort. We go beyond simply decorating; we transform your living spaces into environments that inspire, rejuvenate, and perfectly suit your lifestyle. From subtle enhancements to complete makeovers, we're dedicated to creating a home you'll truly love.
          </p>
          <p className="mt-3">
          We go beyond simply decorating; we transform your living spaces into environments that inspire, rejuvenate, and perfectly suit your lifestyle.
          </p>
          <div className="mt-3">
            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">investiment plan</h1>
                <h1 className="font-semibold capitalize">80%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-4/5 h-full rounded-full bg-secondary"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">
                  consulting experience
                </h1>
                <h1 className="font-semibold capitalize">70%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[70%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">planning</h1>
                <h1 className="font-semibold capitalize">90%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[90%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">grow business</h1>
                <h1 className="font-semibold capitalize">85%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[85%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
