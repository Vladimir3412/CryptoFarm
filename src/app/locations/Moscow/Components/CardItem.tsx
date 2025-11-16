'use client'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, styled, Switch } from '@mui/material';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';

type CardItemProps = {
  id: number;
  name: string;
  status: string;
  hashrate: string;
  baseHashrate: string;
  income: string;
  baseIncome: string;
  img: string;
 onDelete?: (id: number) => void;
  onToggle?: (id: number) => void;
  onEdit?: (product: Product) => void; 
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

export default function CardItem({id, name, status, hashrate, baseHashrate, income,  baseIncome, img, onDelete, onToggle, onEdit, }: CardItemProps) {
    
  return (
    <div>
     <Card sx={{ width: 310, borderRadius:3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="10"
        image={img}
        src={img}
        sx={{ height: 250, width: '100%', objectFit: 'cover' }}        
        
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {/* Radeon RX 5700 XT */}
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">

          Статус: <span className={status === 'Активен' ? 'text-green-500' : 'text-gray-400'}>{status}</span>
 
        </Typography>

         <Typography gutterBottom variant="subtitle2" component="div">
          Hashrate: {hashrate}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          Доход в час: {income}
        </Typography>

       
      </CardContent>
      <CardActions>
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        {/* <Typography>Off</Typography> */}
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={() => onToggle?.(id)} />
        {/* <Typography>On</Typography> */}
      </Stack>       
      
          
     <Button size="small" onClick={() => onEdit?.({id, name, hashrate, income, img, baseHashrate, baseIncome, status})}>
  Редактировать 
</Button>
        <Button size="small" onClick={() => onDelete?.(id)}>
            Удалить
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}
