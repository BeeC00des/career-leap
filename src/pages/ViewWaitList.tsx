"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/config/supabaseclient";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const ViewWaitList = () => {
  const [waitlist, setWaitlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWaitlist = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("careerleap")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching waitlist:", error.message);
    } else {
      setWaitlist(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CareerLeap Waitlist</h1>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="animate-spin w-8 h-8 text-primary" />
        </div>
      ) : waitlist.length === 0 ? (
        <p>No waitlist entries found.</p>
      ) : (
        <Card className="p-6 overflow-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Location</th>
                <th className="p-3">University</th>
                <th className="p-3">Status</th>
                <th className="p-3">Field of Study</th>
                <th className="p-3">Strategy Call</th>
                <th className="p-3">Created</th>
              </tr>
            </thead>

            <tbody>
              {waitlist.map((item) => (
                <tr key={item.id} className="border-b hover:bg-muted/40">
                  <td className="p-3">{item.fullName}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.location}</td>
                  <td className="p-3">{item.university}</td>
                  <td className="p-3 capitalize">{item.currentStatus?.replace("-", " ")}</td>
                  <td className="p-3">{item.fieldOfStudy}</td>
                  <td className="p-3">
                    {item.wantsStrategyCall === "yes" ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-gray-600">No</span>
                    )}
                  </td>
                  <td className="p-3">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString()
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export default ViewWaitList;
