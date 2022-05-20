import { Grid, Input, Button, InputAdornment, Link } from '@mui/material';
import { AccountCircle, KeyRounded } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';
import { useState } from 'react';
import authService from '../service/auth';

import background from '../assets/background.png';

function Login() {
    const classes = useStyles();
    const history = useHistory();

    const [ mail, setMail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ error, setError ] = useState('');

    const handleLogin = async () => {
        try {
            const { data: { token } } = await authService.login(mail, password);
            localStorage.setItem('token_session', token);
            history.push("/");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className={classes.body} style={{ backgroundImage: `url(${background})`}}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Grid
                    item
                    xs={4}
                >
                    <Input
                        fullWidth
                        required
                        placeholder="Mail"
                        type="text"
                        startAdornment={
                            <InputAdornment position='start'>
                                <AccountCircle />
                            </InputAdornment>
                        }
                        value={mail}
                        onChange={(event) => setMail(event.target?.value)}
                    />
                    <Input
                        fullWidth
                        required
                        placeholder="Password"
                        type="password"
                        style={{ margin: '1em 0'}}
                        startAdornment={
                            <InputAdornment position='start'>
                                <KeyRounded />
                            </InputAdornment>
                        }
                        value={password}
                        onChange={(event) => setPassword(event.target?.value)}
                    />
                    {error &&
                        <div style={{ color: 'red' }}><strong>{error}</strong></div>
                    }
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleLogin}
                                disabled={!mail || !password}
                                style={{ margin: '1em 0'}}
                            >
                                login
                            </Button>
                        </Grid>
                        <Grid item>
                            <Link href="/sign-up"> Sign Up </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login;