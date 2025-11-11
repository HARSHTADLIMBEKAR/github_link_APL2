import React from "react";
import { Button, TextField, Card, CardContent, Slider, Alert } from "@mui/material";

export default function MuiDemo(){
  return (
    <Card sx={{ maxWidth: 400, p:2 }}>
      <CardContent>
        <Alert severity="info">MUI Components Demo</Alert>
        <TextField fullWidth label="Your Name" margin="normal" />
        <Slider defaultValue={30} aria-label="slider" />
        <Button variant="contained">Submit</Button>
      </CardContent>
    </Card>
  );
}
