import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  const conv_item=[{
    title:"Brunch this weekend?",desc:"— I'll be in your neighborhood doing errands this…"
    ,author:"adel"
  },{
    title:"Brunch this weekend? 2",desc:"— I'll be in your neighborhood doing errands this…"
    ,author:"imad"

  },{
    title:"Brunch this weekend? 3",desc:"— I'll be in your neighborhood doing errands this…"
    ,author:"ahmed"

  }]

  const itemData=[{
    img:"https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
  },{
    img:"https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
  }]
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box width={300} sx={{position:"fixed"}}>
    <Typography variant="h6"   fontWeight={100}>
    Online Friends
    </Typography>
    <AvatarGroup max={4} sx={{margin:0}}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100} mt={2} mb={2}> 
Latest photos    </Typography>

<ImageList  cols={3} rowHeight={150}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
<Typography variant="h6" fontWeight={100} mt={2} mb={2}> 
Latest conversations    </Typography>

<List  sx={{ position:"fixed", width: '100%', maxWidth: 360,
bgcolor: 'background.paper',maxHeight: 200, overflow: 'auto'}}>
   {conv_item.map((item) => (
     <div>
    
      <ListItem alignItems="flex-start"  autoFocus={true}>
        <ListItemAvatar>
          <Avatar  src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.author}
              </Typography>
              {item.desc}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
      ))}
    </List>
      </Box>
      </Box>
  )
} 

export default Rightbar