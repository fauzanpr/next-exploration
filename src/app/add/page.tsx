"use client"

import { useEffect } from "react";
import { z } from "zod";

function Page() {
    useEffect(() => {
        const userSchema = z.object({
            username: z.string(),
            password: z.string()
        });

        type UserType = z.infer<typeof userSchema>;

        const user: UserType = {
            username: "Fauzan",
            password: "HelloWorld"
        }
        console.log(userSchema.safeParse(user).success);
    }, []);
    return (
        <div>page</div>
    )
}

export default Page;