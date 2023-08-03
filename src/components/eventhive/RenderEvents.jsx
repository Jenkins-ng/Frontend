import Event from "./EventCard";
import { event } from "../../utils/data";

const RenderEvents = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {event.map((data, i) => (
        <Event key={i} {...data} />
      ))}
    </div>
  );
};

export default RenderEvents;
