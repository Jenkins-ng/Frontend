import RenderEvents from "../../components/eventhive/RenderEvents";
import roorkee from "../../assets/event_images/roorkee.png";

const College = () => {
  return (
    <>
      <main className="w-11/12 mx-auto">
        <article>
          <img src={roorkee} alt="" role="banner" className="w-full" />
          <div className="w-11/12 mx-auto">
            <h2 className="my-8">IIT Roorke</h2>
            <div className="grid gap-7">
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
              <p>
                DesignHub organized a 3D Modeling Workshop using Blender on 16th
                February at 5 PM. The workshop taught participants the magic of
                creating stunning 3D models and animations using Blender. It was
                suitable for both beginners and experienced users. The event was
                followed by a blender-render competition, which added to the
                excitement.
              </p>
            </div>
          </div>
          <section className="w-11/12 mx-auto pt-14 pb-28">
            <h2 className="mb-10">
              Trending <span className="text-primary">Events</span>
            </h2>
            <RenderEvents />
          </section>
        </article>
      </main>
    </>
  );
};

export default College;
