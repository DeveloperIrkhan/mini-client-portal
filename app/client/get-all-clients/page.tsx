"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import LoadingScreen from "@/components/LoadingScreen";
import { IClients } from "@/interfaces/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [clients, setClients] = useState<IClients[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllClients = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/clients/get-all-clients");
      if (response.data.success === true) {
        toast.success(response?.data?.message);
        setClients(response.data.clients);
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to fetch clients");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllClients();
    console.log(clients);
  }, []);
  return (
    <div className="h-screen bg-white dark:bg-black">
      {isLoading && <LoadingScreen />}

      <div className="flex my-6 md:mx-10 mx-4 flex-col p-3 gap-4 justify-center items-center">
        <p className="text-lg text-black dark:text-white font-semibold">
          All Clients
        </p>

        {clients && clients.length === 0 && (
          <p className="text-gray-500">No clients found.</p>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Business Name</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {clients?.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.businessName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
