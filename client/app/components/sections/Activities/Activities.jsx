import { useActivities } from "@/store";
import { useEffect } from "react";
import SingleActivity from './SingleActivity';

const Activities = () => {
  const activities = useActivities((state) => state.activities);
  const loadActivities = useActivities((state) => state.loadActivities);
  
  useEffect(() => {
    loadActivities();
  }, [activities]);
  
  return (
    <section className="flex flex-col gap-12 py-10 sm:justify-center sm:items-center lg:flex-row lg:flex-wrap lg:justify-evenly w-full max-w-[1160px] mx-auto">
        {activities.map((activity) => {
          return <SingleActivity key={activity._id} activity={activity} />;
        })}
    </section>
  );
}

export default Activities