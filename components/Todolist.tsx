"use client"

import * as React from "react"
import { format } from "date-fns"

import { Calendar } from "@/components/ui/calendar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"

const Todolist = () => {
    const [date, setDate] = React.useState<Date | undefined>()
    const [open, setOpen] = React.useState(false)

    return (
        <div className="space-y-4">
            <h1 className="text-xl font-semibold">Calendar</h1>

            {/* Calendar Popover */}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className=" w-full justify-start text-left font-normal"
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                            setDate(selectedDate)
                            setOpen(false)
                        }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>

            {/* Todo List */}
            <ScrollArea className="mt-4 max-h-[400px]">
                <div className="flex flex-col gap-4 pr-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Card key={i} className="p-2">
                            <div className="flex items-start gap-4">
                                <Checkbox id={`item-${i}`} />
                                <label
                                    htmlFor={`item-${i}`}
                                    className="text-sm leading-relaxed"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam, soluta.
                                </label>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default Todolist
