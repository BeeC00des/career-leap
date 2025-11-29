"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/config/supabaseclient";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 10;

const StrategycallWaitlist = () => {
  const [waitlist, setWaitlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchWaitlist = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("book")
      .select(`
        id,
        fullName,
        emailAddress,
        phoneNumber,
        university,
        careerStatus,
        goal,
        callLanguage,
        timeSlot,
        created_at
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching strategy call waitlist:", error.message);
    } else {
      setWaitlist(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  const totalPages = Math.ceil(waitlist.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentData = waitlist.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="mt-5 mx-auto">
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="animate-spin w-8 h-8 text-primary" />
        </div>
      ) : waitlist.length === 0 ? (
        <p>No strategy call entries found.</p>
      ) : (
        <Card className="p-6 shadow-lg border border-border rounded-xl">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white sticky top-0">
                  <th className="p-3">Full Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">University</th>
                  <th className="p-3">Career Status</th>
                  <th className="p-3">Goal</th>
                  <th className="p-3">Call Language</th>
                  <th className="p-3">Preferred Time Slot</th>
                  <th className="p-3">Created</th>
                </tr>
              </thead>

              <tbody>
                {currentData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-accent/20" : "bg-background"
                    } hover:bg-accent/40 transition`}
                  >
                    <td className="p-3">{item.fullName}</td>
                    <td className="p-3">{item.emailAddress}</td>
                    <td className="p-3">{item.phoneNumber}</td>
                    <td className="p-3">{item.university}</td>
                    <td className="p-3 capitalize">
                      {item.careerStatus?.replace("-", " ")}
                    </td>
                    <td className="p-3">{item.goal}</td>
                    <td className="p-3">{item.callLanguage}</td>
                    {/* <td className="p-3">{item.timeSlot}</td> */}
                     <td className="p-3">
                      {item.timeSlot
                        ? new Date(item.timeSlot).toLocaleDateString()
                        : "—"}
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
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <Button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              variant="outline"
            >
              Previous
            </Button>

            <span className="text-sm text-muted-foreground">
              Page <strong>{page}</strong> of <strong>{totalPages}</strong>
            </span>

            <Button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              variant="outline"
            >
              Next
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default StrategycallWaitlist;
