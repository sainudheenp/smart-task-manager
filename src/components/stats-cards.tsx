"use client"

import { Card } from "@/components/ui/card"
import React, { ReactNode } from "react"
import { FaTasks, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"
import { SiSinglestore } from "react-icons/si"

type SingleCard = {
    title: string,
    value: string,
    icon: ReactNode
}

export default function StatCards() {

    const stats: SingleCard[] = [
        {
            title: "Total Tasks",
            value: "120",
            icon: <FaTasks />
        },
        {
            title: "Completed Tasks",
            value: "12",
            icon: <FaCheckCircle />
        },
        {
            title: "High Priority Tasks",
            value: "15",
            icon: <FaExclamationTriangle />
        }
    ]

    return (
        <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-7 gap-6 p-6">
            {stats.map((stat, idx) => (
                <SingleStatCard key={idx} singleCard={stat} />
            ))}
        </div>
    )

}

function SingleStatCard({ singleCard }: { singleCard: SingleCard }) {
    return (
        <Card className="p-4 flex flex-col gap-2 shadow-none">
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold light:text-slate-800">
                    {singleCard.title}
                </span>

                <div className="size-9 rounded-md flex items-center justify-center text-sm bg-primary/25 font-bold text-primary">
                    {singleCard.icon}
                </div>
            </div>

            <div className="text-3xl font-bold">{singleCard.value}</div>
        </Card>
    )
}
