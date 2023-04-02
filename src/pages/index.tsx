import React from "react";
import TaskContainer from "@/components/TaskContainer";
import { Grid } from "@mui/material";

export default function Home() {
    return (
        <main>
            <div className='px-10 py-8'>
                <Grid container>
                    <Grid item xs={12} md={6} xl={3}>
                        <TaskContainer/>
                    </Grid>
                </Grid>
            </div>
        </main>
    )
}
