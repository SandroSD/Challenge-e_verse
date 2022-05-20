import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles(() =>{
  return(
    {
      AppBar:{
        padding:'1rem',
        backgroundColor: 'transparent !important',
        boxShadow:'none !important',
        position:'absolute !important'
      },
      geometry:{
        borderRadius: 10,
        background: `linear-gradient(#000000 0%, #000000 10%, #292929 50%, #080808 100%)`,
        boxShadow: '0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)'
      },
      body:{
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    }
  )
});




