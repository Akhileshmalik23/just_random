import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function page() {
  return (
    <>
      <div className="bg-black ">d</div>
      <div className="bg-red-50 mt-8 flex flex-col justify-center items-center text-black">
        {" "}
        Prisioner List
      </div>
      <Table>
        <TableCaption>A list of All Bail Eligible Prisioners</TableCaption>
        {/* --------------------- */}
        <TableHeader className="text-white">
          <TableRow className="dark ">
            <TableHead className="w-[100px] dark">Prisioner ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>IPC Sections</TableHead>
            <TableHead>Term Served(Yrs)</TableHead>
            <TableHead className="text-right">Max Punishment(Yrs)</TableHead>
          </TableRow>
        </TableHeader>
        {/* --------------------- */}
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Elligible</TableCell>
            <TableCell>Section 323</TableCell>
            <TableCell>6 Months</TableCell>
            <TableCell className="text-right">1 Years</TableCell>
          </TableRow>
          {/* --------------------- */}
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Elligible</TableCell>
            <TableCell>Section 324</TableCell>
            <TableCell>1.5 Years</TableCell>
            <TableCell className="text-right">3 Years</TableCell>
          </TableRow>
          {/* --------------------- */}
          <TableRow>
            <TableCell className="font-medium">INV003</TableCell>
            <TableCell>Elligible</TableCell>
            <TableCell>Section 354</TableCell>
            <TableCell>2.5 Years</TableCell>
            <TableCell className="text-right">1-5 Years</TableCell>
          </TableRow>
          {/* --------------------- */}
          <TableRow>
            <TableCell className="font-medium">INV004</TableCell>
            <TableCell>Elligible</TableCell>
            <TableCell>Section 379</TableCell>
            <TableCell>1.8 Years</TableCell>
            <TableCell className="text-right">3 Years</TableCell>
          </TableRow>
          {/* --------------------- */}
          <TableRow>
            <TableCell className="font-medium">INV005</TableCell>
            <TableCell>Elligible</TableCell>
            <TableCell>Section 411</TableCell>
            <TableCell>1.8 Years</TableCell>
            <TableCell className="text-right">3 Years</TableCell>
          </TableRow>
          {/* --------------------- */}
          <TableRow>
            <TableCell className="font-medium">INV006</TableCell>
            <TableCell>Elligible</TableCell>
            <TableCell>Section 498A</TableCell>
            <TableCell>2.1 Years</TableCell>
            <TableCell className="text-right">3 Years</TableCell>
          </TableRow>
          {/* --------------------- */}
        </TableBody>
      </Table>
    </>
  );
}
