import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}) {
    // console.log(info)
    let INI_IMG = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let IMG_SMR = ""
  return (
    <div className='InfoBox' style={{textAlign:"center"}}>
        <br />
        <h1>Wheather</h1> 
        <hr />
        <h2>{info.weather}</h2>
        <div style={{display:"flex" , justifyContent:"center"}}>
            <Card sx={{ maxWidth: 340 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INI_IMG}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temperature: {info.temp}&deg;C</div>
                        <div>Feels Like: {info.feelsLike}&deg;C</div>
                        <div>Humidity: {info.humidity}</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}
