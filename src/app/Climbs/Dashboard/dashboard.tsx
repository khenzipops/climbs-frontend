"use client";

export default function Dashboard() {
  return (
    <div className="text-neutral-800">
      <main className="gap-4 transition-all duration-300">
        {/* Left/Main Panel */}
        <h2 className="text-3xl font-extrabold mb-6">📊 Weekly Summary</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Title: Weekly Overview</h3>
            <p className="text-sm text-gray-500 mt-1">Date: October 10, 2023</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2">✅ Accomplishment Tasks</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Completed project setup</li>
              <li>Implemented authentication</li>
              <li>Designed dashboard UI</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2">
              🗓️ Itinerary Accomplishments
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Reviewed itinerary reports</li>
              <li>Updated travel plans</li>
              <li>Scheduled meetings</li>
            </ul>
          </div>

          <div className="">
            <div>
              <h4 className="text-lg font-bold mb-2">
                ⏱️ On-Time Accomplishments
              </h4>
              <p className="text-sm">John Doe completed all tasks on time.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">🏆 Employee Rankings</h4>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>John Doe - 1st</li>
                <li>Jane Smith - 2nd</li>
                <li>Emily Johnson - 3rd</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
