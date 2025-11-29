import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JoinWaitlist from "./_components/tabs/join-waitlist";
import ContactWaitlist from "./_components/tabs/contact-waitlist";

const ViewWaitList = () => {
  return (
    <>
      <div className="bg-primary py-4 px-10">
        <h1 className="text-3xl font-bold mt-2 mb-6 text-white">CareerLeap Waitlist</h1>
      </div>
      <div className="px-10 mt-10">
        <Tabs defaultValue="join" className="w-full">
          <TabsList className="bg-primary text-white">
            <TabsTrigger value="join">Join Wailist Report</TabsTrigger>
            <TabsTrigger value="careers">Contact Report</TabsTrigger>
          </TabsList>
          <TabsContent value="join">
            <JoinWaitlist />
          </TabsContent>
          <TabsContent value="careers">
            <ContactWaitlist />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ViewWaitList;
