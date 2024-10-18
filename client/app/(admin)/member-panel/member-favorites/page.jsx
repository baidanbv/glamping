'use client';
import { useState, useEffect } from 'react';
import { useActivities } from '@/store';

const page = () => {
  
  const [loading, setLoading] = useState(true);
  const favoriteList = JSON.parse(localStorage.getItem('favorites')) || [];
  
  const activities = useActivities((state) => state.activities);
  const loadActivities = useActivities((state) => state.loadActivities);
  const favoriteActivities = activities.filter((item) => favoriteList.includes(item._id));

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        await loadActivities();
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [loadActivities]);

  {
    loading && <p className="fixed left-0 top-0 flex items-center justify-center text-3xl w-screen h-screen">Loading ...</p>;
  }

  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="text-5xl">Favorites</h1>
      {favoriteActivities.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-accent">
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {favoriteActivities.map((activity) => (
                <tr key={activity._id} className="border-b border-accent">
                  <td className="px-4 py-2">{activity.title}</td>
                  <td className="px-4 py-2">{activity.date}</td>
                  <td className="px-4 py-2">{activity.time}</td>
                  <td className="px-4 py-2">{activity.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        'You don`t have any favorite activites yet.'
      )}
    </div>
  );
}

export default page