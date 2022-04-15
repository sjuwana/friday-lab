import React from "react";
import { Button, Stack, Card, CardContent ,Typography } from '@mui/material';

function NewsArticle({ data }) {
  return (
    <div className="news">
      
      <Card sx={{ width: 355, height: 450 }} variant="outlined">
      
      <CardContent>
        <Stack spacing={10}>
        <Typography variant="h5" component="div" color="error">
        {data.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" variant="h5">
        {data.description}
        </Typography>
        <Typography sx={{ fontSize: 14 }}  variant="h5" color="error">
        {data.publishedAt}
        </Typography>
        </Stack>
      </CardContent>

        <Button size="large" href={data.url} variant="contained">Link to the News</Button>
     
    </Card>
      
    </div>
  );
}
export default NewsArticle;
